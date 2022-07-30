import React from "react";

export default function Conditions() {
  return (
    <div className="row">
      <div className="col">
        <div className="daytime"></div>
      </div>
      <div className="col"></div>
      <div className="col">
        <div className="precipitation" id="precipitation">
          {" "}
        </div>
        <div className="humidity" id="humidity">
          Humidity: 87%
        </div>
        <div className="wind" id="wind">
          Wind: 16km/h
        </div>
      </div>
    </div>
  );
}
