function WeatherController() {
	var ws = new WeatherService();

	var weatherElem = document.getElementById('weather')

	function getWeather() {
		weatherService.getWeather(drawWeather)
	}

	function drawWeather(getWeather) {
		console.log(weather);
		for (var i = 0; i < weather.length; i++) {
			var weather = weather[i];
			var template = ''
			template += `
			<div>
			<h3>${weather}</h3>
			</div>
			
			`
		}
	}

	function convertTemp(weather) {
		var f = ((K - 273.15) * 1.8) + 32
		var k = 0
		var c = K - 273.15
	}
	weatherElem.innerHTML = template
}
