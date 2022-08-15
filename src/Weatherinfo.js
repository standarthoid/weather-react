import React from "react";
import NiceDate from "./NiceDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <div className="current_location">Location</div>
        <div className="row">
          <div className="col">
            <div className="date">
              <NiceDate date={props.data.date} />
            </div>
            <div className="description-weather text-capitalize">
              {props.data.description}
            </div>
            <div className="currently" id="current-city">
              {props.data.city}
            </div>
          </div>
        </div>
      </div>
      <div className="WeatherIcon">
        <img src={props.data.iconUrl} alt={props.data.description} id="icon" />
      </div>
      <div className="col">
        <WeatherTemperature celsius={props.data.temperature} />

        <span className="temperature_celsius">
          <a href="https://www.google.com" className="active" id="celsius">
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
            Humidity: {props.data.humidity}%
          </div>
          <div className="wind" id="wind">
            Wind: {props.data.wind} km/h
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="current_weather" id="weather_conditions">
            {props.data.currently}
          </div>
        </div>
      </div>
    </div>
  );
}
