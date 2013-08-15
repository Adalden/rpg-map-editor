/* global angular, console */
angular.module('editor').controller('signUpCtrl',
  function ($scope, $state, dialog, user) {
    'use strict';

    $scope.close = function () {
      dialog.close();
    };

    $scope.signup = function (username, pass) {
      user.signup(username, pass).then(
        function () {
          dialog.close();
        },
        function (err) {
          // TODO:: create an alert that goes here
          console.error(err);
        }
      );
    };

    $scope.goToLogin = function () {
      dialog.close();
      $state.transitionTo('index.login');
    };
  }
);
