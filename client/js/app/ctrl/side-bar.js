/* global angular, _ */
angular.module('editor').controller('sideBarCtrl',
  function ($scope, $rootScope, $state, map, tools, defaults) {
    'use strict';

    $scope.map = map;
    $scope.tools = tools;
    $scope.envs = defaults.mapEnvs;
    $scope.eventOptions = defaults.types;
    $scope.curLayer = 'bottom';

    var cols = defaults.tileCols;
    var ts = defaults.tileSize;

    // +-+ Tile Methods +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ \\

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

    $scope.getStyle = function (num, layer) {
      var url = defaults[layer + 'Url'];
      var x = (num % cols) * ts;
      var y = Math.floor(num / cols) * ts;

      var str = 'background:url(' + url + ') ' + -x + 'px ' + -y + 'px;';
      str += 'width:' + ts + 'px;';
      str += 'height:' + ts + 'px;';

      return str;
    };

    // +-+ Event Methods +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ \\

    $scope.goToNewEvent = function () {
      $state.transitionTo('index.newEvent');
    };

    // +-+ Object Methods +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ \\

    $scope.choseEvent = function (which, e) {
      tools[which + 'Layer'] = 'events';
      tools[which + 'Tile'] = e;
    };

    $scope.getEStyle = function (e) {
      var url = defaults.eventsUrl;
      var x = 0;
      var y = e.id * ts;

      var str = 'background:url(' + url + ') ' + -x + 'px ' + -y + 'px;';
      str += 'width:' + ts + 'px;';
      str += 'height:' + ts + 'px;';

      return str;
    };







    // +-+ Property Methods +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ \\

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
        --layer.length;
      });
      --map.width;
      $rootScope.$emit('mapChanged');
    };
  }
);
