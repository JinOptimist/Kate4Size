$(document).ready(function(){
	var orcsArray = [
		{ 
			url: 'image/orc/orc1.jpg',
			name: "Светлана",
			age: 42,
			textColor: "#FF00FF",
			bitches: 0,
		},
		{ 
			url: 'image/orc/orc2.png',
			name: "Ноэль",
			age: 22,
			textColor: "#FF6347",
			bitches: 3,
		},
		{ 
			url: 'image/orc/orc3.webp',
			name: "Лизбэт",
			age: 34,
			textColor: "#FF6347",
			bitches: 9,
		},
		{ 
			url: 'image/orc/orc4.png',
			name: "Габриэль",
			age: 38,
			textColor: "#FF6347",
			bitches: 7,
		},
		{ 
			url: 'image/orc/orc5.jpg',
			name: "Дашка",
			age: 37,
			textColor: "#FF0000",
			bitches: 5,
		},
		{ 
			url: 'image/orc/orc6.jpg',
			name: "Сюзанна",
			age: 30,
			textColor: "#FF6347",
			bitches: 2,
		}
	];
	
	init();
	
	function init(){
		for(var i = 0; i < orcsArray.length; i++){
			createOrc(orcsArray[i], i);
		}
	}
	
	function createOrc(orcObj, index){
		var divOrc = $('<div>');
		divOrc.addClass('orc-content');
		divOrc.css('border-color', orcObj.textColor);
		
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