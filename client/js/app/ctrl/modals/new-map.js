/* global angular */
angular.module('editor').controller('newMapCtrl',
  function ($scope, $rootScope, dialog, map) {
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
      map.title = name;
      map.width = width;
      map.height = height;
      map.new(tile);
      $rootScope.$emit('mapChanged');
      dialog.close();
    };
  }
);
