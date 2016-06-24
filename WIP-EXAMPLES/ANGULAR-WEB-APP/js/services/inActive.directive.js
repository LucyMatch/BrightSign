var angular = angular || {};

angular.module('app.scResults.directive', [])
  .directive('scResults', function(){
    return {
      replace: true,
      restrict: 'E',
      controller: 'MainCtrl',
      templateUrl: 'views/ind-active-overlay.html'
    }
  })
