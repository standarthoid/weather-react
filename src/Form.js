import React from "react";

export default function Form() {
  return (
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
  );
}
