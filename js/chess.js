$(document).ready(function(){
	var imageUrlsChess = [];
	
	var coverImg = 'image/chess/chess7.jpg';
	
	
	init();
	
	function init(){
		for(var index = 1 ; index < 6 ; index++){
			imageUrlsChess.push('image/chess/chess' + index + '.jpg');
			imageUrlsChess.push('image/chess/chess' + index + '.jpg');
		}
		
		for(var t = 0; t < imageUrlsChess.length; t++){
			createChess(imageUrlsChess[t], t);
		}
	}
	
	function createChess(urlForChess, index){
		var divChess = $('<div>');
		divChess.addClass('chess-content');
		divChess.attr("chess-id", index);
		divChess.attr("side", "back");
		
		var divImgChess = $('<div>');
		divImgChess.addClass('chess-content-img');
		
		
		var imgChess = $('<img>');
		divImgChess.append(imgChess);
		imgChess.attr('src', coverImg);//urlForChess
		divChess.append(divImgChess);
		
		$('#chess .chess-block').append(divChess);
	}
	
	
	$('.chess-content').click(function(){
		var chessContent = $(this);
		var nudeGirl = chessContent.find('.chess-content-img');
		
		var indexUrl = chessContent.attr("chess-id") - 0; 
		
		flip(nudeGirl, 0, 90, backFlip);
		
		
		
		function backFlip(){
			var attrSide = chessContent.attr("side");
			var newImage;
			if (attrSide == "back"){
				chessContent.attr("side", "front");
				newImage = imageUrlsChess[indexUrl];
			}
			
			if (attrSide == "front"){
				chessContent.attr("side", "back");
				newImage = coverImg;
			}
			
			
			nudeGirl.find('img').attr('src', newImage);
			// nudeGirl.attr("sade", front);
			flip(nudeGirl, 90, 0);
		}
	});
	
	function flip(rotateObject, angleFrom, angleTo, onComplete){
		$({deg: angleFrom}).animate(
					{deg: angleTo}, 
					{
						duration: 2000,
						step: function(now) {            
							rotateObject.css({
								transform: 'rotateY(' + now + 'deg)'
							});
						},
						complete: onComplete
					}
		);
	}
	
	
});























