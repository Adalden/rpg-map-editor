/* global angular */
angular.module('editor').factory('tools',
  function () {
    'use strict';

    return {
      curTile: 0,
      curTile2: 0,
      showGrid: false,
      backgroundTile: 9
    };
  }
);
