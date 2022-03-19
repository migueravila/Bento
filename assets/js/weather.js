// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─
// Functions to setup Weather widget.

const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');

var tempUnit = CONFIG.weatherUnit;

const KELVIN = 273.15;
const key = `${CONFIG.weatherKey}`;
const weatherPromise = getWeather();
displayWeather();

async function setPosition() {
  let pos;
  if (!CONFIG.trackLocation || !navigator.geolocation) {
    if (CONFIG.trackLocation) {
      console.error('Geolocation not available');
    }
    pos = ({ lat: CONFIG.defaultLatitude, lon: CONFIG.defaultLongitude });
  }

  pos = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve({ lat: pos.coords.latitude.toFixed(3), lon: pos.coords.longitude.toFixed(3) });
    },
      () => {
        resolve({ lat: CONFIG.defaultLatitude, lon: CONFIG.defaultLongitude });
      });
  });
  return pos;
}

async function getWeather() {
  const position = await setPosition();
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&lang=${CONFIG.language}&appid=${key}`;

  let response = await fetch(api).catch(err => {
    console.log(err);
  });
  let data = await response.json();

  let celsius = Math.floor(data.main.temp - KELVIN);
  return {
    description: data.weather[0].description,
    iconId: data.weather[0].icon,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temperature: tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32
  };
}

async function displayWeather() {
  var weather = await weatherPromise;
  iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
  descElement.innerHTML = weather.description;
}
