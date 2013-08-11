/* global angular */
angular.module('editor').factory('map',
  function () {
    'use strict';

    function newMap(t) {
      if (t === undefined || isNaN(parseInt(t, 10))) {
        t = 9;
      }
      obj.data = [];
      for (var i = 0; i < obj.width; ++i) {
        var arr = [];
        for (var j = 0; j < obj.height; ++j) {
          arr.push(t);
        }
        obj.data.push(arr);
      }
    }

    var obj = {
      title: 'untitled map',
      width: 15,
      height: 15,
      data: [],
      new: newMap
    };

    return obj;
  }
);
