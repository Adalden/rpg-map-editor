/* global angular */
angular.module('editor').controller('mainCtrl',
  function ($scope) {
    'use strict';

    $scope.title = 'untitled map';

    $scope.menu = [
      { label: 'Menu' },
      { label: 'Edit' }
    ];

    $scope.modalOpts = {
      backdropFade: true,
      dialogFade: true
    };

    $scope.mapWidth = 1500;
    $scope.mapHeight = 1500;

    $scope.newMap = function (name, width, height) {
      $scope.title = name;
      $scope.mapWidth = width;
      $scope.mapHeight = height;
      $scope.showModal = false;
    };
  }
);
