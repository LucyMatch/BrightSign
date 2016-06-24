////// CONTROLLER FOR BASIC ONE PAGE VERSION OF FUNTIONAILITY
// ---- PROOF OF CONCEPT w/ STACK
var angular = angular || {};

angular.module('app.controller.basic', [])
    .controller('BasicCtrl', function($scope, $rootScope, $http) {



        $scope.industries = $rootScope.global.industries;
        
        console.log('BASIC CONTROLLER INDUSTRIES: ');
        console.log($scope.industries);

        $scope.sendUDP = function(msg, $event){
            // $event.preventDefault();
            // $scope.$apply();

            console.log($event);
            console.log(msg);

            $scope.display = !$scope.display;

            // $rootScope.toggle = {
            //     show: true;
            // };
            //
            // $scope.toggle = $rootScope.toggle;

            $scope.udp_cmd = msg;

            $http({
                url: 'scripts/udp.php',
                method: "GET",
                params: {cmd: msg}
            }).then(function success(res){
                console.log("SUCCESS: " + res);
                console.log(res.data);
            }, function error(res){
                console.log("ERROR: " + res);
            });

        }

    })