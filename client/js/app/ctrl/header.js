/* global angular */
angular.module('editor').controller('headerCtrl',
  function ($scope, $rootScope, $state, map, menu, tools) {
    'use strict';

    $scope.map = map;
    $scope.menu = menu;

    $scope.goToState = function (state) {
      if (state.isCommand) {
        funcs[state.id]();
        return;
      }
      $state.transitionTo(state.state);
    };

    function toggleGrid() {
      tools.showGrid = !tools.showGrid;
    }

    var funcs = {
      grid: toggleGrid
    };
  }
);
