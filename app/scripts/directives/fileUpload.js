angular.module('happyBuyingApp')

.directive('fileUpload', function(serviceGetter) {
    return {
        restrict: 'A',
        scope: true,            
        link: function(scope, element, attrs) {
            element.bind('change', function(e) {
                var files   	= e.target.files;
                var elementScope = element.scope();
                if (files){                                
                	for (var i = files.length - 1; i >= 0; i--) {
                		//console.log('loop entered');
                		//console.log(clone);	
                        serviceGetter.create(attrs.service);
                        var service = serviceGetter.service;
                        service.images.push(files.item(i));             	            		
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
                	        document.getElementById(attrs.thumbnailbox).appendChild(cell);                        
                	 		icon.onclick = function(){
                                service.images.splice(i, 1);
                                cell.style.display = "none";
                                //console.log(serviceGetter.create(attrs.type).images);                                
                                console.log(elementScope.property.images);
                                console.log(elementScope.property.plans);
                            }; 		
                	 	};
                    }
                }

                //console.log(serviceGetter.create(attrs.type).images);                                
                console.log(elementScope.property.images);
                console.log(elementScope.property.plans);
                serviceGetter.service = '';
                //console.log(propertyImages.images);
                //console.log(scope.property.images);



            });
        }
        
    };

});
