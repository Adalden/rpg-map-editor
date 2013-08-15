/* global angular, _ */
angular.module('editor').controller('sideBarCtrl',
  function ($scope, $rootScope, map, tools, defaults) {
    'use strict';

    $scope.map = map;
    $scope.tools = tools;

    $scope.choseTile = function (newTile) {
      tools.curTile = newTile;
    };

    $scope.choseTile2 = function (newTile) {
      tools.curTile2 = newTile;
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

    $scope.addRow = function () {
      _.each(map.data, function (row) {
        row.push(tools.defaultTile);
      });
      ++map.height;
      $rootScope.$emit('mapChanged');
    };

    $scope.removeRow = function () {
      _.each(map.data, function (row) {
        --row.length;
      });
      --map.height;
      $rootScope.$emit('mapChanged');
    };

    $scope.addColumn = function () {
      var tmp = [];
      for (var i = 0; i < map.height; ++i) {
        tmp.push(tools.defaultTile);
      }
      map.data.push(tmp);
      ++map.width;
      $rootScope.$emit('mapChanged');
    };

    $scope.removeColumn = function () {
      --map.data.length;
      --map.width;
      $rootScope.$emit('mapChanged');
    };
  }
);
