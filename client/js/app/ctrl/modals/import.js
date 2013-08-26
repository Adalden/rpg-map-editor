/* global angular */
angular.module('editor').controller('importCtrl',
  function ($scope, $rootScope, $window, dialog, map, defaults) {
    'use strict';

    $scope.close = function () {
      dialog.close();
    };

    $scope.accept = function(newMap) {
      var temp = JSON.parse(newMap);
      map.title = temp.title || defaults.mapName;
      map.width = temp.width || defaults.mapWidth;
      map.height = temp.height || defaults.mapHeight;
      map.data = temp.data;
      map.events = temp.events;
      map.env = temp.env || defaults.mapEnv;

      $rootScope.$emit('mapChanged');
      dialog.close();
    };
  }
);
