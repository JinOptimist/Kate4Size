$(document).ready(function(){
	
	$('input.search-bottom').click(function(){
		let userText = $('input.search-text').val();
		let userTextArray = userText.split(""); 
		
		// for(let index = 0; index < userText.length ;index+=2){
			// console.log(userText[index]);
		// }
		// for(let index = 1; index < userText.length ;index+=2){
			// console.log(userText[index]);
		// }
		//$('.result').text(userText.length);
		
		// for(let index = cgj; index < userText.length ;index-=1){
			// console.log(userText[index]);
		// }
		// for(let index = userText.length - 1; index >= 0 ;index-=1){
			// console.log(userText[index]);
		// }
		
		
		// let answer = 0;
		
		// for(let index = 0; index < userText.length ;index++){
			// let oneSymbol = userText[index];
			// let s = Number (oneSymbol);
			// console.log(oneSymbol);
			// answer = answer + s; 
			
		// }
		// console.log(answer);
		
		// let max = 0;
		
		// for(let index = 0; index < userText.length ;index++){
			// let oneSymbol = userText[index];
			// let number = Number (oneSymbol);
			// if (number > max) {
			   // max = number;
			// }
		// }
		// console.log(max);
		
		// for(let index = 0; index < userText.length ;index++){
			// let oneSymbol = userText[index];
			// let secondSymbol = userText[index + 1];
			// if (oneSymbol == secondSymbol) {
			   // console.log(oneSymbol + ' ' + secondSymbol);
			// }
		// }
		
		// for(let index = 0; index < userText.length -1 ;index++){
			// let oneSymbol = userText[index];
			// let number = Number (oneSymbol);
			// let remainderSymbol = number % 2;
			// if (remainderSymbol == 0) {
			   // console.log(number);
			// }
		// }
		
		let even = [];
		let odd = [];
		
		for(let index = 0; index < userTextArray.length ;index++){
			let oneSymbol = userTextArray[index];
			let number = Number (oneSymbol);
			if (number % 2 == 0) {
				even.push(number);  
			}else{
				odd.push(number);  
			}
		}
		sort(even);
		sort(odd);
		
		even = even.concat(odd);
		
		console.log(even);
	});
	
	function sort(someArray){
		for(let k = 0; k < someArray.length - 1;k++){
			for(let index = 0; index < someArray.length - 1 - k ;index++){
				let currentSymbol = someArray[index];
				let currentNumber = Number (currentSymbol);
				let nextSymbol = someArray[index + 1];
				let nextNumber = Number (nextSymbol);
				
				if (currentNumber > nextNumber) {
					someArray[index] = nextNumber;
					someArray[index + 1] = currentNumber;
				}
			} 
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});