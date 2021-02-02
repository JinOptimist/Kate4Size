$(document).ready(function(){
	
	var imageUrlsNakedBottom = [
		'image/nakedBottom/nakedbottom1.jpg',
		'image/nakedBottom/nakedbottom2.jpg',
		'image/nakedBottom/nakedbottom3.jpg',
		'image/nakedBottom/nakedbottom4.jpg',
		
	];
	initNakedBottom();
	function initNakedBottom(){		
		for(var t = 0; t < imageUrlsNakedBottom.length; t++){
			createNakedBottom(imageUrlsNakedBottom[t], t);
		}
	}
	function createNakedBottom(urlForImageBottom, index){
		var divNakedBottom = $('<div>');
		divNakedBottom.addClass('cssDivNakedBottom');
		
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
		
		
		$('#nakedBottom .nakedBottomContent').append(divNakedBottom);
	}	
	
		
	$('.nakedBottomInput').click(	function(){
		var urlnakedBottom = $('.nakedBottomTxt').val();
		imageUrlsNakedBottom.push(urlnakedBottom);
		$('#nakedBottom .nakedBottomContent').empty();
		initNakedBottom();
	});
		
	
});