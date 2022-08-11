import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import NiceDate from "./NiceDate.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: 12,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather_box">
            <div className="weather_position">
              <h2 className="how_weather">How's the weather in</h2>
              <div className="App">
                <form id="search-form">
                  <input
                    type="text"
                    placeholder="Search for a city"
                    autocomplete="off"
                    autofocus="on"
                    id="search-text-input"
                  />
                  <input type="submit" className="btn btn-info" value="Go!" />
                  <button className="location" id="location">
                    Current Location
                  </button>
                </form>
              </div>
              <div>
                <div className="current_location">Location</div>
                <div className="row">
                  <div className="col">
                    <div className="date">
                      <NiceDate date={weatherData.date} />
                    </div>
                    <div className="description-weather text-capitalize">
                      {weatherData.description}
                    </div>
                    <div className="currently" id="current-city">
                      {weatherData.city}
                    </div>
                  </div>
                </div>
              </div>
              <div className="WeatherIcon">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                />
              </div>
              <div className="col">
                <span className="temperature" id="temperature">
                  {weatherData.temperature}
                </span>
                <span className="temperature_celsius">
                  <a
                    href="https://www.google.com"
                    className="active"
                    id="celsius"
                  >
                    °C
                  </a>{" "}
                  |{" "}
                </span>
                <span className="temperature_fahrenheit">
                  <a href="https://www.google.com" id="fahrenheit">
                    {" "}
                    °F
                  </a>
                </span>
              </div>
              <div className="row">
                <div className="col">
                  <div className="daytime"></div>
                </div>
                <div className="col"></div>
                <div className="col">
                  <div className="precipitation" id="precipitation">
                    {""}
                  </div>
                  <div className="humidity" id="humidity">
                    Humidity: {weatherData.humidity}%
                  </div>
                  <div className="wind" id="wind">
                    Wind: {weatherData.wind} km/h
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="current_weather" id="weather_conditions">
                    {weatherData.currently}
                  </div>
                </div>
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
    const apiKey = "b68955b53e53008eb9772143fe4d18a1";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
