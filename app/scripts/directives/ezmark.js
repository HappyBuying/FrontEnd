angular.module('happyBuyingApp')
   
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