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
		
		$('#spectacled .cssDivNakedBottom').click(onClickCssDivNakedBottom);
		
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
	
	function onClickCssDivNakedBottom(){			
		$('#spectacled .popup').show();		
		//извлекла овца порядковый номер картинки в массиве
		var numberImg = $(this).attr('nakedBottom-id') - 0;
		//используя порядковый номер, из массива достали урл 
		var urlForImage = imageUrlsSpectacled[numberImg];
		$('#spectacled .popup-content img').attr('src', urlForImage);
		$('#spectacled .popup-content img').attr('index', numberImg);
	}
	$('#spectacled .icon.skipNext').click(onClickNext);
	$('#spectacled .icon.skipPrevious').click(onClickBack);
	function onClickNext(){			
		var indexImg = $('#spectacled .popup-content img').attr('index') - 0;
		indexImg = indexImg + 1;
		var urlForImage = imageUrlsSpectacled[indexImg];
		$('#spectacled .popup-content img').attr('src', urlForImage);
	}
	function onClickBack(){			
		var indexImg = $('#spectacled .popup-content img').attr('index');
		numberImg = numberImg - 1;
	}
});

















