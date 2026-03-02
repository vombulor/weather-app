import React from "react";

function WeatherCard({ weather, addFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temp}°C</p>
      <p>Weather: {weather.weather}</p>
      <button onClick={addFavorite}>Add to Favorites</button>
    </div>
  );
}

export default WeatherCard;