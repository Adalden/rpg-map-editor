/* global angular */
angular.module('editor').controller('headerCtrl',
  function ($scope, $rootScope, $state, map) {
    'use strict';

    $scope.map = map;

    $scope.menu = [
      { label: 'Menu' },
      { label: 'Edit' }
    ];

    $scope.changeName = function () {
      $state.transitionTo('index.changeName');
    };

    $scope.newMap = function () {
      $state.transitionTo('index.newMap');
    };
  }
);
