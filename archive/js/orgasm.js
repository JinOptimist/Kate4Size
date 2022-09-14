$(document).ready(function(){
	var imageOrgasmUrls = [
		'image/orgasm/orgasm1.jpg',
		'image/orgasm/orgasm2.png',
		'image/orgasm/orgasm3.jpg',
		'image/orgasm/orgasm4.jpg',
		'image/orgasm/orgasm5.jpg',
		'image/orgasm/orgasm6.jpg',
		'image/orgasm/orgasm7.jpg',
		'image/orgasm/orgasm8.jpg',
		'image/orgasm/orgasm9.jpg',
	];
	var indexOfCurrentImage = 0;
	
	init();
	
	$(document).keyup(function(e) {
		if (e.keyCode == 40){
			onOrgasmAdd();
		}
		if (e.keyCode == 38){
			onOrgasmReduct();
		}
	});
	$('.addOrgasm').click(onOrgasmAdd);
	$('.reductOrgasm').click(onOrgasmReduct);
	
	function onOrgasmAdd(){
		if (indexOfCurrentImage < imageOrgasmUrls.length){
			indexOfCurrentImage = indexOfCurrentImage + 1;
		}
		if (indexOfCurrentImage == imageOrgasmUrls.length){
			indexOfCurrentImage = 0;
		}
		
		//выполняем каждый раз, как увеличили размер
		drawImageAndPreview();
	}
	function onOrgasmReduct(){
		if (indexOfCurrentImage >= 0){
			indexOfCurrentImage = indexOfCurrentImage - 1
		}
		if (indexOfCurrentImage < 0){
			indexOfCurrentImage = imageOrgasmUrls.length - 1;
		}
		//выполняем каждый раз, как уменьшили размер
		drawImageAndPreview();
	}
	function drawImageAndPreview(){
		var url = imageOrgasmUrls[indexOfCurrentImage];
		$('#orgasm .carousel-img').attr('src', url);
		
		//пример селектора 
		//.knees-preview img[knees-id='2']
		//у селектора мы меняем значение "2" на переменную "indexOfCurrentImage", 
		//где высчитывается номер картинки
		var currentImg = 
			$(".orgasm-preview img[orgasm-id='" + indexOfCurrentImage + "']");
		
		$(".orgasm-preview img").removeClass('active');
		currentImg.addClass('active');
	}
	function init(){
		for(var i = 0; i < imageOrgasmUrls.length; i++){
			//Эти команды будут выполняться несколько раз
			createOrgasm(imageOrgasmUrls[i], i);
		}
		drawImageAndPreview();
	}
	function createOrgasm(urlForImage, index){
				
		//создаём тэг img
		var img = $('<img>');
		img.attr('src', urlForImage);
		img.attr("orgasm-id", index);
		img.click(onPreviewClick);
		
		//Добавили на страницу
		//Только сейчас пользователь увидит блок и всех его детей
		$('#orgasm .orgasm-preview').append(img);
	}
	function onPreviewClick(){
		var value = $(this).attr('orgasm-id');
		
		indexOfCurrentImage = value - 0;
		
		drawImageAndPreview();
	}
});