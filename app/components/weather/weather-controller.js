function WeatherController() {
	var ws = new WeatherService();

	function drawWeather(weather)
	console.log(weather);
	var weatherElem = document.getElementById('weather');
	ws.getWeather(drawWeather)

	function convertTemp(weather) {
		var f = ((K - 273.15) * 1.8) + 32
		var k = 0
		var c = K - 273.15
	}


}
