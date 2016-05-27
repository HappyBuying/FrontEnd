function generateThumbnail(node){
	
 	var files   	= node.files;
 	//console.log(files); 	 	  	
 	var parent  	= $(node).parent();
	var grandparent = parent.parent();
	var clone 		= grandparent.clone();
	clone.filter(':eq(0)').children().children().remove();
	clone.filter(':eq(0)').removeClass('col-sm-4').addClass('col-sm-8');	
	
	
	for (var i = files.length - 1; i >= 0; i--) {
		console.log('loop entered');
		clone.filter(':eq(0)').children().append('<div id="imageBlock"></div>');
		console.log(clone);
		clone.insertAfter(grandparent); 
		var reader    = new FileReader();
		// read file and return content as a URL	
		reader.readAsDataURL(files[i]);
		reader.onload = function(event){
			console.log('reader loaded');	 		
	        var imgSrc = event.target.result;
	        var img  = document.createElement('img');
	        img.src = imgSrc;
	        img.className = 'thumbnail';	        
	        document.getElementById('imageBlock').appendChild(img);       		 		
	 			 		
	 	};

	 	console.log(files[i]);
	 	
 	
	};
  	
	


};