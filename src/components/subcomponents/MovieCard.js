import React from "react";

const MovieCard = ({ image }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__image">
        <img src={image} />
      </div>
      <div className="movie-card__description">
        <h3>Titre</h3>
        <p>Description</p>
      </div>
    </div>
  );
};

export default MovieCard;
