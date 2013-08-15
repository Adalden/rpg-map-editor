/* global angular */
angular.module('editor').factory('user',
  function ($http, $q) {
    'use strict';

    var user = {
      isLoggedIn: false,
      data: null,
      login: login,
      logout: logout,
      signup: signup
    };

    function login(username, pass) {
      var deferred = $q.defer();

      var obj = {
        user: username,
        pass: pass
      };

      $http.post('/login', obj).then(
        function (resp) {
          var d = resp.data;
          if (!d.success) {
            return deferred.reject(d.err);
          }

          user.isLoggedIn = true;
          user.data = d.user;
          deferred.resolve();
        },
        deferred.reject
      );

      return deferred.promise;
    }

    function signup(username, pass) {
      var deferred = $q.defer();

      var obj = {
        user: username,
        pass: pass
      };

      $http.post('/signup', obj).then(
        function (resp) {
          var d = resp.data;
          if (!d.success) {
            return deferred.reject(d.err);
          }

          user.isLoggedIn = true;
          user.data = d.user;
          deferred.resolve();
        },
        deferred.reject
      );

      return deferred.promise;
    }

    function logout() {
      $http.post('/logout');
      user.data = null;
      user.isLoggedIn = false;
    }

    $http.get('/user').then(
      function (resp) {
        var d = resp.data;
        if (d.success) {
          user.isLoggedIn = true;
          user.data = d.user;
        }
      }
    );

    return user;
  }
);
