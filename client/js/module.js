/* global angular */
angular.module('editor', ['ui.bootstrap', 'ui.state']).config(
  function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
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
      })

        .state('index.changeName', {
          views: {
            modal: {
              templateUrl: 'tmpl/modals/change-name.html',
              controller: 'headerCtrl'
            }
          }
        })

        .state('index.newMap', {
          views: {
            modal: {
              templateUrl: 'tmpl/modals/new-map.html',
              controller: 'headerCtrl'
            }
          }
        });
  }
);
