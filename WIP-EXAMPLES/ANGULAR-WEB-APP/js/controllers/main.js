var angular = angular || {};

angular.module('app.controller.main', [])
.controller('MainCtrl', function($scope, $rootScope, $stateParams,$http) {
    

    // console.log("id = " + $stateParams);
    // var $scope.id = $stateParams;
    //
    // $scope.industry_select = function(){
    //
    // }
    //
    // $scope.play = function( $scope.id ){
    //     //process form + php basically send UDP --- shouldn't keep this just here - CREATE SERVICE
    //     $http({
    //         method: 'POST',
    //         url: '../../scripts/udp.php',
    //         data: $scope.udp - id,
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8'
    //         }
    //     }).success(function (data) {
    //         console.log('SUCCESS!');
    //         // $state.go()
    //     })
    //
    //     event.preventDefault();
    // }

})