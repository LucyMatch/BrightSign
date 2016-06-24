var angular = angular || {};

angular.module('app.controller.main', [])
.controller('MainCtrl', function($scope, $rootScope, $stateParams, $http, $touch, udp) {

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

    // var _active_i = { // temp active industry -- assign to scope once confirmed
    //     id:         null,
    //     udp:        null,
    //     industry:   null,
    //     active:     false,
    //     content:  ["../assets/test-overlay-active.png"] //dummy for now will asign this in app.js
    // };

    // id = index of selected industry
    // state = false if new industry selected
    // state = true if industry is currently active
    // cmd will contain UDP msg to be sent ----> maybe do a boolean for UDP click -> send on & off....

    //@TO DO: ADD CALLING OF UDP FACTORY WHEN CMD = CERTAIN AMOUNT...
    $scope.i_select = function(id, state, cmd){
        console.log("industry: " + id + "  // state: " + state);
        console.log(cmd);

        var _active_i = { // temp active industry -- assign to scope once confirmed
            id:       id,
            udp:      $scope.inds[id].udp,
            industry: $scope.inds[id].industry,
            active: false,
            content:  ["../assets/test-overlay-active.png"] //dummy for now will asign this in app.js
        };

        // Main-state > Active-Industry --- ipt - state = false //

        if(!state){                                                         //if no state is active
            $scope.active_i = _active_i; $scope.active = true;
        }else if(state){                                                   //if industry is active
            if($scope.active_i.id !== id ){                //if non active ind is clicked
                $scope.active_i = _active_i;
            }else if($scope.active_i.id == id){
                //will need some other logic here.. but for now...
                $scope.active_i = {};
                $scope.active = false;
                console.log($scope.active_i);
            }
        }else{
            console.log("ERROR"); $scope.active_i = null; $scope.active = false;
        }

    }

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
          udp:      $scope.inds[id].udp,
          industry: $scope.inds[id].industry,
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



  //FUNCTION TO SEND UDP VIA FACTORY - WORKS!!!!!!
  $scope.sendUDP = function(msg) {
      console.log("UDP!!!" + msg);

      // calling the sendUDP function that the udp factory
      // provides to us..
      udp.sendUDP(msg)
      .then(function (res) { //the udp factory has HTTP promise - .then is how we use the promise call back
          console.log(res);
          // //ACTIVE-INDUSTRY-STATE = TRUE //&&// PLAY-INDUSTRY-STATE = TRUE - TIMER ETC..
      });

  } //END OF sendUDP

})
