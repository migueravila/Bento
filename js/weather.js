// Select Elements

const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');

// App data

const weather = {};
weather.temperature = {
    unit: 'celsius',
};

const KELVIN = 273;
const key = 'aa5b0a76dfbf87441928fb3cc32d3d69';

setPosition();

function setPosition(position) {
    let latitude = 21.0265;
    let longitude = -89.6765;
    console.log('What happens here');

    console.log(latitude);
    console.log(longitude);

    getWeather(latitude, longitude);
    console.log('What happens here');
}

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
        })
        .then(function () {
            displayWeather();
        });
}

function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
}
