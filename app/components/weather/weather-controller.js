function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);
		//What can you do with this weather object?
	})

	function convertTemp(weather) {
		var f = ((K - 273.15) * 1.8) + 32
		var k = 0
		var c = K - 273.15
	}
	

}
