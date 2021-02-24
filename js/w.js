$(document).ready(function(){
	var imageUrlsW = [];
	
	for(var index = 1 ; index < 12 ; index++){
		imageUrlsW.push('image/w/w' + index + '.jpg');
	}
	for(var t = 0; t < imageUrlsW.length; t++){
		createW(imageUrlsW[t], t);
	}
	function createW(UrlsForW, index){
		var divW = $('<div>');
		divW.addClass('w-content');
		divW.attr("w-id", index);
		

		
		var imgW = $('<img>');
		divW.append(imgW);
		imgW.attr('src', UrlsForW);
		
		$('#w .w-block').append(divW);
		
	}	
});