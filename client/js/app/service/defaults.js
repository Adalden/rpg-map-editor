/* global angular */
angular.module('editor').factory('defaults',
  function () {
    'use strict';

    return {

      // tiles
      tileSize: 48,
      tileCols: 8,

      bottomUrl: 'img/bottom.jpg',
      bottomNum: 96,
      middleUrl: 'img/middle.png',
      middleNum: 96,
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
        { name: 'dirt', id: 9 },
        { name: 'rock', id: 33 },
        { name: 'grass', id: 35 }
      ]
    };
  }
);
