(function(){
  'use strict';

  angular.module('weather', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/conditions',{templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    .when('/webcams',{templateUrl:'/views/webcams/webcams.html', controller:'WebcamsController'})
    .when('/tendays',{templateUrl:'/views/tendays/tendays.html', controller:'TendayController'})
    .otherwise({redirectTo:'/conditions'});
  }])
  .controller('MainController', ['$scope', '$interval', function($scope, $interval){
    $scope.title = 'Weather';
  }]);
})();
