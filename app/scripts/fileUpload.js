function generateThumbnail(node){
	
 	var files   = node.files;
 	console.log(files); 	 	  	
 	var parent  = $(node).parent();
	var grandparent = parent.parent();
	var clone 	=	grandparent.clone();
	clone.filter(':eq(0)').children().empty().append('<canvas id="imageCanvas"></canvas>');
	var reader  = new FileReader();
	for (var i = files.length - 1; i >= 0; i--) {
		console.log('loop entered');
		reader.onload = function(event){
			console.log('reader loaded');	 	
	 		clone.insertAfter(grandparent); 
	        var img = new Image();
	        img.onload = function(){	        	
	            $('imageCanvas').width = 20;
	            $('imageCanvas').height = 20;
	            $('imageCanvas').getContext('2d').drawImage(img,0,0);        
	        	img.src = event.target.result;
	    	}
	    	
	    	reader.readAsDataURL(files[i]);
	    	
	 		
	 		console.log(clone);



	 		
	 	};
 	
	};
  	
	


};