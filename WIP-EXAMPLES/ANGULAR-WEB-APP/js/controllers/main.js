var angular = angular || {};

angular.module('app.controller.main', [])
.controller('MainCtrl', function($scope, $rootScope, $stateParams, $http, $touch) {

    console.log('MAIN CONTROLLER');

    //          S C O P E  V A R S
    // ---------------------------

    //assign global list of industry data to current scope
    $scope.inds = $rootScope.global.industries;
    $scope.active = false;
    $scope.active_i = {};

    //                     F U N C
    // ---------------------------
    // @TO DO: INDUSTRY ACTIVE BTN
    // rather than two seperate functions for btn - both will fire at same time!
    // run them through a general ACTIVATE INDUSTRY BTN
    // --- recieves $index of selected industry
    // --- active state - true/false

//                EVENTUALLY DELETE
// ------------------------------------------------------------------------
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// ------------------------------------------------------------------------
// -------------------------- @TO DO: keep here until other way working...

  //NAVIGATION / MENU
  $scope.industryBtn = function(id){
      console.log('selected ind: '+ id);

      //get the selected industry's id & assign to Active
      // temp active info -- assign to scope once confirmed
      var _active_i = {
          id:       id,
          udp:      $scope.inds.[id].udp,
          industry: $scope.inds.[id].industry,
          content:  ["../assets/test-overlay-active.png"] //dummy for now will asign this in app.js
      };

      if($scope.active_i.id !== id && id <= $scope.inds.length ){
          //assign active industry to scope
          $scope.active_i = _active_i;
          $scope.active = true;
          console.log("NEW ACTIVE STATE: " + $scope.active_i);

      }else{
          $scope.active_i = {};
          $scope.active = false;
          console.log($scope.active_i);
      }

      //then we need to update location w/ the id in url
      //to display the right response on the main-section of the screen
      //a btn will display here to trigger the UDP and Media Playback
  }



  //FUNCTION TO SEND UDP VIA HTTP
  //LEAVING HERE FOR DEBUGGING!!!
  $scope.sendUDP = function(msg){
        console.log("UDP!!!" + msg);

        $scope.active_udp = msg;

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
