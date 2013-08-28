/* global angular, _ */
angular.module('editor').controller('newEventCtrl',
  function ($scope, $rootScope, dialog, defaults, map) {
    'use strict';

    $scope.types = defaults.types;
    $scope.type = $scope.types[0];

    $scope.triggers = defaults.triggers;
    $scope.trigger = $scope.triggers[0];

    $scope.result = { e: {}, t: {} };

    $scope.create = function (type, trigger, result) {
      var obj = {
        name: type.name,
        type: type.type,
        id: type.id
      };

      if (type.props) {
        _.each(type.props, function (prop) {
          if (result.e[prop]) {
            obj[prop] = result.e[prop];
          }
        });
      }

      if (trigger.name !== 'none') {
        obj.trigger = {
          type: trigger.name
        };

        if (trigger.props) {
          _.each(trigger.props, function (prop) {
            if (result.t[prop]) {
              obj.trigger[prop] = result.t[prop];
            }
          });
        }
      }

      map.events.push(obj);
      $rootScope.$emit('mapChanged', 'events');
      dialog.close();
    };

    $scope.close = function () {
      dialog.close();
    };
  }
);
