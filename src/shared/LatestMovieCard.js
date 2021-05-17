import React from "react";
const linkImage = "https://image.tmdb.org/t/p/w300";
const LatestMovieCard = ({ movie }) => {
  const { poster_path, title, overview } = movie;

  return (
    <div className="latest-movie-card">
      <div className="latest-movie-card__image">
        <img src={linkImage + poster_path} />
      </div>
      <div className="latest-movie-card__description">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default LatestMovieCard;
