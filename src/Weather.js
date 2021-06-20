import React, { useState } from "react";
import axios from 'axios'; 

export default function Weather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city === "") {
      setMessage("Enter a city");
    } else {
      callApi(city);
    }
  }
  function callApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(api).then(showTemperature);
  }

  function showTemperature(response) {
    console.log(response);
    setMessage(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>Description: {response.data.weather[0].description}</li>

        <img
          src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
        />
      </ul>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h4>{message}</h4>
    </div>
  );
}
