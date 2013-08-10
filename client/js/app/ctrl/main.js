/* global angular */
angular.module('editor').controller('mainCtrl',
  function ($scope) {
    'use strict';

    $scope.title = 'untitled map';

    $scope.menu = [
      { label: 'Menu' },
      { label: 'Edit' }
    ];
  }
);
