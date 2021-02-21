$(document).ready(function(){
	
	$('.reversal-content').click(function(){
		
		var attrSide = $(this).attr("side");
		
		
		if (attrSide == "front"){
			$('.reversal-img.front').animate({
				width: 0
			}, 2000);
			
			$('.reversal-img.back').animate({
				width: 400
			}, 2000);
			$(this).attr("side", "back");
		}
		if (attrSide == "back"){
			$('.reversal-img.front').animate({
				width: 400
			}, 2000);
			
			$('.reversal-img.back').animate({
				width: 0
			}, 2000);
			
			$(this).attr("side", "front");
		}
		
		
	});
});