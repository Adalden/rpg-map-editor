/* global angular */
angular.module('editor').controller('newMapCtrl',
  function ($scope, $rootScope, dialog, map, tools, defaults) {
    'use strict';

    $scope.name = defaults.mapName;
    $scope.width = defaults.mapWidth;
    $scope.height = defaults.mapHeight;

    $scope.tiles = defaults.backgroundTiles;
    $scope.tile = $scope.tiles[0];

    $scope.envs = defaults.mapEnvs;
    $scope.env = $scope.envs[0];

    $scope.close = function () {
      dialog.close();
    };

    $scope.accept = function (name, width, height, tile, env) {
      if ($scope.validate(name, width, height)) {
        return;
      }

      map.title = name;
      map.width = width;
      map.height = height;
      map.x = 0;
      map.y = 0;
      map.env = env;

      tools.backgroundTile = tile;

      map.new();
      $rootScope.$emit('mapChanged');
      dialog.close();
    };

    $scope.validate = function (name, width, height) {
      if (!name) {
        return true;
      }

      if (width === '' || isNaN(width) || width < 0) {
        return true;
      }

      if (height === '' || isNaN(height) || height < 0) {
        return true;
      }

      return false;
    };
  }
);
