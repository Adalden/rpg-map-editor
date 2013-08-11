/* global angular */
angular.module('editor').controller('headerCtrl',
  function ($scope, $rootScope, $state, map, menu) {
    'use strict';

    $scope.map = map;
    $scope.menu = menu;

    $scope.goToState = function (state) {
      $state.transitionTo(state);
    };
  }
);
