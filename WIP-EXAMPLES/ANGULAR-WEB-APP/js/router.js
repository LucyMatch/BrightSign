var angular = angular || {};

angular.module('app.router', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('Main', {
            url: '/',
            views: {
            '':  {
                  templateUrl:'views/main-screen.html',
                  controller: 'MainCtrl'
              },
            'navigation': {
                  templateUrl: 'views/navigation.html',
                  controller: 'MainCtrl'
                }
              }
        })
        .state('Idle', {
            url: '/idle',               //eventually make '/'
            templateUrl: 'views/idle.html',
            controller: 'MainCtrl'
        })

        ///redirect to default.
        $urlRouterProvider.otherwise('/');
    })
