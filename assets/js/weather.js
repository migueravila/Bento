 async function getWeather(location) {
    try {
      const response = await fetch(`https://wttr.in/${location}?format=%t`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather information');
      }

      const weatherData = await response.text();
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.textContent = `Weather in ${location}: ${weatherData}`;
    } catch (error) {
      console.error(error.message);
    }
  }


// Function to get weather information from wttr.in based on user's location
async function getWeatherByLocation() {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function(position) {
        const { latitude, longitude } = position.coords;
        const response = await fetch(`https://wttr.in/${latitude},${longitude}?format=%t`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather information');
        }

        const weatherData = await response.text();
        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.textContent = `Weather at your location: ${weatherData}`;
      });
    } else {
      throw new Error('Geolocation is not supported by your browser');
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Ask for location permission when the page loads
document.addEventListener('DOMContentLoaded', function() {
  if (confirm('Allow this website to access your location for weather information?')) {
    getWeatherByLocation();
  } else {
    // Provide a fallback or default location if the user denies location access
    getWeather('Ranchi'); // Change this to your desired default location
  }
});
