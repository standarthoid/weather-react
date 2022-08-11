import "./App.css";
import Form from "./Form.js";
import Location from "./Location.js";
import Icon from "./Icon.js";
import Temperature from "./Temperature.js";
import Conditions from "./Conditions.js";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather_box">
          <div className="weather_position">
            <h2 className="how_weather">How's the weather in</h2>
            <Form />
            <Location />
            <Icon />
            <Temperature />
            <Conditions />
            <CurrentWeather />
          </div>
        </div>
      </div>
      <div>
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
