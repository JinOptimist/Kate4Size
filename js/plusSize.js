$(document).ready(function(){
	var numberCoolPlusSize = 0;
	var imageUrls = [
		'image/PlusSize/PlusSize1.jpg',
		'image/PlusSize/PlusSize2.jpg',
		'image/PlusSize/PlusSize3.jpg',
		'image/PlusSize/PlusSize4.jpeg',
		'image/PlusSize/PlusSize5.jpg',
		'image/PlusSize/PlusSize6.jpg',
		'image/PlusSize/PlusSize7.webp',
		'image/PlusSize/PlusSize8.webp',
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
		//data-id это название атрибута где мы указывает какой номер у переменной
		//мы ее тут создали и назвали ( если у атрибута 2 значения значит мы его туда положили , 
		//если одно data-id, то забрали 
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
		numberCoolPlusSize = numberCoolPlusSize + 1;
		
		var cuurenPrincess = 
			$('#gallery .gallery-blok[data-id=' + numberCoolPlusSize +']');
		$('#gallery .gallery-blok').removeClass('active');
		cuurenPrincess.addClass('active');
		
		$('.princess0number').text(numberCoolPlusSize);
	});
	
	$('#gallery .icon.close').click(function(){			
		$('#gallery .popup').hide();		
	});
	$('#gallery .gallery-blok').click(function(){			
		$('#gallery .popup').show();		
		//извлекла овца порядковый номер картинки в массиве
		var numberImg = $(this).attr('data-id') - 0;
		//используя порядковый номер, из массива достали урл 
		var urlForImage = imageUrls[numberImg];
		$('#gallery .popup-content img').attr('src', urlForImage);;
	});
	
	
});















