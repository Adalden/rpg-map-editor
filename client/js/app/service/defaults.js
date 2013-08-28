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

      eventsUrl: 'img/events.png',
      eventsNum: 8,

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
        { name: 'rock',  id: 33 },
        { name: 'grass', id: 22 },
        { name: 'wood',  id: 7 }
      ],

      // events
      types: [
        { name: 'Bush',             type: 'bush',     id: 0, props: [ 'x', 'y' ] },
        { name: 'Rock',             type: 'rock',     id: 1, props: [ 'x', 'y' ] },
        { name: 'Sign',             type: 'sign',     id: 2, props: [ 'x', 'y', 'msg' ] },
        { name: 'Switch',           type: 'switch',   id: 3, props: [ 'x', 'y', 'type' ] },
        { name: 'Block',            type: 'block',    id: 4, props: [ 'x', 'y', 'moveOnce' ] },
        { name: 'Treasure Box',     type: 'treasure', id: 5, props: [ 'x', 'y', 'contains', 'hidden' ] },
        { name: 'Door',             type: 'door',     id: 6, props: [ 'x', 'y', 'type', 'toMap', 'toX', 'toY' ] },
        { name: 'Hole',             type: 'hole',     id: 7, props: [ 'x', 'y', 'toMap', 'toX', 'toY' ] },
        { name: 'Kill All Enemies', type: 'killAll' }
      ],

      triggers: [
        { name: 'none' },
        { name: 'playSound' },
        { name: 'dropItem',     props: [ 'item', 'x', 'y' ] },
        { name: 'openDoor',     props: [ 'x', 'y' ] },
        { name: 'showTreasure', props: [ 'x', 'y' ] }
      ]
    };
  }
);
