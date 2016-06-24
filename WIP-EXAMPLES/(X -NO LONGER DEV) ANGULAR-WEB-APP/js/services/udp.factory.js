var angular = angular || {};

angular.module('app.udp.factory', [])
    //maybe service not factory ??
.factory('udp', function($http){
    return{
        sendUDP: function(cmd){
            return $http({
                url: 'scripts/udp.php',
                method: 'GET',
                params: {cmd: cmd}
            }).then(function success(res){
                console.log("SUCCESS: " + res); console.log(res.data);
                //respond to controller with active-id..
                return{ sent: cmd};
            }, function error(res){
                console.log("ERROR: " + res);
                return;
            })
        } //END OF sendUDP();
    } //END OF RETURN
}) /// END OF udp Factory