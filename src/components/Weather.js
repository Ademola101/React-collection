import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Weather = ({log,lat,city}) => {
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = process.env.REACT_APP_OPENAPI;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${log}&appid=${apiKey}`;

  useEffect(() => {
    axios.get(
      url
    ).then((response) => {
      setWeatherData(response.data);
      
      
    })
  },[url,log,lat]);
  
  
  return (
    <>
    <h2>

      Weather for {city}

    </h2>

    <div>
      <p>
{weatherData.cod ? (

<>
<div> Temperature : {weatherData["list"][0]["main"]["temp"] } &#8451;</div>

<div>
  
  <img src={`http://openweathermap.org/img/wn/${weatherData["list"][0]["weather"][0]["icon"]}@2x.png`} alt="weather icon" />
  </div>
  
  <div>
    Wind: {weatherData["list"][0]["wind"]["speed"]} m/s
    
    </div> </>):(<div>Loading...</div>)}
        
      </p>
    </div>
    </>
  );
}

export default Weather;
