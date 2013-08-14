/* global angular */
angular.module('editor').controller('mapViewCtrl',
  function ($rootScope, $scope, $timeout, map, tools, defaults) {
    'use strict';

    $scope.map = map;
    $scope.defaults = defaults;
    $scope.tools = tools;

    $scope.mouseMove = function (e) {
      if (e.which === 1) {
        placeTile(e);
      }

      if (e.which === 3) {
        placeTile(e);
      }
    };

    $scope.click = function (e) {
      e.preventDefault();
      if (e.which === 1) {
        placeTile(e);
      }
    };

    $scope.rightClick = function (e) {
      placeTile(e);
    };

    function placeTile(e) {
      var x = e.offsetX;
      var y = e.offsetY;

      var tileX = Math.floor(x / defaults.tileSize);
      var tileY = Math.floor(y / defaults.tileSize);

      var tileNum = (e.which === 1) ? tools.curTile : tools.curTile2;
      map.data[tileX][tileY] = tileNum;

      $rootScope.$emit('mapChanged');
    }

    $rootScope.$on('mapChanged', redrawCanvas);

    function redrawCanvas() {
      $timeout(
        function () {
          prepGrid();
          var canvas = document.getElementById('map');
          var ctx = canvas.getContext('2d');
          var ts = defaults.tileSize;

          for (var i = 0; i < map.data.length; ++i) {
            for (var j = 0; j < map.data[i].length; ++j) {
              drawImage(ctx, map.data[i][j], i, j, ts);
            }
          }
        }
      );
    }

    function drawImage(ctx, tileNum, x, y, ts) {
      var cols = defaults.tileCols;
      var sx = tileNum % cols;
      var sy = Math.floor(tileNum / cols);
      ctx.drawImage(img, sx * ts, sy * ts, ts, ts, x * ts, y * ts, ts, ts);
    }

    var img = new Image();
    img.onload = function () {
      map.new();
      $rootScope.$emit('mapChanged');
    };
    img.src = defaults.tileUrl;

    prepGrid();

    function prepGrid() {
      var canvas = document.getElementById('grid');
      var ctx = canvas.getContext('2d');
      var ts = defaults.tileSize;

      for (var i = 0; i < map.width; ++i) {
        for (var j = 0; j < map.height; ++j) {
          ctx.strokeStyle = 'black';
          ctx.strokeRect(ts * i, ts * j, ts, ts);
        }
      }
    }
  }
);
