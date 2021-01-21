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
	var indexOfCurrentImage = 0;
	
	init();
	
	$('.add').click(function(){
		if (indexOfCurrentImage < imageKneesUrls.length){
			indexOfCurrentImage = indexOfCurrentImage + 1;
		}
		if (indexOfCurrentImage == imageKneesUrls.length){
			indexOfCurrentImage = 0;
		}
		
		//выполняем каждый раз, как увеличили размер
		drawImageAndPreview();
	});
	
	$('.reduct').click(function(){
		if (indexOfCurrentImage > 0){
			indexOfCurrentImage = indexOfCurrentImage - 1
		}
		if (indexOfCurrentImage == 0){
			indexOfCurrentImage = imageKneesUrls.length - 1;
		}
		//выполняем каждый раз, как уменьшили размер
		drawImageAndPreview();
	});
	
	function drawImageAndPreview(){
		var url = imageKneesUrls[indexOfCurrentImage];
		$('.carousel-img').attr('src', url);
		
		//пример селектора 
		//.knees-preview img[knees-id='2']
		//у селектора мы меняем значение "2" на переменную "indexOfCurrentImage", 
		//где высчитывается номер картинки
		var currentImg = 
			$(".knees-preview img[knees-id='" + indexOfCurrentImage + "']");
		
		$(".knees-preview img").removeClass('active');
		currentImg.addClass('active');
	}
	
	function init(){
		for(var i = 0; i < imageKneesUrls.length; i++){
			//Эти команды будут выполняться несколько раз
			createKithen(imageKneesUrls[i], i);
		}
		drawImageAndPreview();
	}
	
	function createKithen(urlForImage, index){
		//Создаём новый блок (div) которого раньше не было
		
		//создаём тэг img
		var img = $('<img>');
		img.attr('src', urlForImage);
		img.attr("knees-id", index);
		img.click(onPreviewClick);
		
		//Добавили на страницу
		//Только сейчас пользователь увидит блок и всех его детей
		$('#knees .knees-preview').append(img);
	}
	
	function onPreviewClick(){
		var value = $(this).attr('knees-id');
		
		indexOfCurrentImage = value - 0;
		
		drawImageAndPreview();
	}
});























