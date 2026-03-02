import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Sample static weather
  const sampleWeather = {
    city: "London",
    temp: 15,
    weather: "Cloudy",
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      setWeatherData({ ...sampleWeather, city: city });
    }
  };

  const addFavorite = () => {
    if (weatherData && !favorites.includes(weatherData.city)) {
      setFavorites([...favorites, weatherData.city]);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      {weatherData && (
        <WeatherCard weather={weatherData} addFavorite={addFavorite} />
      )}
      <FavoritesList favorites={favorites} />
    </div>
  );
}

export default App;