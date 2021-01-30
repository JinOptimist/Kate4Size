$(document).ready(function(){
	//'image/nakedBottom/nakedbottom1.jpg',
	//image/nakedBottom/nakedbottom2.jpg
	
	
	//nakedBottom
	$('.nakedBottomInput').click(function(){
		
		var divNakedBottom = $('<div>');
		divNakedBottom.addClass('cssDivNakedBottom');
		var imgNakedBottom = $('<img>');
		divNakedBottom.append(imgNakedBottom);	
		var urlnakedBottom = $('.nakedBottomTxt').val();
		imgNakedBottom.attr('src', urlnakedBottom);
		
		
		$('#nakedBottom .nakedBottomInside').append(divNakedBottom);
	});
	
	
	
		
		
	
});