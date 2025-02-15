import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "./SearchBox.css";
import js from "@eslint/js";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);

  const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e8212b65b1597b64b3c05b2639e5100d";

  let getWeatherInfo = async () => {
    let geoResponse = await fetch(
      `${GEO_API_URL}?q=${city},IN&limit=5&appid=${API_KEY}`
    );
    let geoData = await geoResponse.json();
    if (!geoData.length) {
      console.log("city not found");
      return;
    }
    let { lat, lon } = geoData[0];

    let weatherResponse = await fetch(
      `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    let weatherData = await weatherResponse.json();
    setWeather(weatherData);
    let result = {
      city: city,
      temp: weatherData.main.temp,
      tempMin: weatherData.main.temp_min,
      tempMax: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      feelslike: weatherData.main.feels_like,
      weather: weatherData.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    setCity("");
  };
  return (
    <div className="SearchBox">
      <form action="">
        <TextField
          id="city"
          required
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          endIcon={<ZoomInIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
