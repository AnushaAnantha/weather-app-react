import React, { useState } from "react";
import axios from 'axios'; 
import TemperatureConversion from "./TemperatureConversion";
import WeatherForecast from "./weatherForecast"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [weatherData, setWeatherData] = useState( {ready : false});

  let apiKey = "667b283f74e42ac5a41950daddbddfc8";


  function handleSubmit(event) {
    event.preventDefault();
    if (city === "") {
      setMessage("Enter a city");
    } else {
      getWeatherForCity(city);
    }
  }
  
  function getWeatherForCity(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(api).then(handleWeatherResponse);
  }

  function handleWeatherResponse(response){
    setWeatherData({
        ready: true,
        coordinates : response.data.coord,
        temperature : response.data.main.temp,
        humidity : response.data.main.humidity,
        date : new Date(response.data.dt * 1000),
        description : response.data.weather[0].description,
        icon : response.data.weather[0].icon,
        wind : response.data.wind.speed,
        city: response.data.name,

    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if(weatherData.ready){
    return(
      <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div class="row" id="padding-top">
        
      </div>
      <h4>
      <div class="row">
      <ul class="parameters">
        
        <li><TemperatureConversion celsius={weatherData.temperature} /></li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
          <li>Description: {weatherData.description}</li>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt = "Weather icon"
          />
        </ul>
        </div>
      </h4>
      <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
    );
  }else{
    return(
      <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      </div>
    )
  }
}
