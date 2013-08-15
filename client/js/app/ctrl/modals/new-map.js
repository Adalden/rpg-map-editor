/* global angular */
angular.module('editor').controller('newMapCtrl',
  function ($scope, $rootScope, dialog, map, tools) {
    'use strict';

    $scope.name = 'untitled map';
    $scope.width = 15;
    $scope.height = 15;

    $scope.tiles = [
      { name: 'dirt', id: 9 },
      { name: 'rock', id: 33 },
      { name: 'grass', id: 35 }
    ];
    $scope.tile = $scope.tiles[0];

    $scope.close = function () {
      dialog.close();
    };

    $scope.accept = function (name, width, height, tile) {
      if ($scope.validate(name, width, height)) {
        return;
      }

      map.title = name;
      map.width = width;
      map.height = height;
      tools.defaultTile = tile;
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
