function generateThumbnail(node){
	
 	var files   	= node.files;
 	//console.log(files);
	
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

	 	//console.log(files[i]);
	 	
 	
	};
  	
	


};