$(document).ready(function(){
	$('.Для Катя По кому кликать').click(function(){
		$(this).toggleClass('Какой класс добавить');
	});
	
	$('.blok').click(function(){
		$(this).toggleClass('full-screen');
	});
	
	$('.gallery-blok').click(function(){
		$(this).toggleClass('full-screen');
	});
	
	$('.page-size').click(function(){
		$(this).toggleClass('naked');
	});
	
	$('.sisters-img').click(function(){
		$(this).toggleClass('big');
	});
	
	$('.sisters').click(function(){
		$(this).toggleClass('one-image');
	});
	
	$('.binding-img').click(function(){
		$(this).toggleClass('none');
	});
	
	var objImages = [
		'image/kitchen/kitchen2.jpg',//0 
		'image/kitchen/kitchen3.jpg', //1
		'image/kitchen/kitchen4.jpg',//2
		'image/kitchen/kitchen5.jpg', //3
		'image/kitchen/kitchen6.jpg', //4
		'image/kitchen/kitchen7.jpg', //5
		'image/kitchen/kitchen8.jpg', //6	
		'image/kitchen/kitchen9.jpg',
	];
	init();
	
	$('.add').click(function(){
		var namberKithen = $('.namber').text() - 0;
		if (namberKithen < 9){
			$('.namber').text(namberKithen + 1);
		}
		//выполняем каждый раз, как увеличили размер
		carouselKithen();
	});
	
	$('.reduct').click(function(){
		var namberKithen = $('.namber').text() - 0;		
		if (namberKithen > 0){
			$('.namber').text(namberKithen - 1);
		}
		//выполняем каждый раз, как уменьшили размер
		carouselKithen();
	});
	
	function carouselKithen(){
		var namberKithen = $('.namber').text() - 0;
		var url = objImages[namberKithen];
		$('.carousel-img').attr('src', url);
	}
	function init(){
		carouselKithen();
	}
});















