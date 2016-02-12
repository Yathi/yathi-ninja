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
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
        .state('app', {
            url:'/',
            views: {
                'header': {
                    templateUrl: '',
                },
                'content': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                }
            }
        })
    
        .state('app.aboutus', {
            url: '/about',
            views: {
                'content@': {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                }
            }
    })
    
    $urlRouterProvider.otherwise('/');
});