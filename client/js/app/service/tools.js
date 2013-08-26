/* global angular */
angular.module('editor').factory('tools',
  function (defaults) {
    'use strict';

    return {
      leftTile: defaults.leftTile,
      leftLayer: defaults.leftLayer,
      rightTile: defaults.rightTile,
      rightLayer: defaults.rightLayer,
      showGrid: defaults.showGrid,
      backgroundTile: defaults.backgroundTile
    };
  }
);
