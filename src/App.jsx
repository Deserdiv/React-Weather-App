import React, { useState } from 'react';
import WeatherData from './components/WeatherData';
import './App.css'

function WeatherSearch() {
  // Declare and initialize state variables "location" and "weather"
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  // Async function to fetch weather data from OpenWeatherMap API
  async function handleSearch(e) {
    // Prevent form submission from refreshing page
    e.preventDefault();
    // API key and URL for fetching weather data
    const apiKey = '6a7a206f8171407e4ced0b46357e397f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    // Fetch weather data from API
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Update weather state with fetched data
    setWeather({
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed
    });
  }

  return (
    <div>
      {/* Form for searching for weather data by location */}
      <form onSubmit={handleSearch}>
        <label htmlFor="location-input">Enter a location:</label>
        {/* Input field for location */}
        <input
          type="text"
          id="location-input"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        {/* Submit button for form */}
        <button type="submit">Search</button>
      </form>
      {/* If weather data has been fetched, render WeatherData component with location and weather data passed as props */}
      {weather ? <WeatherData location={location} weather={weather} /> : ''}
    </div>
  );
}

export default WeatherSearch;


// React ve useState içe aktarılır. Ayrıca, WeatherData componenti ve uygulamanın CSS dosyası da içe aktarılır.

// WeatherSearch fonksiyonu tanımlanır ve location ve weather adlı iki state değişkeni tanımlanır ve başlangıç değerleri olarak boş dizgi ve null değerleri verilir. Bu değişkenler, useState hook'u kullanılarak tanımlanmıştır.

// handleSearch adlı bir asenkron fonksiyon tanımlanır. Bu fonksiyon, bir form gönderiminden sonra çağrılır ve OpenWeatherMap API'sinden hava durumu verilerini çeker.

// Form gönderiminin sayfayı yenilemesini engellemek için, preventDefault() metodu çağrılır.

// OpenWeatherMap API'sine erişmek için bir API anahtarı ve API URL'si tanımlanır. Bu API URL'sinde, kullanıcının girdiği lokasyon ve API anahtarı değişkenleri içerir.

// fetch() fonksiyonu kullanılarak API'den hava durumu verileri çekilir ve response değişkenine atanır. Daha sonra, response öğesi json() metodu kullanılarak işlenir ve data değişkenine atanır.

// setWeather() fonksiyonu çağrılarak, weather değişkeninin değeri API'den çekilen verilere göre güncellenir. Bu veriler, temperature, humidity, ve windSpeed adlı özellikleri içerir.

// Form, giriş alanı ve arama düğmesini içeren bir div etiketi içinde render edilir. Form, handleSearch fonksiyonunu çağıran bir onSubmit olay dinleyicisi içerir. Giriş alanı, `