document.addEventListener('DOMContentLoaded', () => {
    const cityDropdown = document.getElementById('city');
    const getWeatherButton = document.getElementById('getWeather');
    const weatherInfoDiv = document.getElementById('weatherInfo');

    getWeatherButton.addEventListener('click', () => {
        const selectedCity = cityDropdown.value;
        fetchWeather(selectedCity);
    });
});

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

async function fetchWeather(city) {
    try {
        const apiKey = '3e5755b703b833e8cdc8a05389af7e2d';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=3e5755b703b833e8cdc8a05389af7e2d&units=metric`);
        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}
