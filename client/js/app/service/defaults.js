/* global angular */
angular.module('editor').factory('defaults',
  function () {
    'use strict';

    return {
      numTiles: 96,
      tileCols: 8,
      tileSize: 48,
      tileUrl: 'img/tiles.jpg',
      mapWidth: 15,
      mapHeight: 15,
      mapName: 'untitled map'
    };
  }
);
