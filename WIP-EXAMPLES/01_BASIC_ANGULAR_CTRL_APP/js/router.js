var angular = angular || {};

angular.module('app.router', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('basic', {
            url: '/',
            templateUrl:'views/basic.html',
            controller: 'BasicCtrl'
        })
    })
