/* global angular, console */
angular.module('editor').controller('loginCtrl',
  function ($scope, dialog, user) {
    'use strict';

    $scope.close = function () {
      dialog.close();
    };

    $scope.login = function (username, pass) {
      user.login(username, pass).then(
        function () {
          dialog.close();
        },
        function (err) {
          // TODO:: create an alert that goes here
          console.error(err);
        }
      );
    };
  }
);
