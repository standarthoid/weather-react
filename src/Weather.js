import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import WeatherInfo from "./Weatherinfo.js";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "b68955b53e53008eb9772143fe4d18a1";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather_box">
            <div className="weather_position">
              <h2 className="how_weather">How's the weather in</h2>
              <div className="App">
                <form id="search-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search for a city"
                    autocomplete="off"
                    autofocus="on"
                    id="search-text-input"
                    onChange={handleCityChange}
                  />
                  <input type="submit" className="btn btn-info" value="Go!" />
                  <button className="location" id="location">
                    Current Location
                  </button>
                </form>
                <WeatherInfo data={weatherData} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Forecast />
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
