/* global angular */
angular.module('editor', ['ui.bootstrap', 'ui.state']).config(
  function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index',
      {
        url: '/',
        views: {
          header: {
            templateUrl: 'tmpl/header.html',
            controller: 'headerCtrl'
          },
          sideBar: {
            templateUrl: 'tmpl/side-bar.html',
            controller: 'sideBarCtrl'
          },
          mapView: {
            templateUrl: 'tmpl/map-view.html',
            controller: 'mapViewCtrl'
          }
        }
      }
    );
  }
);
