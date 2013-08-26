/* global angular, _ */
angular.module('editor').controller('sideBarCtrl',
  function ($scope, $rootScope, map, tools, defaults) {
    'use strict';

    $scope.map = map;
    $scope.tools = tools;
    $scope.envs = defaults.mapEnvs;
    $scope.curLayer = 'bottom';

    var cols = defaults.tileCols;
    var ts = defaults.tileSize;

    $scope.choseTile = function (which, newTile, newLayer) {
      tools[which + 'Tile'] = newTile;
      tools[which + 'Layer'] = newLayer;
    };

    $scope.getNumber = function (layer) {
      var arr = [];
      for (var i = 0; i < defaults[layer + 'Num']; ++i) {
        arr.push(i);
      }
      return arr;
    };

    $scope.getSelected = function () {
      return $scope.num==$scope.tools.leftTile || $scope.num==$scope.tools.rightTile
    }

    $scope.getStyle = function (num, layer) {
      var url = defaults[layer + 'Url'];
      var x = (num % cols) * ts;
      var y = Math.floor(num / cols) * ts;

      var str = 'background:url(' + url + ') ' + -x + 'px ' + -y + 'px;';
      str += 'width:' + ts + 'px;';
      str += 'height:' + ts + 'px;';

      return str;
    };

    $scope.addRow = function () {
      _.each(map.data.bottom, function (row) {
        row.push(tools.backgroundTile);
      });
      ++map.height;
      $rootScope.$emit('mapChanged');
    };

    $scope.removeRow = function () {
      _.each(map.data, function (layer) {
        _.each(layer, function (row) {
          if (row.length === map.height) {
            --row.length;
          }
        });
      });
      --map.height;
      $rootScope.$emit('mapChanged');
    };

    $scope.addColumn = function () {
      var tmp = [];
      for (var i = 0; i < map.height; ++i) {
        tmp.push(tools.backgroundTile);
      }
      map.data.bottom.push(tmp);
      map.data.middle.push([]);
      map.data.top.push([]);
      ++map.width;
      $rootScope.$emit('mapChanged');
    };

    $scope.removeColumn = function () {
      _.each(map.data, function (layer) {
        --layer.length
      });
      --map.width;
      $rootScope.$emit('mapChanged');
    };
  }
);
