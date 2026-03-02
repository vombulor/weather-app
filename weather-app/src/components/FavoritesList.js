import React from "react";

function FavoritesList({ favorites, selectFavorite }) {
  return (
    <div>
      <h3>Favorites</h3>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {favorites.map((city, index) => (
            <li key={index}>
              <button onClick={() => selectFavorite(city)}>
                {city}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;