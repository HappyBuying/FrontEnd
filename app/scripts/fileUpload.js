function generateThumbnail(node){
	
 	var files = node.files;

 	//inserting files into property.images
 	var scope = angular.element($(node)).scope();
    scope.$apply(function(){
    	scope.property.images = files;
    });    
 	
 	//console.log(files);
	
	for (var i = files.length - 1; i >= 0; i--) {
		//console.log('loop entered');
		//console.log(clone);		
		var reader = new FileReader();
		// read file and return content as a URL	
		reader.readAsDataURL(files[i]);
		reader.onload = function(event){
			//console.log('reader loaded');	 		
	        var imgSrc = event.target.result;
	        var img  = document.createElement('div');
	        img.style.backgroundImage = "url("+imgSrc+")";
	        img.className = 'thumbnail';	        
	        document.getElementById('imageBlock').appendChild(img);       		 		
	 			 		
	 	};

	 	//console.log(files[i]);
	 	
 	
	};
  	
	


};