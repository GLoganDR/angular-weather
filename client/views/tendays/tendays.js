(function(){
  'use strict';

  angular.module('weather')
  .controller('TendayController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Forecast';

    $scope.get10Day = function(){
      wu.get10Day($scope.zip).then(function(response){
        $scope.forecasts = response.data.forecast.simpleforecast.forecastday;
      });
    };
  }]);
})();
