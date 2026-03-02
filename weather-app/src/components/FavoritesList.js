import React from "react";

function FavoritesList({ favorites }) {
  return (
    <div>
      <h3>Favorites</h3>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <ul>
          {favorites.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;