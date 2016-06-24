angular.module('happyBuyingApp')

.directive('fileUpload', function(propertyImages) {
    return {
        restrict: 'A',            
        link: function(scope, element) {
            element.bind('change', function(e) {
                var files   	= e.target.files;
                if (files){                                
                	for (var i = files.length - 1; i >= 0; i--) {
                		//console.log('loop entered');
                		//console.log(clone);	
                        propertyImages.images.push(files.item(i));             	            		
                        var reader    = new FileReader();
                		// read file and return content as a URL	
                		reader.readAsDataURL(files[i]);
                		reader.onload = function(event){
                			//console.log('reader loaded');	 		
                	        var imgSrc = event.target.result;
                            var cell = document.createElement('div');
                	        var img  = document.createElement('img');
                            var icon = document.createElement('i');
                	        img.src = imgSrc;
                	        img.className = 'thumbnail';	       
                            icon.className = 'fa fa-times-circle';
                            cell.className = 'imgCell';
                            cell.appendChild(img);
                            cell.appendChild(icon);                         
                	        document.getElementById('imageBlock').appendChild(cell);                        
                	 		icon.onclick = function(){
                                propertyImages.images.splice(i, 1);
                                cell.style.display = "none";
                                console.log(propertyImages.images);
                                console.log(scope.property.images);
                            }; 		
                	 	};
                    }
                }

                console.log(propertyImages.images);
                console.log(scope.property.images);



            });
        }
        
    };

});
