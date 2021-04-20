$(document).ready(function(){
	var orcsArray = [
		{ 
			id: 1,
			url: 'image/orc/orc1.jpg',
			name: "Светлана",
			age: 42,
			textColor: "#FF00FF",
			bitches: 0,
			pornSize: 1,
			
		},
		{ 
			id: 2,
			url: 'image/orc/orc2.png',
			name: "Ноэль",
			age: 22,
			textColor: "#FF6347",
			bitches: 3,
			pornSize: 2,
		},
		{ 
			id: 3,
			url: 'image/orc/orc3.webp',
			name: "Лизбэт",
			age: 34,
			textColor: "#FF6347",
			bitches: 9,
			pornSize: 3,
		},
		{ 
			id: 4,
			url: 'image/orc/orc4.png',
			name: "Габриэль",
			age: 38,
			textColor: "#FF6347",
			bitches: 7,
			pornSize: 4,
		},
		{ 
			id: 5,
			url: 'image/orc/orc5.jpg',
			name: "Дашка",
			age: 37,
			textColor: "#FF0000",
			bitches: 5,
			pornSize: 5,
		},
		{ 
			id: 6,
			url: 'image/orc/orc6.jpg',
			name: "Сюзанна",
			age: 30,
			textColor: "#FF6347",
			bitches: 2,
			pornSize: 6,
		}
	];
	
	init();
	
	$('#orc .bitches').click(onBitches);
	$('#orc .age').click(onAge);
	$('#orc .porn-size').click(onPornSaiz);
	$('#orc .return').click(onReturn);
	
	
	function onReturn(){
		for(var i = 0; i < orcsArray.length; i++){
			var orcObj = orcsArray[i];
			var divOrc = $("[orc-id='" + orcObj.id + "']");;
			divOrc.css('opacity', 1);
			divOrc.css('padding', 1);
			
		}
	}
	function onBitches(){
		for(var i = 0; i < orcsArray.length; i++){
			var orcObj = orcsArray[i];
			var divOrc = $("[orc-id='" + orcObj.id + "']");;
			divOrc.css('opacity', 1 - orcObj.bitches / 10);
			
		}
	}
	function onAge(){
		for(var i = 0; i < orcsArray.length; i++){
			var orcObj = orcsArray[i];
			var divOrc = $("[orc-id='" + orcObj.id + "']");;
			divOrc.css('padding', orcObj.age + 10);
		}
	}
	function onPornSaiz(){
		for(var i = 0; i < orcsArray.length; i++){
			var orcObj = orcsArray[i];
			var divOrc = $("[orc-id='" + orcObj.id + "']");;
			divOrc.css('width', orcObj.pornSize + 10);
			divOrc.css('height', orcObj.pornSize - 10);
		}
	}
	function init(){
		for(var f = 0; f < orcsArray.length; f++){
			createOrc(orcsArray[f], f);
		}
	}
	function createOrc(orcObj, f){
		var divOrc = $('<div>');
		divOrc.addClass('orc-content');
		divOrc.css('border-color', orcObj.textColor);
		// divOrc.css('opacity', 1 - orcObj.bitches / 10);
		divOrc.attr("orc-id", orcObj.id);
		
		var divOrcHeader = $('<div>');
		divOrcHeader.addClass('orc-content-header');
		
		divOrc.append(divOrcHeader);
		
		divOrcHeader.append(createSpan ("name", orcObj.name, orcObj.textColor));
		divOrcHeader.append(createSpan ("age", orcObj.age));
		divOrcHeader.append(createSpan ("bitches", orcObj.bitches));
		
		var imgOrc = $('<img>');
		divOrc.append(imgOrc);
		imgOrc.attr('src', orcObj.url);
		
		$('#orc .orc-block').append(divOrc);
	}
	
	function createSpan(orcObjName, Text, color){
		var span = $('<span>');
		span.addClass(orcObjName);
		span.text(`${orcObjName}:${Text}`);
		span.css('color', color);
		return span;
}
	
	
	
	
	
	
	
	
	
	
	
	
});