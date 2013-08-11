/* global angular */
angular.module('editor').controller('sideBarCtrl',
  function ($scope, map, tools, defaults) {
    'use strict';

    $scope.map = map;
    $scope.tools = tools;

    $scope.choseTile = function (newTile) {
      tools.curTile = newTile;
    };

    $scope.getNumber = function () {
      var arr = [];
      for (var i = 0; i < defaults.numTiles; ++i) {
        arr.push(i);
      }
      return arr;
    };

    $scope.getStyle = function (num) {
      var url = defaults.tileUrl;
      var cols = defaults.tileCols;
      var ts = defaults.tileSize;

      var x = (num % cols) * ts;
      var y = Math.floor(num / cols) * ts;

      var str = 'background:url(' + url + ') ' + -x + 'px ' + -y + 'px;';
      str += 'width:' + ts + 'px;';
      str += 'height:' + ts + 'px;';

      return str;
    };
  }
);