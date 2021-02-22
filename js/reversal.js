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
	
	$('.reversal-content-alone').click(function(){
		
		var attrVisible = $(this).attr("visible");
		
		var imgVisible = $(this).find('.reversal-img-alone');
		
		if (attrVisible == "zero"){
			imgVisible.animate({
				opacity: 1
			}, 2000);
				
			$(this).attr("visible", "one");
		}
		if (attrVisible == "one"){
			imgVisible.animate({
				opacity: 0
			}, 2000);
			
			$(this).attr("visible", "zero");
		
		}
	});
	$('.reversal-content-height').click(function(){
		
		var attrFolding = $(this).attr("folding");
		
		var imgFolding = $(this).find('.reversal-img-height');
		
		if (attrFolding == "1"){
			imgFolding.animate({
				height: 0
			}, 2000);
				
			$(this).attr("folding", "0");
		}
		if (attrFolding == "0"){
			imgFolding.animate({
				height: "100%"
			}, 2000);
			
			$(this).attr("folding", "1");
		
		}
	});
});