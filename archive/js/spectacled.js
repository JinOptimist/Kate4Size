$(document).ready(function(){
	var imageUrlsSpectacled = [];
	
	for(var index = 1 ; index < 10 ; index++){
		imageUrlsSpectacled.push('image/spectacled/spectacled' + index + '.jpg');
		//'image/spectacled/spectacled' + index + '.jpg'
		//`image/spectacled/spectacled${index}.jpg`
	}
	
	initSpectacled();
	$('#spectacled .popup').hide();
	
	$(document).keyup(function(e) {
		if (e.keyCode == 39){//right arrow
			onClickNext();
		}
		if (e.keyCode == 37){//left arrow
			onClickBack();
		}
		if (e.keyCode == 27){//esc
			closePopup();
		}
		if (e.keyCode == 13){//enter
			showPopup(0);
		}
	});
	
	function initSpectacled(){		
		$('#spectacled .nakedBottomContent').empty();
		for(var t = 0; t < imageUrlsSpectacled.length; t++){//true false
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
	
	$('#spectacled .icon.close,.cover').click(closePopup);
	function closePopup(){			
		$('#spectacled .popup').hide();
	}
	
	function onClickCssDivNakedBottom(){		
		//извлекла овца порядковый номер картинки в массиве
		var numberImg = $(this).attr('nakedBottom-id') - 0;
		showPopup(numberImg);
	}
	
	function showPopup(indexOfImage){	
		$('#spectacled .popup').show();
		//используя порядковый номер, из массива достали урл 
		var urlForImage = imageUrlsSpectacled[indexOfImage];
		$('#spectacled .popup-content img').attr('src', urlForImage);
		$('#spectacled .popup-content img').attr('index', indexOfImage);
	}
	
	$('#spectacled .icon.skipNext').click(onClickNext);
	$('#spectacled .icon.skipPrevious').click(onClickBack);
	function onClickNext(){			
		var indexImg = $('#spectacled .popup-content img').attr('index') - 0;
		
		if (indexImg < imageUrlsSpectacled.length){
			indexImg = indexImg + 1;
		}
		if (indexImg == imageUrlsSpectacled.length){
			indexImg = 0;
		}
		
		var urlForImage = imageUrlsSpectacled[indexImg];
		$('#spectacled .popup-content img').attr('src', urlForImage);
		$('#spectacled .popup-content img').attr('index', indexImg);
	}
	function onClickBack(){			
		var indexImg = $('#spectacled .popup-content img').attr('index') - 0;
		
		if (indexImg >= 0){
			indexImg = indexImg - 1
		}
		if (indexImg < 0){
			indexImg = imageUrlsSpectacled.length - 1;
		}
		
		var urlForImage = imageUrlsSpectacled[indexImg];
		$('#spectacled .popup-content img').attr('src', urlForImage);
		$('#spectacled .popup-content img').attr('index', indexImg);
	}
});



let boobs;
let ass = 5;
let userName = "Best of the best";
let allowAnal = true;
let array = [];

function doNothing(){	
}

function getCoolNumber(){	
	return 42;
}

function summ(firstNumber, secondNumber){	
	return firstNumber + secondNumber;
}

function sayHiToConsole(){	
	console.log('Hi dear');
}


doNothing();
let answer1 = getCoolNumber();

let answer2 = summ(50, ass);

sayHiToConsole(); // console => Hi Dear

for(let i = 0; i < array.length; i++){
	let elem = array[i];
	console.log(elem);
}















