/* global angular, mainMenu, _ */
angular.module('editor', ['ui.bootstrap', 'ui.state']).config(
  function ($stateProvider, $urlRouterProvider) {
    'use strict';

    var menu = mainMenu;

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
      });

    _.each(menu, function (m) {
      _.each(m.items, function (i) {
        if (!i.isCommand) {
          createState(i);
        }
      });
    });

    $urlRouterProvider.otherwise('/');

    // -- Private Functions ---------------------------

    function createState(m) {
      $stateProvider
        .state(m.state, {
          onEnter: ['$state', '$dialog', function ($state, $dialog) {
            $dialog.dialog({
              dialogFade: true,
              backdropFade: true,
              templateUrl: m.tmpl,
              controller: m.ctrl
            }).open().then(
              function () {
                return $state.transitionTo('index');
              }
            );
          }]
        });
    }
  }
);
