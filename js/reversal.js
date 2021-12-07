$(document).ready(function(){
	// var fullWidth = 400;
	// var fullHeight = 600;
	var heightScale = 2 / 3;
	
	var currentIndex = 2;
	
	var wifeUrls = [
		{
			name: 'Соки любви',
			url: 'image/wife/wife01.jpg',
			porn: 5,
			nice: 3,
			textColor: '#00FFCC'
		
		},
		{
			name: 'Счастливая эксбиционистка',
			url: 'image/wife/wife02.jpg',
			porn: 4,
			nice: 7,
			textColor: '#FFFFCC',
		},
		{
			name: 'Соска это не обзывательство',
			url: 'image/wife/wife03.jpg',
			porn: 6,
			nice: 4,
			textColor: '#FFC00C'
		},
		{
			name: 'Подъезд не помеха',
			url: 'image/wife/wife05.jpg',
			porn: 3,
			nice: 6
		},
		{
			name: 'Стесняшка',
			url: 'image/wife/wife07.jpg',
			porn: 1,
			nice: 7
		},
		{
			name: 'Самый важный навык',
			url: 'image/wife/wife12.jpg',
			porn: 7,
			nice: 4
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
		
		$('.reversal-content').removeClass('active');
		for(var t = 0; t < wifeUrls.length; t++){
			var diff = getDiff(t);
			$('.reversal-content[index=' + t + ']').animate({
				width: fullWidth / diff,
				height: fullHeight / diff
			}, 2000);
			if (diff == 1){
				$('.reversal-content[index=' + t + ']').addClass('active');
			}
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
		initWifeImages();
		
		recalcImages();
	}
	
	function initWifeImages(){		
		$('#reversal .reversal-block').empty();
		for(var t = 0; t < wifeUrls.length; t++){//true false
			createNakedBottom(wifeUrls[t], t);
		}
	}
	
	function createNakedBottom(wife, index){
		var divNakedBottom = $('<div>');
		divNakedBottom.addClass('reversal-content');
		divNakedBottom.attr('index', index);
		divNakedBottom.css('border-color', wife.textColor);
		
		var imageHeader = $('<div>');
		imageHeader.addClass('image-header');
		
		divNakedBottom.append(imageHeader);
		
		imageHeader.append(createSpan('name', wife.name));
		
		imageHeader.append(createSpan('porn', wife.porn));
		
		imageHeader.append(createSpan('nice', wife.nice));
		
		var imgNakedBottom = $('<img>');
		imgNakedBottom.attr('src', wife.url);
		divNakedBottom.append(imgNakedBottom);
		
		$('#reversal .reversal-block').append(divNakedBottom);
	}
	
	function createSpan(className, innerText){
		var span = $('<span>');
		span.addClass(className);
		//span.text(className + ': ' + innerText);
		span.text(`${innerText}`);
		span.text(`${innerText}`);
		return span;
	}
});


let pussy = 10;
let sissy = -5;

sissy = pussy;



let arr = [1,5,8,3];

showArray(arr);

arr[1] = 5;

showArray(arr);

arr.push(-5);
arr.push(5 * 9);

showArray(arr);

let newArray = [2,3,4];
showArray(newArray);




function showArray(someArray){
	for(let i = 0; i < someArray.length; i++){
		console.log(someArray[i]);
	}
}

















