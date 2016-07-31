'use strict';

/**
 * @ngdoc function
 * @name happyBuyingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happyBuyingApp
 */
angular.module('happyBuyingApp')

  .controller('MainCtrl', function ($scope,$routeParams,properties,NgMap) {
    $scope.property = {};
    $scope.property.company = $routeParams.company;
    $scope.property.images=[];
    $scope.property.address;
    $scope.marker = {};
    $scope.property.geolocation;
    $scope.features = {};
    $scope.geocoder = new google.maps.Geocoder();
    NgMap.getMap().then(function(map) {
      console.log(map);
      console.log(map.getCenter());

    });
    var geocoder = new google.maps.Geocoder();

    var options = {
                    enableHighAccuracy: true
                };

    navigator.geolocation.getCurrentPosition(function(pos) {
                    $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                    $scope.marker.lat = $scope.position.lat();          
                    $scope.marker.lng = $scope.position.lng();
                    $scope.property.geolocation = $scope.position;
                    geocoder.geocode({ 'latLng': $scope.position }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                              $scope.$apply(function() { 
                                $scope.property.address = results[1].formatted_address;

                              });
                                console.log($scope.property.address);
                            } else {
                                console.log('Location not found');
                            }
                        } else {
                            console.log('Geocoder failed due to: ' + status);
                        }
                    });
                }, 
                function(error) {                    
                    alert('Unable to get location: ' + error.message);
                }, options);

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 20 };

    //array of features for checkboxes
    $scope.features.sports= [ {"name":"Gymnasium", "image":"Dumbbell-50.png"},{"name":"Swimming Pool", "image":"Swimming-50.png"},{"name":"Badminton Court", "image":"Badminton-50.png"},
                              {"name":"Kids Play Areas", "image":"Playground-50.png"},{"name":"Yoga Areas", "image":"Yoga-50.png"},{"name":"Jogging/Cycle Track", "image":"Running-50.png"},
                              {"name":"Skates Rink", "image":"Rollerblade-50.png"},{"name":"Kids Pool", "image":"Water_Park-50.png"},{"name":"Tennis Court", "image":"Tennis-50.png"},
                              {"name":"Squash Court", "image":"Tennis-50.png"},{"name":"Football", "image":"Football-50.png"},{"name":"BasketBall", "image":"BasketBall-50.png"},
                              {"name":"Volleyball", "image":"Volleyball-50.png"},{"name":"Table Tennis", "image":"Ping_Pong-50.png"},{"name":"Snooker", "image":"eight-ball.png"},
                              {"name":"Indoor Swimming Pool", "image":"Indoor_Pool.png"},{"name":"Golf Course", "image":"Golf-50.png"}
                                ];

    $scope.features.leisure = [ {"name":"Party Hall", "image":"Party_Baloons.png"},{"name":"Club House", "image":"DJ.png"},{"name":"Indoor Games", "image":"controller.png"},
                              {"name":"Cafe", "image":"Restaurant.png"},{"name":"Massage Room", "image":"Massage.png"},{"name":"Dance Room", "image":"Dancing.png"},
                              {"name":"Mini Theatre", "image":"Movie.png"},{"name":"Library", "image":"Reading.png"},{"name":"Spa and Sauna", "image":"Spa.png"},
                              {"name":"Cards Room", "image":"Cards.png"},{"name":"Amphitheatre", "image":"Park_Concert_Shell.png"},{"name":"Bowling", "image":"Bowling.png"},
                              {"name":"Conference Room", "image":"Conference.png"},{"name":"Private Pool", "image":"Indoor_Pool.png"},{"name":"Luxurious Clubhouse", "image":"VIP.png"},
                              {"name":"Jacuzzi", "image":"Tub.png"},{"name":"Observatory Desk", "image":"Front_Desk.png"}
                                ];
    $scope.features.environment = [{"name":"Normal Park", "image":"Grass.png"},{"name":"Central Wifi", "image":"Wi-Fi.png"},{"name":"Rain Water Harvesting", "image":"Water.png"},
                                  {"name":"Sewage Treatment Plant", "image":"Piping.png"},{"name":"Solar Lighting", "image":"Solar_Panel.png"},{"name":"Eco-Friendly", "image":"Leaf.png"},
                                  {"name":"DTH Cable", "image":"TV_Antenna.png"},{"name":"Large Green Area", "image":"Grass.png"}
                                  ];

    $scope.features.safety = [{"name":"Emergency Rescue", "image":"Survival_Bag.png"},{"name":"24X7 Security", "image":"Security_Checked.png"},{"name":"Video Phone", "image":"Office_Phone.png"},
                                   {"name":"FireFighting System", "image":"Fire_Hydrant.png"},{"name":"Smoke/Heat Sensors", "image":"Fire_Alarm.png"},{"name":"Smart Card Access", "image":"Electronic_Identity_Card.png"},
                                   {"name":"Burglar Alarm", "image":"Fire_Alarm_Button.png"},{"name":"Intercom Facility", "image":"Phone.png"}
                                   ];

    $scope.features.convenience = [{"name":"Power Backup", "image":"Car_Battery.png"},{"name":"Market", "image":"Shopping_Cart.png"},{"name":"AC Waiting Lobby", "image":"Air_Conditioner.png"},
                                   {"name":"Solar Heating", "image":"Sun.png"},{"name":"Home Automation", "image":"Home_Automation.png"},{"name":"AC Common Areas", "image":"Air_Conditioner.png"},
                                   {"name":"Treated Water Supply", "image":"Water_Tower.png"},{"name":"High Speed Elevators", "image":"Elevator.png"},{"name":"Pre-school", "image":"Classroom.png"},
                                   {"name":"Medical Facilities", "image":"Ambulance.png"},{"name":"Day Care Center", "image":"Crib.png"},{"name":"Podium Parking", "image":"Garage.png"},
                                   {"name":"Guest House", "image":"Home.png"},{"name":"Concierge Desk", "image":"Front_Desk.png",},{"name":"Centralised AC", "image":"Central_Heating.png"}
                                   ];
   $scope.addPlot = function(){
      $scope.property.units.push({
        size        : '',
        towerCount  : '',
        towerHeight : '',
        bedrooms    : [],
        bathrooms   : [],
        livingrooms : [],
        kitchenArea : '',
        balconies   : [],
        others      : []
      });
    };


    $scope.myCallback = function(){
              $scope.place = this.getPlace();
              console.log($scope.place);
              $scope.position = new google.maps.LatLng($scope.place.geometry.location.lat(), $scope.place.geometry.location.lng())
              $scope.property.geolocation = $scope.position;
              console.log('location', $scope.map.center);
              NgMap.getMap().then(function(map) {
                  console.log(map);
                  map.setCenter($scope.position);
                  console.log("map center",map.getCenter().lat());
                  console.log($scope.property.address);
                });
    };

     /*$scope.myfunc = function(event){
      $scope.map.center.latitude = event.latLng.lat();
      $scope.map.center.longitude = event.latLng.lng();
      var latlng = new google.maps.LatLng($scope.map.center.latitude, $scope.map.center.longitude);
      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                  $scope.pr.address = results[1].formatted_address;
                  console.log($scope.marker.address);
              } else {
                  console.log('Location not found');
              }
          } else {
              console.log('Geocoder failed due to: ' + status);
          }
      });
     };   */                         

     $scope.loaderStart = function(event, reader, fileList, fileObjs, file, object){
      console.log("loader started");
      console.log(object);
      console.log($scope.property.images);
      console.log(reader);
     };

     $scope.loaderStop = function(event, reader, fileList, fileObjs, file, object){
      console.log("loader stopped");
      $scope.property.images.push(object);
     };


     $scope.removeImage = function(index){
      $scope.property.images.splice(index,1);
     }

     //save property call                         
     $scope.saveProperty = function(prop_company){
        console.log(prop_company);
        properties.saveProperty(prop_company);
     };

  
})


 

