import React from "react";
import NiceDate from "./NiceDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";
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
        <WeatherIcon code={props.data.icon} size={80} />
      </div>
      <div className="col">
        <WeatherTemperature celsius={props.data.temperature} />
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
