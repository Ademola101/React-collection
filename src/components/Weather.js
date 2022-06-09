import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const Weather = ({city}) => {
  const [weatherData, setWeatherData] = React.useState([]);
  const apiKey = process.env.REACT_APP_OPENAPI;
  const url = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}`;

  useEffect(() => {
    axios.get(
      url
    ).then((response) => {
      setWeatherData(response.data);

    })
  }, [city]);
  return (
    <div>
      
    </div>
  );
}

export default Weather;
