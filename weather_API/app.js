console.log("Building a Weather Page with Ajax.");

$('button').on('click', (event) => {
	const $zip = $('input').val();
	console.log($zip);

		$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + $zip + ',us&appid=de7b1b782170a95481458c0d0a713ad7',
		type: "GET",
		dataType: "json",
		success: function(data) {
			console.log("Yay it worked!");
			console.log(data);
			newForecast(data);
			cityName(data);
			currentTemp(data);
			tempHigh(data);
			tempLow(data);
			console.log("Click Data " + data)
		},
		fail: function(error){
			console.log("Whoops. That didn't work.");

		}
	})
})

const newForecast = (data) => {
	let $newForecastDiv = $('<div>').addClass('newForecast');
	$newForecastDiv.appendTo($('body'));
}

const cityName = (data) => {
	let $cityNameDiv = $('<div>').addClass('cityName');
	let $cityName = data.name;
	$cityNameDiv.text("City: " + $cityName);
	$cityNameDiv.appendTo($('.newForecast'));
	
}

const currentTemp = (data) => {
	let $currentTemp = $('<div>').addClass('currentTemp');
	let $tempFar = (data.main.temp * (9/5)) - 459.67;
	let $tempFarRound = $tempFar.toFixed(2);
	$currentTemp.text("Current Temperature: "+ $tempFarRound + ' °F');
	$currentTemp.appendTo($('.newForecast'));
	
}

const tempHigh = (data) => {
	let $tempHigh = $('<div>').addClass('tempHigh');
	let $tempFar = (data.main.temp_max * (9/5)) - 459.67;
	let $tempFarRound = $tempFar.toFixed(2);
	$tempHigh.text("Today's High: "+ $tempFarRound + ' °F');
	$tempHigh.appendTo($('.newForecast'));
	
}

const tempLow = (data) => {
	let $tempLow = $('<div>').addClass('tempLow');
	let $tempFar = (data.main.temp_min * (9/5)) - 459.67;
	let $tempFarRound = $tempFar.toFixed(2);
	$tempLow.text("Today's High: "+ $tempFarRound + ' °F');
	$tempLow.appendTo($('.newForecast'));
	
}