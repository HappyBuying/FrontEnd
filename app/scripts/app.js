'use strict';

/**
 * @ngdoc overview
 * @name happyBuyingApp
 * @description
 * # happyBuyingApp
 *
 * Main module of the application.
 */
angular
  .module('happyBuyingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'checklist-model',
    'ngMap',
    'naif.base64'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
      })
      .when('/search', {
        templateUrl: 'views/result.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/form/:company', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/property',{
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
