document.addEventListener('DOMContentLoaded', function () {
	const getWeatherButton = document.getElementById('getWeatherButton');

	getWeatherButton.addEventListener('click', function () {
		const city = document.getElementById('cityInput').value;

		if (city === '') {
			alert('Please enter a city name.');
			return;
		}

		const apiUrl = `https://weather-api.agamya.eu.org/${city}`;

		fetch(apiUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				const temperature = data.main.temp;
				const description = data.weather[0].description;
				const weatherInfo = document.getElementById('weatherInfo');
				weatherInfo.innerHTML = `
                    <h2>Weather in ${city}</h2>
                    <p>Temperature: ${temperature} &deg;C</p>
                    <p>Description: ${description}</p>
                `;
			})
			.catch((error) => {
				console.error('Error fetching weather data:', error);
				alert(
					'An error occurred while fetching weather data. Please try again.'
				);
			});
	});
});
