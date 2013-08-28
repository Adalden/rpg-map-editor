/* global angular, console */
angular.module('editor').factory('openSave',
  function ($http, map) {
    'use strict';

    function getMaps(cb) {
      $http.get('/maps').then(
        function (resp) {
          cb(resp.data);
        },
        function (err) {
          console.error(err);
        }
      );
    }

    function getMap(id, cb) {
      $http.get('/map/' + id).then(
        function (resp) {
          cb(resp.data);
        },
        function (err) {
          console.error(err);
        }
      );
    }

    function createMap(cb) {
      var obj = {
        title: map.title,
        width: map.width,
        height: map.height,
        data: map.data,
        events: map.events,
        env: map.env
      };

      $http.post('/map', obj).then(
        function (resp) {
          cb(resp.data);
        },
        function (err) {
          console.error(err);
        }
      );
    }

    function updateMap(cb) {
      var obj = {
        _id: map._id,
        title: map.title,
        width: map.width,
        height: map.height,
        data: map.data,
        events: map.events,
        env: map.env
      };

      $http.put('/map', obj).then(
        function () {
          cb();
        },
        function (err) {
          console.error(err);
        }
      );
    }

    return {
      getMaps: getMaps,
      getMap: getMap,
      createMap: createMap,
      updateMap: updateMap
    };
  }
);
