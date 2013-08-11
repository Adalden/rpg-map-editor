/* global angular */
angular.module('editor').controller('headerCtrl',
  function ($scope, $rootScope, $state, map) {
    'use strict';

    $scope.map = map;

    $scope.menu = [
      { label: 'Menu' },
      { label: 'Edit' }
    ];

    $scope.modalOpts = {
      backdropFade: true,
      dialogFade: true
    };

    $scope.newTileOptions = [
      { name: 'dirt', tile: 9 },
      { name: 'rock', tile: 33 },
      { name: 'grass', tile: 35 }
    ];
    $scope.newTileOption = $scope.newTileOptions[0];

    $scope.prepChangeName = function () {
      $state.transitionTo('index.changeName');
      $scope.showModal = true;
      $scope.newName = map.title;
    };

    $scope.changeName = function (title) {
      map.title = title;
      $scope.showModal = false;
    };

    $scope.prepNewMap = function () {
      $state.transitionTo('index.newMap');
      $scope.showModal = true;
    };

    $scope.newMap = function (name, width, height, tile) {
      map.title = name;
      map.width = width;
      map.height = height;
      map.new(tile);
      $rootScope.$emit('mapChanged');
      $scope.showModal = false;
    };
  }
);
