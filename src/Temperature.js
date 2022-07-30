import React from "react";

export default function Temperature() {
  return (
    <div className="col">
      <span className="temperature" id="temperature">
        30
      </span>
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
  );
}
