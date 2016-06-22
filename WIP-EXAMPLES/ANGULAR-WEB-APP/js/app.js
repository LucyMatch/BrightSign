var angular = angular || {};

angular.module('myApp', ['ui.router', 'ngTouch',
        'app.router',
        'app.controller.main'
    ])
    .config(function($touchProvider){
        console.log($touchProvider);
        $touchProvider.ngClickOverrideEnabled('enabled');
    })
    .run(function($rootScope){

        console.log("RUNNING");


        $rootScope.global = {};
        $rootScope.global.industries = [{
            title:      'Industry One:',
            industry:   'Lighting',
            udp:        'one'
        },{
            title:      'Industry Two:',
            industry:   'Energy Connections',
            udp:        'Two'
        },{
            title:      'Industry Three:',
            industry:   'Global Research',
            udp:        'Three'
        },{
            title:      'Industry Four:',
            industry:   'Healthcare',
            udp:        'Four'
        },{
            title:      'Industry Five:',
            industry:   'Oil and Gas',
            udp:        'Five'
        }];
        
        console.log($rootScope.global.industries);
    })
