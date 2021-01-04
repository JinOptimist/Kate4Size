$(document).ready(function(){
	var boobsImages = [
		'img/Girl10.png', 
		'img/Girl5.jpg', 
		'img/CyberpunkPack/Girl4.png',
		'img/Girl11.png', 
		'img/Girl12.png', 
		'img/Girl13.png', 
	];
	drawBoobs();
	
	$('.add').click(function(){
		// var boobSizeText = $('.size').text();
		// var boobSize  = boobSizeText - 0;
		// var boosSizeNew = boobSize + 1;
		// $('.size').text(boosSizeNew);
		
		var boobSize = $('.size').text() - 0;
		if (boobSize < 5){
			$('.size').text(boobSize + 1);
		}
		drawBoobs();
	});
	
	$('.reduct').click(function(){
		var boobSize = $('.size').text() - 0;
		
		if (boobSize > 0){
			$('.size').text(boobSize - 1);
		}
		drawBoobs();
	});
	
	function drawBoobs(){
		var boobSize = $('.size').text() - 0;
		var url = boobsImages[boobSize];
		$('.sample').attr('src', url);
	}
	
	$('.create-red').click(function (){
		for(var i = 0; i < 3; i++){
			var redBlock = $('<span>');
			redBlock.addClass('red');
			redBlock.text('Hi ' + i);
			$('.place').append(redBlock);
		}
	});
	

});




// for (/* 1 block*/ ; /* 2 условия продолжение */  ;  /* 3 один раз после каждого прохода */){
// }


var someNumber = 42; //number
var someText1 = "smile";// string
var someText2 = 'smile';// string

//boolean
var coondition1 = someNumber != '4';//true
var coondition2 = coondition1 && true;// Оба правда
var coondition3 = coondition1 || coondition2;// Хоть один правда
var coondition4 = !coondition1;// Была ложь, стала правда. Была правда, стала ложь

//object
var kate = {
	name: 'Катька',
	size: 4,
	nice: 10,
	useGlass: true
};

//array
// var boobs1 = 'src/image1';
// var boobs2 = 'src/image2';
// var boobs3 = 'src/image3';
var boobsImages = ['img/Girl10.png', 'img/Girl5.jpg', 'img/CyberpunkPack/Girl4.png'];
var boosNumber3 = boobsImages[2];

boobsImages[0] = 'ima/CoolBoobs0';









































// var condition0 = true;
// var condition1 = condition0 && false;

// var condition2 = condition0 || condition1;

// var condition3 = condition2 || (condition1 && condition0);

// var condition3 = !(condition1 && condition0);


// var num1 = 2;
// var num2 = 15;

// //7
// var answer = sum(num1, num2);

// //75
// var answer2 = sum(60, num2);

// var answer3 = sum(50, 100);

// //167 - 1050
// var answer4 = sum(answer, answer3) - sum(5, 7);

// var answer4 = sum(sum(60, 80), sum(1, 1)) - sum(5, 7);

// function sum(anyNumber1, anyNumber2){
	// return anyNumber1 + anyNumber2;
// }

// for(var i = 0; i < someArray.length ; i++){
	// someArray[i];
// }


















