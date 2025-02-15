import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import WeatherApp from "./WeatherApp";
function App() {
  const [count, setCount] = useState(0);
  let handle = () => {
    console.log("Hello button got clickkd");
  };
  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
