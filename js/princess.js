$(document).ready(function(){
	var numberCoolPrincess = 0;
	var imageUrls = [
		'image/jasmine/Алладин1241913.png',
		'image/jasmine/unnamed.png',
		'image/jasmine/5005f4d.jpg',
		'image/jasmine/f496471432.png',
		'image/jasmine/Алладин1241913.png',
		'image/jasmine/Алладин1241913.png',
		'image/jasmine/Алладин1241913.png',
	];
	
	init();
	
	function init(){
		//Выполняем столько раз, сколько элементов в массиве imageUrls
		for(var i = 0; i < imageUrls.length; i++){
			//Эти команды будут выполняться несколько раз
			createBoobs(imageUrls[i], i);

		}
	}
	
	function createBoobs(urlForImage, index){
		//Создаём новый блок (div) которого раньше не было
		var divGalleryBlok = $('<div>');
		//Добавляем класс к созданному блоку
		divGalleryBlok.addClass('gallery-blok');
		divGalleryBlok.attr('data-id', index);
		
		var divGalleryIinside = $('<div>');
		divGalleryIinside.addClass('gallery-inside');
		
		//создаём тэг img
		var img = $('<img>');
		img.attr('src', urlForImage);
		
		//Добавляем тэг img в блок divGalleryIinside
		divGalleryIinside.append(img);
		divGalleryBlok.append(divGalleryIinside);		
		//Добавили на страницу
		//Только сейчас пользователь увидит блок и всех его детей
		$('#gallery .news').append(divGalleryBlok);
	}
	
	$('.princess-add').click(function(){
		numberCoolPrincess = numberCoolPrincess + 1;
		
		var cuurenPrincess = 
			$('#gallery .gallery-blok[data-id=' + numberCoolPrincess +']');
		$('#gallery .gallery-blok').removeClass('active');
		cuurenPrincess.addClass('active');
		
		$('.princess0number').text(numberCoolPrincess);
	});

});















