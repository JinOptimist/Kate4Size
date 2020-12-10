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
		$(this).toggleClass('full-screen');
	});
});