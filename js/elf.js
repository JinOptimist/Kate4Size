$(document).ready(function(){
	var imageUrlsElf = [];
	var indexOfCurrentImage = 0;
	
	init();
	
	$(document).keyup(function(e) {
		if (e.keyCode == 39){
			onKneesAdd();
		}
		if (e.keyCode == 37){
			onKneesReduct();
		}
	});
	
	$('.addElf').click(onElfAdd);
	$('.reductElf').click(onElfReduct);
	
	function init(){
		for(var index = 1 ; index < 7 ; index++){
			imageUrlsElf.push('image/elf/elf' + index + '.jpeg');
		}
		for(var i = 0; i < imageUrlsElf.length; i++){			
			createPreviewElf(imageUrlsElf[i], i);
		}
		drawImage();	
	}
	
	function onElfAdd(){
		if (indexOfCurrentImage < imageUrlsElf.length){
			indexOfCurrentImage = indexOfCurrentImage + 1;
		}
		if (indexOfCurrentImage == imageUrlsElf.length){
			indexOfCurrentImage = 0;
		}
		
		//выполняем каждый раз, как увеличили размер
		drawImage();
	}
	
	function onElfReduct(){		
		if (indexOfCurrentImage >= 0){
			indexOfCurrentImage = indexOfCurrentImage - 1
		}
		if (indexOfCurrentImage < 0){
			indexOfCurrentImage = imageUrlsElf.length - 1;
		}
		//выполняем каждый раз, как уменьшили размер
		drawImage();
	} 
	
	
	function drawImage(){
		var url = imageUrlsElf[indexOfCurrentImage];
		//пример селектора #knees .carousel-img (id +стиль)
		$('#elf .elf-carousel-img').attr('src', url);
		
		$("#elf .elf-preview img").removeClass('active');
		currentImg.addClass('active');
	}
	function createPreviewElf(urlForImage, index){
				
		//создаём тэг img
		var img = $('<img>');
		img.attr('src', urlForImage);
		img.attr("elf-id", index);
		img.click(onPreviewClickElf);
		
		//Добавили на страницу
		//Только сейчас пользователь увидит блок и всех его детей
		$('#elf .elf-preview').append(img);
	}
	function onPreviewClickElf(){
		var value = $(this).attr('elf-id');
		
		indexOfCurrentImage = value - 0;
		
		drawImage();
	}
	
});