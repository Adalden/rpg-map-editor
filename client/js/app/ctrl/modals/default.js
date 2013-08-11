/* global angular */
angular.module('editor').controller('defaultModalCtrl',
  function ($scope, dialog) {
    'use strict';

    $scope.close = function () {
      dialog.close();
    };
  }
);
