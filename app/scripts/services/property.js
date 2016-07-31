angular.module('happyBuyingApp')
.factory('properties', ['$http', '$rootScope', function($http, $rootScope) {
 
  return {
    
    saveProperty: function(params) {
      return $http({
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: 'http://api.happybuying.co.in/property',
        method: "POST",
        data: params,
      })
        .success(function(data) {
          console.log("save property"+data);
        });
    },

	

  };
}]);