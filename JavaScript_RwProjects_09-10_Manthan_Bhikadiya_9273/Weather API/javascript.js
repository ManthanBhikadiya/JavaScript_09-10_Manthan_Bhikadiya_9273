const city_Name = document.getElementById("city_Name")
const Search = document.getElementById("Search")
const loader = document.getElementById("loader")
const all_Data = document.getElementById("all_Data")
const error = document.getElementById("error")

Search.addEventListener("click", weather_Data)

async function weather_Data(defaultCity = "surat") {
    const city = city_Name.value.trim() || defaultCity

    error.textContent = ""
    all_Data.innerHTML = ""

    if (!city) {
        error.textContent = "Please enter a city name"
        return
    }

    loader.classList.remove("hidden")

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01922cbf6bb34315bc5cf6dfd814f621&units=metric`

    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("city not found")

        const result = await response.json()
        loader.classList.add("hidden")

        const icon = result.weather[0].icon

        all_Data.innerHTML = `
        <div class="weather-card">
            <h5>Temperature: ${result.main.temp} °C</h5>
            <h5>Weather: ${result.weather[0].main}</h5>
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" />
            <p>Humidity: ${result.main.humidity}%</p>
            <p>Wind Speed: ${result.wind.speed} m/s</p>
            <p>Feels Like: ${result.main.feels_like} °C</p>
            <p>Min Temp: ${result.main.temp_min} °C</p>
            <p>Max Temp: ${result.main.temp_max} °C</p>
        </div>
        `
    } catch (err) {
        loader.classList.add("hidden")
        error.textContent = "City not found"
        console.log(err)
    }
}
