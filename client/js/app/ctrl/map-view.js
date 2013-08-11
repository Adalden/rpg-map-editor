/* global angular */
angular.module('editor').controller('mapViewCtrl',
  function ($rootScope, $scope, map, tools, defaults) {
    'use strict';

    $scope.map = map;
    $scope.defaults = defaults;

    $scope.clickMap = function (e) {
      var x = e.offsetX;
      var y = e.offsetY;

      var tileX = Math.floor(x / defaults.tileSize);
      var tileY = Math.floor(y / defaults.tileSize);

      map.data[tileX][tileY] = tools.curTile;

      $rootScope.$emit('mapChanged');
    };

    $rootScope.$on('mapChanged', redrawCanvas);

    function redrawCanvas() {
      var canvas = document.getElementById('map');
      var ctx = canvas.getContext('2d');
      var ts = defaults.tileSize;

      for (var i = 0; i < map.data.length; ++i) {
        for (var j = 0; j < map.data[i].length; ++j) {
          drawImage(ctx, map.data[i][j], i, j, ts);
        }
      }
    }

    function drawImage(ctx, tileNum, x, y, ts) {
      var cols = defaults.tileCols;
      var sx = tileNum % cols;
      var sy = Math.floor(tileNum / cols);
      ctx.drawImage(img, sx * ts, sy * ts, ts, ts, x * ts, y * ts, ts, ts);
    }

    map.new();

    var img = new Image();
    img.onload = function () {
      setTimeout(redrawCanvas);
    };
    img.src = defaults.tileUrl;
  }
);
