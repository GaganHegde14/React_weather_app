import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bangalore",
    feelslike: 27.72,
    humidity: 23,
    temp: 29.22,
    tempMax: 29.22,
    tempMin: 29.22,
    weather: "few clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h1>Weather App by VybSync</h1>
      <br />
      <SearchBox updateInfo={updateInfo} />
      <br />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
