import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";
import axios from "axios";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast" id="forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Thu</div>
            <div className="weather-icon">
              <WeatherIcon code="01d" size={40} />
            </div>
            <div className="Forecast-temperature">
              <span className="max-temp">{forecast[0].temp.max}°</span>{" "}
              <span className="min-temp">14°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `b68955b53e53008eb9772143fe4d18a1`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unites=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
