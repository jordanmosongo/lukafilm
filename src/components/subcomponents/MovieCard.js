import React from "react";
const linkImage = "https://image.tmdb.org/t/p/w300";
const MovieCard = ({ movie, isLatest }) => {
  console.log(movie);
  const { poster_path, title, overview } = movie;
  const showDetail = (event) => {
    event.preventDefault();
  };
  return (
    <div className="movie-card" onMouseEnter={showDetail}>
      <div className="movie-card__image">
        <img src={linkImage + poster_path} />
      </div>
      <div className="movie-card__description">
        <span>{isLatest ? "Titre" : ""}</span>
        <h3>{title}</h3>
        <span>{isLatest ? "Description" : ""}</span>
        <p>{isLatest ? overview : ""}</p>
      </div>
      <div className="movie-card__detail"></div>
    </div>
  );
};

export default MovieCard;
