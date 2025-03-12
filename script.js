const apiKey = 'ceb7c9609bc251b37fda2d9ccad58d05'; // Joseff Pavlicek Key
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p class="text-danger">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather, wind } = data;
    const weatherHtml = `
        <h3>${name}</h3>
        <p><strong>Teplota:</strong> ${main.temp}°C</p>
        <p><strong>Pocitove:</strong> ${main.feels_like}°C</p>
        <p><strong>Pressure:</strong> ${main.pressure}</p>
        <p><strong>Vyska:</strong> ${main.sea_level}</p>
        <p><strong>Rychlost:</strong> ${wind.speed}</p>
        <p><strong>Pocasi:</strong> ${weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather Icon">
    `;



    document.getElementById('weatherResult').innerHTML = weatherHtml;
}

