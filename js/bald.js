$(document).ready(function(){
	initCentrImg();
	initSmsllImg();
	function initCentrImg(){
		$('.bald-centr-img').animate({
				opacity: 1
			}, 2000);		
	}
	function initSmsllImg(){
		$('.bald-img-small img,.bald-centr-img img').animate({
				'max-width' : "100%",
				'max-height' : "100%"
			}, 2000);		
	}
	
	$('.bald-content-up-bottom.up .bald-img-small').click(function(){			
		$(this).animate({
				opacity: 0
			}, 1000);		
	});	
	
	$('.bald-right-left.left').click(function(){			
		$('.bald-right-left.right').animate({
				opacity: 0
			}, 1000);		
	});	
	
	$('.bald-right-left.right').click(function(){			
		$('.bald-right-left.left').animate({
				opacity: 0
			}, 1000);		
	});	
	
	$('.bald-centr-img').click(function(){			
		$('.bald-right-left.left,.bald-right-left.right').animate({
				opacity: 1
			}, 1000);		
	});	
	
		
	$('.bald-content-up-bottom.bottom .bald-img-small').click(function(){
		
		var attrbaldImg = $(this).attr("baldImg") - 0;
		if (attrbaldImg == 4){
			attrbaldImg = 0;
		}
		
		attrbaldImg = attrbaldImg + 1;
		
		
		
		$(".bald-img-small[baldImg='" + attrbaldImg + "']").animate({
			opacity: 0
		}, 1000);		
		
	});
});












