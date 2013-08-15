/* global angular */
angular.module('editor').controller('defaultModalCtrl',
  function ($scope, dialog, user, map) {
    'use strict';

    $scope.user = user;
    $scope.map = map;

    $scope.close = function () {
      dialog.close();
    };
  }
);
