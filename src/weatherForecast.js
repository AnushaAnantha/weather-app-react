import React, { useState } from "react";
import axios from 'axios'; 
import WeatherForecastDay from "./weatherForecastDay";


export default function WeatherForecast(props) {

  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);


   function handleWeatherForecastResponse(response){
      setWeatherForecastData(response.data.daily);
      setLoaded(true);
  }

  if (loaded){
    return(
        <div class="container-fluid">
            <div className="row">
                    <div className="col-4">
                        <WeatherForecastDay data={weatherForecastData[0]}/>
                    </div>
                    <div className="col-4">
                        <WeatherForecastDay data={weatherForecastData[1]}/>
                    </div>
                    <div className="col-4">
                        <WeatherForecastDay data={weatherForecastData[2]}/>
                    </div>
                
   
            </div>
        </div>
        
    )   
  }else{
    let apiKey = "9325fbc23be1b75ce7efd7f3beee2b86";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(handleWeatherForecastResponse);
    return null;
  }
}
