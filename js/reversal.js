$(document).ready(function(){
	// var fullWidth = 400;
	// var fullHeight = 600;
	var heightScale = 2 / 3;
	
	var currentIndex = 2;
	
	var wifeUrls = [
		{
			url: 'image/wife/wife01.jpg',
			porn: 2,
			nice: 7
		},
		{
			url: 'image/wife/wife02.jpg',
			porn: 2,
			nice: 7
		},
		{
			url: 'image/wife/wife03.jpg',
			porn: 2,
			nice: 7
		},
		{
			url: 'image/wife/wife04.jpg',
			porn: 2,
			nice: 7
		},
		{
			url: 'image/wife/wife05.jpg',
			porn: 2,
			nice: 7
		},
		{
			url: 'image/wife/wife06.jpg',
			porn: 2,
			nice: 7
		},
		{
			url: 'image/wife/wife07.jpg',
			porn: 2,
			nice: 7
		},
	];
	var imageCount = 12;
	
	init();
	
	$('.reversal-content').click(function(){
		currentIndex = $(this).attr('index') - 0;
		recalcImages();
	});
	
	function recalcImages(){
		var containerWidth = $('#reversal .reversal-block').width() - 20;
		
		//formula from https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D0%BC%D0%BE%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D1%8F%D0%B4
		var fullWidth = (containerWidth - 24 * imageCount) / getEllerSumm();
		var fullHeight = fullWidth * heightScale;
		
		for(var t = 0; t < wifeUrls.length; t++){
			var diff = getDiff(t);
			$('.reversal-content[index=' + t + ']').animate({
				width: fullWidth / diff,
				height: fullHeight / diff
			}, 2000);
		}
	}
	
	function getEllerSumm(){
		var sum = 0;
		for(var t = 0; t < wifeUrls.length; t++){
			var diff = getDiff(t);
			sum += 1 / diff;
		}
		return sum;
	}
	
	function getDiff(index){
		var diff = Math.abs(currentIndex -  index) + 1;
		if (diff > 4){
			diff = 4;
		}
		return diff * diff;
	}
	
	function init(){
		// for(var index = 1 ; index <= imageCount ; index++){
			// var zero = index > 9 ? '' : '0';
			// wifeUrls.push('image/wife/wife' + zero + index + '.jpg');
		// }
		
		initWifeImages();
		
		recalcImages();
	}
	
	function initWifeImages(){		
		$('#reversal .reversal-block').empty();
		for(var t = 0; t < wifeUrls.length; t++){//true false
			var wife = wifeUrls[t];
			createNakedBottom(wife, t);
		}
	}
	
	function createNakedBottom(wife, index){
		var divNakedBottom = $('<div>');
		divNakedBottom.addClass('reversal-content');
		divNakedBottom.attr('index', index);
		
		var rankBlock = $('<div>');
		rankBlock.addClass('rank');
		rankBlock.text(`porn: ${wife.porn}`);
		divNakedBottom.append(rankBlock);
		
		var imgNakedBottom = $('<img>');
		imgNakedBottom.attr('src', wife.url);
		divNakedBottom.append(imgNakedBottom);
		
		$('#reversal .reversal-block').append(divNakedBottom);
	}
});