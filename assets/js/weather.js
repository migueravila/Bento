// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─
// Functions to setup Weather widget.

const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');

let loadLastWeather = CONFIG.showLastWeather;
let lastTemperature = localStorage.getItem('lastTemperature');
let lastTempDescription = localStorage.getItem('lastWeatherDescription');
let lastWeatherIcon = localStorage.getItem('lastWeatherIcon');

const weather = {};
weather.temperature = {
	unit: 'celsius',
};

let tempUnit = CONFIG.weatherUnit;

function storeWeather(temperature, description, icon) {
	localStorage.setItem('lastTemperature', temperature.toFixed(0));
	localStorage.setItem('lastWeatherDescription', description);
	localStorage.setItem('lastWeatherIcon', icon);
}

function showLastWeather() {
	iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${localStorage.getItem('lastWeatherIcon')}.png"/>`;
	tempElement.innerHTML = `${localStorage.getItem('lastTemperature')}°<span class="darkfg">${tempUnit}</span>`;
	descElement.innerHTML = localStorage.getItem('lastWeatherDescription');
}

if (loadLastWeather && lastTemperature) {
	showLastWeather()
} else {
	iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/unknown.png"/>`;
}

const KELVIN = 273.15;
const key = `${CONFIG.weatherKey}`;
setPosition();

function setPosition(position) {
	if (!CONFIG.trackLocation || !navigator.geolocation) {
		if (CONFIG.trackLocation) {
			console.error('Geolocation not available');
		}
		getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		return;
	}
	navigator.geolocation.getCurrentPosition(
		pos => {
			getWeather(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3));
		},
		err => {
			console.error(err);
			getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		}
	);
}

function getWeather(latitude, longitude) {
	let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${CONFIG.language}&appid=${key}`;
	fetch(api)
		.then(function(response) {
			let data = response.json();
			return data;
		})
		.then(function(data) {
			let celsius = Math.floor(data.main.temp - KELVIN);
			weather.temperature.value = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;

			if (loadLastWeather) {
				storeWeather(data.main.temp - KELVIN, data.weather[0].description, data.weather[0].icon)
			}

		})
		.then(function() {
			displayWeather();
		});
}

function displayWeather() {
	iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}.png"/>`;
	tempElement.innerHTML = `${weather.temperature.value.toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
	descElement.innerHTML = weather.description;
}
