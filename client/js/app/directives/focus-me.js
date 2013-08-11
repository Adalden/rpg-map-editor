/* global angular */
angular.module('editor').directive('focusMe',
  function ($timeout) {
    'use strict';

    return {
      link: function (scope, el, attrs) {
        scope.$watch(attrs.focusMe,
          function (value) {
            if (value) {
              $timeout(
                function () {
                  el[0].focus();
                }
              );
            }
          }
        );
      }
    };
  }
);
