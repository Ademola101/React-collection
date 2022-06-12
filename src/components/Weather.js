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
  }, []);
  
  
  return (
    <>
    <h2>

      Weather for {city}

    </h2>

    <div>
      <p>

        Temperature: {weatherData['list'][0]['main']['temp']}
      </p>
    </div>
    </>
  );
}

export default Weather;
