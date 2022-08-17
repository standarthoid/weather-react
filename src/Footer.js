import React from "react";
export default function Footer() {
  return (
    <div>
      {" "}
      <div>
        <p className="myName">
          <a
            className="openSource"
            href="https://github.com/standarthoid/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by
          </a>{" "}
          by{" "}
          <a
            className="openSource"
            href="https://tourmaline-haupia-d1577a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Miriam Hanke
          </a>{" "}
          and hosted on{" "}
          <a
            className="openSource"
            href="https://adorable-khapse-434fab.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
