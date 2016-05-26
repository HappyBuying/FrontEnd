function generateThumbnail(node){
	
 	var files   	= node.files;
 	//console.log(files); 	 	  	
 	var parent  	= $(node).parent();
	var grandparent = parent.parent();
	var clone 		= grandparent.clone();
	clone.filter(':eq(0)').children().children().remove();	
	
	
	for (var i = files.length - 1; i >= 0; i--) {
		console.log('loop entered');
		clone.filter(':eq(0)').children().append('<canvas id="imageCanvas' + i + '" width="75" height="75"></canvas>');
		console.log(clone);
		clone.insertAfter(grandparent); 
		var canvas  	= document.getElementById('imageCanvas' + i);
		var ctx 		= canvas.getContext('2d');	        		  
		var reader    = new FileReader();
		reader.onload = function(event){
			console.log('reader loaded');	 	
	 		
	        var img 	= new Image();
	        img.onload 	= function(){
	        	// draw image into the canvas
	        	console.log('img loaded');	        	
	        	
	        	//canvas.height	= canvas.width * (img.height / img.width);
	        	var oc 			= document.createElement('canvas'),
	        	octx 			= oc.getContext('2d');

	        	oc.width 		= img.width * 0.5;
	        	oc.height 		= img.height * 0.5;
	        	octx.drawImage(img, 0, 0, oc.width, oc.height);

	        	
	        	octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);

	        	ctx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);      	

        	 	            
	    	};

	    	// set image src to reader content	
	    	img.src = event.target.result;		 		
	 			 		
	 	};

	 	console.log(files[i]);
	 	// read file and return content as a URL	
	 	reader.readAsDataURL(files[i]);
 	
	};
  	
	


};