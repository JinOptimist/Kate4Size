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
	
	
	
	
	let bestWife = wifeUrls[0];
	for(let i = 0; i < wifeUrls.length -1; i++){
		let wifeCurrent = wifeUrls[i];
		
		if (wifeCurrent.nice > bestWife.nice) {
			bestWife = wifeCurrent;
		}
		if (wifeCurrent.nice == bestWife.nice
			&& wifeCurrent.porn < bestWife.porn) {
			bestWife = wifeCurrent;
		}
	}
	
	
	//let minPornUrl = wifeUrls[wifeUrls.length - 1].url;
	$('#reversal img').attr('src', bestWife.url);

});



















