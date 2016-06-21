angular.module('happyBuyingApp')

.directive('fileUpload', function(propertyImages) {
    return {
        restrict: 'A',        
        link: function(scope, element) {
            element.bind('change', function(e) {
                var files   	= e.target.files;
                scope.property.images = files;
                //var scope = element.scope();
                scope.$apply(function(){
                scope.property.images = files;
                });
                if (files) {
                   propertyImages.images.push(files);            
                }
                 console.log(propertyImages.images);
                	
            	for (var i = files.length - 1; i >= 0; i--) {
            		//console.log('loop entered');
            		//console.log(clone);		
            		var reader    = new FileReader();
            		// read file and return content as a URL	
            		reader.readAsDataURL(files[i]);
            		reader.onload = function(event){
            			//console.log('reader loaded');	 		
            	        var imgSrc = event.target.result;
            	        var img  = document.createElement('img');
            	        img.src = imgSrc;
            	        img.className = 'thumbnail';	        
            	        document.getElementById('imageBlock').appendChild(img);       		 		
            	 			 		
            	 	};
                }    
            });
        }
        
    };

});
