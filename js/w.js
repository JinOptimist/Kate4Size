$(document).ready(function(){
	var imageUrlsW = [];
	var wWidth = 400;
	var wHeight = 600;
	
	var curent = 0;
	
	init();
	
	function init(){
		for(var index = 1 ; index < 12 ; index++){
			imageUrlsW.push('image/w/w' + index + '.jpg');
		}
		
		for(var t = 0; t < imageUrlsW.length; t++){
			createW(imageUrlsW[t], t);
		}
		
		relaclWidth();
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
	
	function relaclWidth(){
		for(var index = 0 ; index < 12 ; index++){

			var diff= Math.abs(index - curent)  + 1;
			
			$("[w-id=" + index + "]").animate({
				width: wWidth / diff,
				height: wHeight / diff
			}, 2000);
		}
	}
	
	
	$('#w .w-content').click(onClickAnim);	
	
	

	function onClickAnim(){
		curent = $(this).attr("w-id") -0;
		relaclWidth();
	}
	
	
				
});