var angular = angular || {};

angular.module('app.router', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('basic', {
            url: '/',
            templateUrl:'views/basic.html',
            controller: 'BasicCtrl'
        })
        // .state('Idle', {
        //     url: '/idle',               //eventually make '/'
        //     templateUrl: 'views/idle.html',
        //     controller: 'MainCtrl'
        // })
        // .state('Main', {
        //     url: "/main",       //may want "/main/{id}"
        //     views: {
        //         '': {
        //             templateUrl: 'views/main-screen.html',
        //             controller: 'MainCtrl'
        //         },
        //         'navigation': {
        //             templateUrl: 'views/navigation.html',
        //             controller: 'MainCtrl'
        //         }
        //     }
        // })
        // .state('main.selected', {
        //     url: "/{id}",
        //     views: {
        //         '': {
        //             templateUrl: 'views/main-screen.html',
        //             controller: 'MainCtrl'
        //         },
        //         'navigation': {
        //             templateUrl: 'views/navigation.html',
        //             controller: 'MainCtrl'
        //         }
        //     }
        // })

        ///redirect to idle state as default.
        //$urlRouterProvider.otherwise('/');

    })