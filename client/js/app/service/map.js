/* global angular */
angular.module('editor').factory('map',
  function (tools, defaults) {
    'use strict';

    function newMap() {
      var t = tools.backgroundTile;
      obj.data = {
        bottom: [],
        middle: [],
        top: []
      };

      for (var i = 0; i < obj.width; ++i) {
        var arr = [];
        for (var j = 0; j < obj.height; ++j) {
          arr.push(t);
        }
        obj.data.bottom.push(arr);
        obj.data.middle.push([]);
        obj.data.top.push([]);
      }

      obj.events.length = 0;
    }

    var obj = {
      title: defaults.mapName,
      width: defaults.mapWidth,
      height: defaults.mapHeight,
      x: defaults.mapX,
      y: defaults.mapY,
      data: {},
      events: [],
      env: defaults.mapEnv,
      new: newMap
    };

    return obj;
  }
);
