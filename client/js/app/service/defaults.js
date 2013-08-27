/* global angular */
angular.module('editor').factory('defaults',
  function () {
    'use strict';

    return {

      // tiles
      tileSize: 40,
      tileCols: 8,

      bottomUrl: 'img/bottom.png',
      bottomNum: 48,
      middleUrl: 'img/middle.png',
      middleNum: 56,
      topUrl: 'img/top.png',
      topNum: 96,

      // map
      mapWidth: 15,
      mapHeight: 15,
      mapName: 'untitled map',
      mapEnv: 'normal',
      mapEnvs: ['normal', 'rainy', 'cloudy', 'dark'],

      // tools
      leftTile: 0,
      leftLayer: 'bottom',
      rightTile: 0,
      rightLayer: 'bottom',
      showGrid: false,
      backgroundTile: 9,
      backgroundTiles: [
        { name: 'stone', id: 9 },
        { name: 'rock', id: 33 },
        { name: 'grass', id: 22 },
        { name: 'wood', id: 7 }
      ]
    };
  }
);
