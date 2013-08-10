/* global angular */
angular.module('editor').controller('mainCtrl',
  function ($scope) {
    'use strict';

    $scope.title = 'untitled map';

    $scope.tileSize = 48;
    $scope.mapWidth = 22;
    $scope.mapHeight = 14;

    var map = [];
    for (var i = 0; i < $scope.mapWidth; ++i) {
      var arr = [];
      for (var j = 0; j < $scope.mapHeight; ++j) {
        arr.push(9);
      }
      map.push(arr);
    }

    $scope.menu = [
      { label: 'Menu' },
      { label: 'Edit' }
    ];

    $scope.modalOpts = {
      backdropFade: true,
      dialogFade: true
    };


    $scope.newMap = function (name, width, height) {
      $scope.title = name;
      $scope.mapWidth = width;
      $scope.mapHeight = height;
      $scope.showModal = false;
    };


    $scope.curTileChoice = 0;

    $scope.tileTotal = 96;

    $scope.getNumber = function (num) {
      var arr = [];
      for (var i = 0; i < num; ++i) {
        arr.push(i);
      }
      return arr;
    };

    $scope.getStyle = function (num) {
      var url = 'img/tiles.jpg';
      var cols = 8;
      var margin = 3;

      var tsize = $scope.tileSize + margin;

      var x = num % cols;
      x *= tsize;

      var y = Math.floor(num / cols);
      y *= tsize;

      var str = 'background:url(' + url + ') ' + -x + 'px ' + -y + 'px;';
      str += 'width:' + $scope.tileSize + 'px;';
      str += 'height:' + $scope.tileSize + 'px;';

      return str;
    };


    $scope.clickMap = function (e) {
      var x = e.offsetX;
      var y = e.offsetY;

      var tileX = Math.floor(x / $scope.tileSize);
      var tileY = Math.floor(y / $scope.tileSize);

      map[tileX][tileY] = $scope.curTileChoice;

      redrawCanvas();
    };

    function redrawCanvas() {
      var canvas = document.getElementById('map');
      var ctx = canvas.getContext('2d');
      var ts = $scope.tileSize;

      for (var i = 0; i < map.length; ++i) {
        for (var j = 0; j < map[i].length; ++j) {
          drawImage(ctx, map[i][j], i, j, ts);
        }
      }
    }

    function drawImage(ctx, tileNum, x, y, ts) {
      var cols = 8;
      var margin = 3;
      var sx = tileNum % cols;
      var sy = Math.floor(tileNum / cols);
      ctx.drawImage(img, sx * (ts + margin), sy * (ts + margin), ts, ts, x * ts, y * ts, ts, ts);
    }

    var img = new Image();
    img.onload = function () {
      setTimeout(redrawCanvas);
    };
    img.src = 'img/tiles.jpg';


  }
);
