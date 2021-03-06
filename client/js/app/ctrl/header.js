/* global angular */
angular.module('editor').controller('headerCtrl',
  function ($scope, $rootScope, $http, $state, map, menu, tools, user) {
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

    $scope.simulateMap = function () {
      map.author = user.data.user;
      $http.post('/sendMap', { map: map }).then(
        function (resp) {
          console.log(resp.data);
          window.open(resp.data.url, '_blank');
        },
        function (err) {
          console.error(err);
        }
      );
    };

    var funcs = {
      grid: toggleGrid
    };
  }
);
