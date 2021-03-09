$(document).ready(function(){
	var imageUrlsChess = [];
	
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
	
	function createChess(UrlsForChess, index){
		var divChess = $('<div>');
		divChess.addClass('chess-content');
		divChess.attr("chess-id", index);
		
		var divImgChess = $('<div>');
		divImgChess.addClass('chess-content-img');
		
		
		var imgChess = $('<img>');
		divImgChess.append(imgChess);
		imgChess.attr('src', UrlsForChess);
		divChess.append(divImgChess);
		
		$('#chess .chess-block').append(divChess);
	}
	
	
	$('.chess-content').click(function(){
		
		var $elem = $('.chess-content-img');
		
		$({deg: 0}).animate({deg: 90}, {
			duration: 2000,
			step: function(now) {
            
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
		
	});
	
	
});