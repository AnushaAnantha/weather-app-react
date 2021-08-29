import React from "react";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherForecastDay(props) {

   function getDay(dt) {
    let date = new Date(dt * 1000)
    let days = [
        "Sunday",
        "Monday",
        "Tueday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[date.getDay()];
      return day;
   }
    return(
        
        <div>
            <ul class="disc-style-none">
                <li>{getDay(props.data.dt)} </li>
                <li><TemperatureConversion celsius={Math.round(props.data.temp.max)}/></li>
                <li><TemperatureConversion celsius={Math.round(props.data.temp.min)}/></li>
                <li><img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt = "Weather icon"/></li>
            </ul>
        </div>
              
    )
  }

