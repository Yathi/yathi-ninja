'use strict';

/**
 * @ngdoc overview
 * @name yathiNinjaApp
 * @description
 * # yathiNinjaApp
 *
 * Main module of the application.
 */
angular
  .module('yathiNinjaApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
