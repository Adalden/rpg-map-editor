/* global angular */
angular.module('editor').controller('changeNameCtrl',
  function ($scope, dialog, map) {
    'use strict';

    $scope.name = map.title;

    $scope.close = function () {
      dialog.close();
    };

    $scope.accept = function (name) {
      map.title = name;
      dialog.close();
    };
  }
);
