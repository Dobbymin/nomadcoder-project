// Replace with your OpenWeatherMap API key
const apiKey = 'my_apiKey';

// Get the user's current location using Geolocation API
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather, showError);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

// Handle errors when getting the user's location
function showError(error) {
  console.error("위치를 가져오는 중 오류가 발행 : ", error);
}

// Get weather data for the user's location using OpenWeatherMap API
async function getWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const weatherData = response.data;

    document.getElementById(
      "location"
    ).innerText = `Location: ${weatherData.name}`;
    document.getElementById(
      "weather"
    ).innerText = `Weather: ${weatherData.weather[0].description}`;
  } catch (error) {
    console.error("날씨 데이터를 가져오는 중 오류 발생 : ", error);
  }
}

// Call the getLocation function to start the process
getLocation();
