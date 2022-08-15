import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature" id="temperature">
          {Math.round(props.celsius)}
        </span>{" "}
        <span className="temperature_celsius">°C | </span>{" "}
        <span className="temperature_fahrenheit">
          <a href="/" id="fahrenheit" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature" id="temperature">
          {Math.round(fahrenheit)}
        </span>{" "}
        <span className="temperature_celsius">
          <a href="/" id="celsius" onClick={showCelsius}>
            °C
          </a>{" "}
          |{" "}
        </span>{" "}
        <span className="temperature_fahrenheit"> °F</span>
      </span>
    );
  }
}
