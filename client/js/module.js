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
          onEnter: function ($state, $dialog) {
            $dialog.dialog({
              dialogFade: true,
              backdropFade: true,
              templateUrl: 'tmpl/modals/change-name.html',
              controller: 'changeNameCtrl'
            }).open().then(
              function () {
                return $state.transitionTo('index');
              }
            );
          }
        })

        .state('index.newMap', {
          onEnter: function ($state, $dialog) {
            $dialog.dialog({
              dialogFade: true,
              backdropFade: true,
              templateUrl: 'tmpl/modals/new-map.html',
              controller: 'newMapCtrl'
            }).open().then(
              function () {
                return $state.transitionTo('index');
              }
            );
          }
        });
  }
);
