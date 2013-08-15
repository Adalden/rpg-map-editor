/* global angular */
angular.module('editor').controller('headerCtrl',
  function ($scope, $rootScope, $state, map, menu, tools, user) {
    'use strict';

    $scope.map = map;
    $scope.menu = menu;
    $scope.user = user;

    $scope.goToState = function (state) {
      if (state.isCommand) {
        funcs[state.id]();
        return;
      }
      $state.transitionTo(state.state || state);
    };

    $scope.logout = function () {
      user.logout();
    };

    function toggleGrid() {
      tools.showGrid = !tools.showGrid;
    }

    var funcs = {
      grid: toggleGrid
    };
  }
);
