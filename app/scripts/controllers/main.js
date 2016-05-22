'use strict';

/**
 * @ngdoc function
 * @name happyBuyingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happyBuyingApp
 */
angular.module('happyBuyingApp')
  .controller('MainCtrl', function ($scope,$routeParams,properties) {
    $scope.property = {};

    //array of features for checkboxes
    $scope.features = ["Air conditioning", "Balcony", "Bedding", "Cable TV", "Cleaning after exit", "Cofee pot", 
                                  "Computer", "Cot", "Dishwasher", "DVD", "Fan", "Fridge", "Grill", "Hairdryer", "Heating", 
                                  "Hi-fi", "Internet", "Iron", "Juicer", "Lift", "Microwave", "Oven", "Parking", "Parquet",
                                  "Pool", "Radio", "Roof terrace", "Smoking allowed", "Terrace", "Toaster", "Towelwes",
                                  "Use of pool"];



     $scope.saveProperty = function(property){
        console.log(property);
        properties.saveProperty(property);
     };



  
})

.directive('ezmark', function() {
  var directive = {
    //restrict: 'A',
    link: function(scope, element, attrs, ctrl) {
      scope.$watch(attrs.ezmark, function(value) {
        setTimeout(function() {
          // only if we have images since .slidesjs() can't
          // be called more than once
          console.log("attrs.start is:");
          console.dir(attrs.start);
            $(element).ezMark();

        }, 1);
      });
    }
  };
  return directive;
});
 

