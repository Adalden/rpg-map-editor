/* global angular, console */
angular.module('editor').controller('openCtrl',
  function ($scope, $rootScope, $http, dialog, map) {
    'use strict';

    $scope.items = [];
    $http.get('/maps').then(
      function (resp) {
        $scope.items = resp.data;
      },
      function (err) {
        console.error(err);
      }
    );

    $scope.open = function (file) {
      $http.get('/map/' + file._id).then(
        function (resp) {
          var m = resp.data;
          map.title = m.title;
          map.width = m.width;
          map.height = m.height;
          map.data = m.data;
          map._id = m._id;
          $rootScope.$emit('mapChanged');
          dialog.close();
        },
        function (err) {
          console.error(err);
        }
      );
    };

    $scope.close = function () {
      dialog.close();
    };
  }
);
