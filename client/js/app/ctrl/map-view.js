/* global angular, _ */
angular.module('editor').controller('mapViewCtrl',
  function ($rootScope, $scope, $timeout, map, tools, defaults) {
    'use strict';

    $scope.map = map;
    $scope.defaults = defaults;
    $scope.tools = tools;

    var ts = defaults.tileSize;
    var cols = defaults.tileCols;
    var layers = ['bottom', 'middle', 'top', 'events'];

    $scope.mouseMove = function (e) {
      if (e.which === 1) {
        placeTile(e, true);
      }

      if (e.which === 3) {
        placeTile(e, true);
      }
    };

    $scope.click = function (e) {
      if (e.which === 1) {
        placeTile(e);
      }
    };

    $scope.rightClick = function (e) {
      placeTile(e);
    };

    function placeTile(e, moving) {
      var x = e.offsetX;
      var y = e.offsetY;
      var which = e.which === 1 ? 'left' : 'right';

      var tileX = Math.floor(x / ts);
      var tileY = Math.floor(y / ts);

      if (tools[which + 'Layer'] === 'events') {
        if (!moving) {
          performEvent(tileX, tileY, tools[which + 'Tile']);
        }
        return;
      }

      map.data[tools[which + 'Layer']][tileX][tileY] = tools[which + 'Tile'];
      $rootScope.$emit('mapChanged', tools[which + 'Layer']);
    }

    function performEvent(x, y, id) {
      if (id === 'delete') {
        _.each(map.events, function (e) {
          if (parseInt(e.x, 10) === x && parseInt(e.y, 10) === y) {
            map.events = _.without(map.events, e);
            $rootScope.$emit('mapChanged', 'events');
            return;
          }
        });
      }
      else if (id === 'something') {

      }
      else {
        var obj = {
          name: id.name,
          type: id.type,
          id: id.id,
          x: x,
          y: y
        };

        map.events.push(obj);
        $rootScope.$emit('mapChanged', 'events');
      }
    }

    $rootScope.$on('mapChanged', redrawCanvi);

    function redrawCanvi(e, layer) {
      $timeout(
        function () {
          if (layer) {
            redrawCanvas(layer);
          }
          else {
            _.each(layers, function (layer) {
              redrawCanvas(layer);
            });
            drawGrid();
          }
        }
      );
    }

    function redrawCanvas(layer) {
      $timeout(
        function () {
          var canvas = document.getElementById(layer);
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, map.width * ts, map.height * ts);

          if (layer === 'events') return drawEvents(ctx);

          _.each(map.data[layer], function (row, i) {
            _.each(row, function (cell, j) {
              drawImage(ctx, cell, i, j, layer);
            });
          });
        }
      );
    }

    function drawEvents(ctx) {
      _.each(map.events, function (e) {
        if ('id' in e) {
          var x = parseInt(e.x, 10) || 0;
          var y = parseInt(e.y, 10) || 0;
          drawEvent(ctx, e.id, x, y, 'events');
        }
      });
    }

    // THIS ONLY EXISTS CUZ I MADE THE EVENTS WRONG, IT SHOULD BE HORIZONTAL
    function drawEvent(ctx, tileNum, x, y, layer) {
      var sy = tileNum;
      ctx.drawImage(imgs[layer], 0, sy * ts, ts, ts, x * ts, y * ts, ts, ts);
    }

    function drawImage(ctx, tileNum, x, y, layer) {
      var sx = tileNum % cols;
      var sy = Math.floor(tileNum / cols);
      ctx.drawImage(imgs[layer], sx * ts, sy * ts, ts, ts, x * ts, y * ts, ts, ts);
    }

    function drawGrid() {
      var canvas = document.getElementById('grid');
      var ctx = canvas.getContext('2d');

      for (var i = 0; i < map.width; ++i) {
        for (var j = 0; j < map.height; ++j) {
          ctx.strokeStyle = 'black';
          ctx.strokeRect(ts * i, ts * j, ts, ts);
        }
      }
    }

    var imgs = {};
    _.each(layers, function (layer) {
      imgs[layer] = new Image();
      imgs[layer].onload = function () {
        $rootScope.$emit('mapChanged', layer);
      };
      imgs[layer].src = defaults[layer + 'Url'];
    });

    map.new();
    $timeout(function () {
      drawGrid();
    });
  }
);
