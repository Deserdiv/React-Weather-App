import React from 'react';
import '../App.css'

function WeatherData(props) {
  return (
    <div>
      <h2>Current weather in {props.location}:</h2>
      <p>Temperature: {props.weather.temperature}</p>
      <p>Humidity: {props.weather.humidity}</p>
      <p>Wind Speed: {props.weather.windSpeed}</p>
    </div>
  );
}

export default WeatherData;
