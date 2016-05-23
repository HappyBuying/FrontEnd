'use strict';

/**
 * @ngdoc function
 * @name happyBuyingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happyBuyingApp
 */
angular.module('happyBuyingApp')
  .controller('MainCtrl', function ($scope,$routeParams,properties,Upload) {
    $scope.property = {};

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

     // upload multiple images on selection
     $scope.policy= 'ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogImhhcHB5YnV5aW5nLmltYWdlcyJ9LAogICAgWyJzdGFydHMtd2l0aCIsICIka2V5IiwgIiJdLAogICAgeyJhY2wiOiAicHJpdmF0ZSJ9LAogICAgWyJzdGFydHMtd2l0aCIsICIkQ29udGVudC1UeXBlIiwgIiJdLAogICAgWyJzdGFydHMtd2l0aCIsICIkZmlsZW5hbWUiLCAiIl0sCiAgICBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMCwgNTI0Mjg4MDAwXQogIF0KfQ==';
     $scope.signature= 'Ua9AKCIrwbzI7H/hwb5kbhUt6eA=';
     $scope.uploadFiles= function(files){
        if (files && files.length) {
          Upload.upload({
            url: 'http://happybuying.images.s3.amazonaws.com/', //S3 upload url including bucket name
            method: 'POST',            
            data: {
                key: files.name, // the key to store the file on S3, could be file name or customized
                AWSAccessKeyId: 'AKIAJABKAUGPWPCJM44Q',                
                policy: $scope.policy, // base64-encoded json policy (see article below)
                signature: $scope.signature, // base64-encoded signature based on policy string (see article below)                                
                files: files
            }
          }).success(function(data){
              console.log(data);
          });
        };
     };

  
})


 

