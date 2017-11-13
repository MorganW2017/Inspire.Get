function WeatherController() {
	var wc = this;
	var ws = new WeatherService();

	ws.getWeather(function (weather) {
		console.log(weather);
		drawWeather(weather)
	})
}
var weatherElem = document.getElementById('weather')

function drawWeather(weather) {
	var template = ''
	template = `
			Location: ${weather.name}
			Wind Speed: ${weather.wind.speed}
			Temp: ${Math.round(((weather.main.temp)-273.15)*1.8)+32}F
			Weather: ${weather.weather[0].main}		
			`
	weatherElem.innerText = template
}