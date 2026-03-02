import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";

const API_KEY = "4d4bd228e0524748a48a6753b781de59";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchWeather = async (cityName) => {
    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      setWeatherData({
        city: response.data.name,
        temp: response.data.main.temp,
        weather: response.data.weather[0].description,
      });
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  const addFavorite = () => {
    if (weatherData && !favorites.includes(weatherData.city)) {
      setFavorites([...favorites, weatherData.city]);
    }
  };

  const selectFavorite = (cityName) => {
    fetchWeather(cityName);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h1>Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <WeatherCard weather={weatherData} addFavorite={addFavorite} />
      )}

      <FavoritesList
        favorites={favorites}
        selectFavorite={selectFavorite}
      />
    </div>
  );
}

export default App;