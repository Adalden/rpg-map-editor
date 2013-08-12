/* global angular */
angular.module('editor').controller('exportCtrl',
  function ($scope, $window, dialog, map, defaults) {
    'use strict';

    $scope.map = map;
    $scope.url = $window.location.protocol + '//' + $window.location.host + '/' + defaults.tileUrl;

    $scope.close = function () {
      dialog.close();
    };
  }
);
