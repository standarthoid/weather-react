import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js";
import "./Forecast.css";
import axios from "axios";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div id="forecast">
        <div className="row forecastRow">
          {forecast.map(function (forecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col cards-positioning" key={index}>
                  <WeatherForecastDay data={forecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `b68955b53e53008eb9772143fe4d18a1`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
