'use strict';

/**
 * @ngdoc function
 * @name happyBuyingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happyBuyingApp
 */
angular.module('happyBuyingApp')
  .controller('MainCtrl',['properties','propertyImages', function ($scope,$routeParams,properties,propertyImages) {
    $scope.property = {};
    
    $scope.saveFile = function(element){

      element.bind('change', function(e) {          
        var scope = element.scope();
        scope.$apply(function(){
        scope.property.images = files;
        });    
        if (files) {
           propertyImages.images.push(files);            
        }
      });  
    };
    //array of features for checkboxes
    $scope.features = ["Air conditioning", "Balcony", "Bedding", "Cable TV", "Cleaning after exit", "Cofee pot", 
                                  "Computer", "Cot", "Dishwasher", "DVD", "Fan", "Fridge", "Grill", "Hairdryer", "Heating", 
                                  "Hi-fi", "Internet", "Iron", "Juicer", "Lift", "Microwave", "Oven", "Parking", "Parquet",
                                  "Pool", "Radio", "Roof terrace", "Smoking allowed", "Terrace", "Toaster", "Towelwes",
                                  "Use of pool"];




     //save property call                               
     $scope.saveProperty = function(property){
        console.log(property);
        properties.saveProperty(property);
     };



  
}])


 

