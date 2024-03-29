(function(){
  'use strict';

  angular.module('weather')
  .factory('wu', ['$http', function($http){
    getUrl('conditions', '37203');

    function getUrl(service, zip){
      return 'http://api.wunderground.com/api/a11890b19fe77087/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK';
    }

    function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
    }

    function getWebcams(zip){
      var url = getUrl('webcams', zip);
      return $http.jsonp(url);
    }

    function get10Day(zip){
      var url = getUrl('forecast10day', zip);
      return $http.jsonp(url);
    }

    return {getConditions:getConditions, getWebcams:getWebcams, get10Day:get10Day};

  }]);
})();
