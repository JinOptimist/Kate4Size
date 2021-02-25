$(document).ready(function(){
	var fullHeight = 600;
	var fullWidth = 400;
	
	var currentIndex = 0;
	
	var wifeUrls = [];
	var imageCount = 12;
	
	init();
	
	$('.reversal-content').click(function(){
		currentIndex = $(this).attr('index') - 0;
		recalcImages();
	});
	
	function recalcImages(){
		for(var t = 0; t < wifeUrls.length; t++){//true false
			var diff = Math.abs(currentIndex -  t) + 1;
			$('.reversal-content[index=' + t + ']').animate({
				height: fullHeight / diff,
				width: fullWidth / diff
			}, 2000);
		}
	}
	
	function init(){
		for(var index = 1 ; index <= imageCount ; index++){
			var zero = index > 9 ? '' : '0';
			wifeUrls.push('image/wife/wife' + zero + index + '.jpg');
		}
		
		initWifeImages();
		
		recalcImages();
	}
	
	function initWifeImages(){		
		$('#reversal .reversal-block').empty();
		for(var t = 0; t < wifeUrls.length; t++){//true false
			createNakedBottom(wifeUrls[t], t);
		}
	}
	
	function createNakedBottom(urlForImageBottom, index){
		var divNakedBottom = $('<div>');
		divNakedBottom.addClass('reversal-content');
		divNakedBottom.attr('index', index);
		
		var imgNakedBottom = $('<img>');
		imgNakedBottom.attr('src', urlForImageBottom);
		divNakedBottom.append(imgNakedBottom);
		
		$('#reversal .reversal-block').append(divNakedBottom);
	}
});