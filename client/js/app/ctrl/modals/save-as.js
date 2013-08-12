/* global angular, _ */
angular.module('editor').controller('saveAsCtrl',
  function ($scope, $rootScope, dialog, map, openSave) {
    'use strict';

    $scope.items = [];
    openSave.getMaps(function (data) {
      $scope.items = data;
    });

    $scope.name = map.title;
    $scope.setName = function (item) {
      $scope.name = item.name;
    };

    $scope.save = function (name) {
      var item = _.find($scope.items, function (item) {
        return item.name === name;
      });

      if (item) {
        map.title = item.name;
        map._id = item._id;
        openSave.updateMap(function () {
          dialog.close();
        });
      }
      else {
        map.title = name;
        openSave.createMap(function (data) {
          map._id = data.id;
          dialog.close();
        });
      }
    };

    $scope.close = function () {
      dialog.close();
    };
  }
);
