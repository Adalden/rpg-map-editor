/* global angular */
angular.module('editor').controller('openCtrl',
  function ($scope, $rootScope, dialog, map, openSave) {
    'use strict';

    $scope.items = [];
    openSave.getMaps(function (data) {
      $scope.items = data;
    });

    $scope.open = function (file) {
      openSave.getMap(file._id, function (m) {
        map.title = m.title;
        map.width = m.width;
        map.height = m.height;
        map.data = m.data;
        map._id = m._id;
        $rootScope.$emit('mapChanged');
        dialog.close();
      });
    };

    $scope.close = function () {
      dialog.close();
    };
  }
);
