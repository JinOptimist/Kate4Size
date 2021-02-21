$(document).ready(function(){
	
	$('.reversal-content').click(function(){
		
		var attrSide = $(this).attr("side");
		
		var frontImg = $(this).find('.reversal-img.front');
		var backImg = $(this).find('.reversal-img.back');
		
		if (attrSide == "front"){
			frontImg.animate({
				width: 0
			}, 2000);
			
			backImg.animate({
				width: 400
			}, 2000);
			$(this).attr("side", "back");
		}
		if (attrSide == "back"){
			frontImg.animate({
				width: 400
			}, 2000);
			
			backImg.animate({
				width: 0
			}, 2000);
			
			$(this).attr("side", "front");
		}
		
		
	});
});