angular.module('happyBuyingApp')
    .directive('reverseGeocode', function () {
        return {
            restrict: 'E',
            template: '<input type="text" class="form-control" places-auto-complete">',
            link: function (scope, element, attrs) {
               
            },
            replace: true
        }
    });