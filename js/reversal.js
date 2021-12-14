$(document).ready(function(){
	var wifeUrls = [
		{
			name: 'Соки любви',
			url: 'image/wife/wife01.jpg',
			porn: 5,
			nice: 3,
			textColor: '#00FFCC'
		
		},
		{
			name: 'Счастливая эксбиционистка',
			url: 'image/wife/wife02.jpg',
			porn: 4,
			nice: 7,
			textColor: '#FFFFCC',
		},
		{
			name: 'Соска это не обзывательство',
			url: 'image/wife/wife03.jpg',
			porn: 6,
			nice: 4,
			textColor: '#FFC00C'
		},
		{
			name: 'Подъезд не помеха',
			url: 'image/wife/wife05.jpg',
			porn: 3,
			nice: 6
		},
		{
			name: 'Стесняшка',
			url: 'image/wife/wife07.jpg',
			porn: 1,
			nice: 7
		},
		{
			name: 'Самый важный навык',
			url: 'image/wife/wife12.jpg',
			porn: 7,
			nice: 4
		},
	];



	// for(let i = 0; i < wifeUrls.length -1; i++){
		// let wifeCurrent = wifeUrls[i];
		// let wifeNext = wifeUrls[i + 1];
		// if (wifeCurrent.porn < wifeNext.porn) {
			// wifeUrls[i + 1] = wifeCurrent;
			// wifeUrls[i] = wifeNext;
		// }	
	// }
	
	
	
	
	// let bestWife = wifeUrls[0];
	
	// for(let i = 0; i < wifeUrls.length; i++){
		// let wifeCurrent = wifeUrls[i];
		
		// console.log(wifeCurrent.nice + wifeCurrent.porn);
		// if (bestWife.nice + bestWife.porn >= wifeCurrent.nice + wifeCurrent.porn) {
			// bestWife = wifeCurrent;
			// console.log('change');
		// }	
	// }
	// $('#reversal img').attr('src', bestWife.url);
	
	
	
	let goodWifes = [ ];
	
	for(let i = 0; i < wifeUrls.length; i++){
		let wifeCurrent = wifeUrls[i];
		
		if (wifeCurrent.porn > 5) {
			goodWifes.push(wifeCurrent);
			console.log('push');
		}	
	}
	
	for(let i = 0; i < goodWifes.length; i++){
		let goodWifeUrl = goodWifes[i];
		console.log(goodWifeUrl.url);
		
		var clone = $(".reversal-content:first-child").clone();
		clone.find('img').attr('src', goodWifeUrl.url);
		$(".reversal-block").append(clone);
	}	
	
	for(let i = 0; i < wifeUrls.length; i++){
		let wifeCurrent = wifeUrls[i];
		let wifeCurrentUrl = wifeCurrent.url;
		let slash = '/';
		
		let arrayOfStrings = wifeCurrentUrl.split(slash);
		console.log(arrayOfStrings[arrayOfStrings.length - 1]);
		let wifeName = arrayOfStrings[arrayOfStrings.length - 1];
		let dot = '.';
		let arrayLastElement =  wifeName.split(dot);
		console.log(arrayLastElement[0]);
		
		let wifeCurrentName = wifeCurrent.name;
		console.log(wifeCurrentName + '-' + arrayLastElement[0]);

	}	
	let maxPornWifeCount = 0;
	for(let i = 0; i < wifeUrls.length; i++){
		let wifeCurrent = wifeUrls[i];
		
		if (wifeCurrent.porn > 5) {
			maxPornWifeCount = maxPornWifeCount + 1;
			
		}	
	}
	console.log(maxPornWifeCount);
	
	let sWifes = [ ];
	for(let i = 0; i < wifeUrls.length; i++){
		let wifeCurrent = wifeUrls[i];
		let wifeCurrentName = wifeCurrent.name;
		
		if (wifeCurrent.name.includes('С')) {
			sWifes.push(wifeCurrentName);
			
		}	
		
	}
	console.log(sWifes);
	
	let sNotWifes = [ ];
	for(let i = 0; i < wifeUrls.length; i++){
		let wifeCurrent = wifeUrls[i];
		let wifeCurrentName = wifeCurrent.name;
		
		if (wifeCurrent.name.includes('С') == false) {
			sNotWifes.push(wifeCurrentName);
			
		}	
		
	}
	console.log(sNotWifes);
	
	let kneesWifes = [ ];
	for(let i = 1; i < 8; i++){
		// let wifeCurrent = {};
		// wifeCurrent.name = "knees" + i;
		// wifeCurrent.url = 'image/knees/knees' + i +  '.jpg';
		// wifeCurrent.porn = i;
		// kneesWifes.push(wifeCurrent);

		kneesWifes.push({
			name: "knees" + i,
			url: 'image/knees/knees' + i +  '.jpg',
			porn: i
		});		
	}	
		
	console.log(kneesWifes);
	
	for(let i = 0; i < wifeUrls.length; i++){
		let wifeCurrent = wifeUrls[i];
		
		if (wifeCurrent.porn < 5) {
			wifeUrls.splice(i, 1);
			i--;
			console.log(wifeUrls);
		}	
	}
	console.log(wifeUrls);

});



















