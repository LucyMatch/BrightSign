var angular = angular || {};

angular.module('app.controller.main', [])
.controller('MainCtrl', function($scope, $rootScope, $stateParams,$http) {

  //set active industry to null
  $scope.active_ind = null;
  $scope.active_ind_state = false;
  //assign global list of industry data to current scope
  $scope.inds = $rootScope.global.industries;

  console.log('MAIN CONTROLLER');
  console.log($scope.ind);

  //NAVIGATION / MENU
  $scope.industryBtn = function(id){
      console.log('selected ind: '+ id);
      //get the selected industry's id & assign to Active
      $scope.active_ind = $scope.ind[id];
      $scope.active_ind_state = true;
      //then we need to update location w/ the id in url
      //to display the right response on the main-section of the screen
      //a btn will display here to trigger the UDP and Media Playback
  }

  //FUNCTION TO SEND UDP VIA HTTP
  $scope.sendUDP = function(msg){
        console.log(msg);

        $http({
            url: '../../scripts/udp.php',
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
