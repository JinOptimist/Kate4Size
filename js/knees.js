$(document).ready(function(){
		var imageKneesUrls = [
		'image/knees/knees1.jpg',
		'image/knees/knees2.jpeg',
		'image/knees/knees3.jpeg',
		'image/knees/knees4.jpg',
		'image/knees/knees5.jpg',
		'image/knees/knees6.jpg',
		'image/knees/knees7.jpg',
		
	];
	
	init();
	$('.add').click(function(){
		var namberKithen = $('.namber-knees').text() - 0;
		if (namberKithen < imageKneesUrls.length - 1){
			$('.namber-knees').text(namberKithen + 1);
		}
		if (namberKithen == imageKneesUrls.length - 1){
			$('.namber-knees').text(0);
		}
		
		//выполняем каждый раз, как увеличили размер
		carouselKithen();
	});
	
	$('.reduct').click(function(){
		var namberKithen = $('.namber-knees').text() - 0;		
		if (namberKithen > 0){
			$('.namber-knees').text(namberKithen - 1);
		}
		if (namberKithen == 0){
			$('.namber-knees').text(imageKneesUrls.length - 1);
		}
		//выполняем каждый раз, как уменьшили размер
		carouselKithen();
	});
	
	function carouselKithen(){
		var namberKithen = $('.namber-knees').text() - 0;
		var url = imageKneesUrls[namberKithen];
		$('.carousel-img').attr('src', url);
		
		
		
		//пример селектора 
		//.knees-preview img[knees-id='2']
		//у селектора мы меняем значение "2" на переменную "namberKithen", 
		//где высчитывается номер картинки
		var currentImg = $(".knees-preview img[knees-id='" + namberKithen + "']");
		
		
		$(".knees-preview img").removeClass('active');
		currentImg.addClass('active');
		
		
	}
	function init(){
		for(var i = 0; i < imageKneesUrls.length; i++){
			//Эти команды будут выполняться несколько раз
			createKithen(imageKneesUrls[i], i);
		}
		carouselKithen();
	}
	function createKithen(urlForImage, index){
		//Создаём новый блок (div) которого раньше не было
		
		//создаём тэг img
		var img = $('<img>');
		img.attr('src', urlForImage);
		img.attr("knees-id", index);
		
		//Добавили на страницу
		//Только сейчас пользователь увидит блок и всех его детей
		$('#knees .knees-preview').append(img);
	}
});