import React from "react";
import { useState , useEffect } from 'react'

import '../css/App.css';
import '../css/weather.css';

export default function Weather() {
  var [weather, setWeather] = useState({});

  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/weather?id=4984247&appid=905af1826830cffe7bc2ae3cbca3d357", 
      { 'method': 'GET'})
    .then((response) => {
      if(!response.ok) throw Error(response.statusText);
         return response.json();
    })
    .then((data) => {
          setWeather(data)
    })
    .catch((error) => console.log(error));
  });

  return (
    <div >
      <h2 id='weather'>Ann Arbor Weather</h2>
      <h2 id='weatherdesc'>{weather.weather && weather.weather[0].main + ", " + weather.weather[0].description 
      + ". " + Math.round(weather.main.temp-273.15) + " \u00B0C"}</h2>
    </div>
  )
}