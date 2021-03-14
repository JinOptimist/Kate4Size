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
});