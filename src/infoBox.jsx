import React from "react";
import Card from "@mui/material/Card";
import "./infoBox.css";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function InfoBox({ info }) {
  const Image_URL =
    "https://plus.unsplash.com/premium_photo-1675968513923-e07c6bbe0218?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature : {info.temp}</p>

              <p>Feels Like : {info.feelslike}</p>

              <p>Max Temperature : {info.tempMax}</p>

              <p>Min Temperature : {info.tempMin}</p>

              <p>Weather : {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
