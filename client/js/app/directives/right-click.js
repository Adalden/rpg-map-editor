/* global angular */
angular.module('editor').directive('ngRightClick',
  function ($parse) {
    'use strict';

    return function (scope, el, attrs) {
      var fn = $parse(attrs.ngRightClick);
      el.bind('contextmenu',
        function (e) {
          scope.$apply(
            function () {
              e.preventDefault();
              fn(scope, { $event: e });
            }
          );
        }
      );
    };
  }
);
