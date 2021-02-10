$(document).ready(function(){
	var imageUrlsSpectacled = [
		'image/spectacled/spectacled1.jpg',
		'image/spectacled/spectacled2.jpg',
		'image/spectacled/spectacled3.jpg',		
	];
	
	initSpectacled();
	
	function initSpectacled(){		
		$('#spectacled .nakedBottomContent').empty();
		for(var t = 0; t < imageUrlsSpectacled.length; t++){
			createNakedBottom(imageUrlsSpectacled[t], t);
		}
	}
	function createNakedBottom(urlForImageBottom, index){
		var divNakedBottom = $('<div>');
		divNakedBottom.addClass('cssDivNakedBottom');
		divNakedBottom.attr("nakedBottom-id", index);
		
		var divNakedBottomСlose = $('<div>');
		divNakedBottomСlose.addClass('icon close');
		
		var divNakedBottomInside = $('<div>');
		divNakedBottomInside.addClass('nakedBottomContentInside');
		
		var divNakedBottomInsideImg = $('<div>');
		divNakedBottomInsideImg.addClass('nakedBottomContentInsideImg');
		
		divNakedBottom.append(divNakedBottomInside);
		
		divNakedBottom.append(divNakedBottomInsideImg);
		
		divNakedBottomInside.append(divNakedBottomСlose);
		
		var imgNakedBottom = $('<img>');
		divNakedBottomInsideImg.append(imgNakedBottom);
		imgNakedBottom.attr('src', urlForImageBottom);
		
		
		$('#spectacled .nakedBottomContent').append(divNakedBottom);
		
		divNakedBottomСlose.click(onSpectacledСlose);		
	}	
	function onSpectacledСlose(){		
		var idToСlose = $(this)
			.closest(".cssDivNakedBottom")			
			.attr('nakedBottom-id') - 0;
			
		imageUrlsSpectacled.splice(idToСlose, 1);	
		initSpectacled();
	}
	
		
	$('#spectacled .nakedBottomInput').click(function(){
		var urlnakedBottom = $('#spectacled .nakedBottomTxt').val();
		imageUrlsSpectacled.push(urlnakedBottom);
		$('#spectacled .nakedBottomContent').empty();
		initSpectacled();
	});
	
	$('#spectacled .icon.close').click(function(){			
		$('#spectacled .popup').hide();
	});
	
});