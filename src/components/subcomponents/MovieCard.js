import { Favorite, People, Visibility } from "@material-ui/icons";
import React from "react";
const linkImage = "https://image.tmdb.org/t/p/w300";
const MovieCard = ({ movie }) => {
  //const { poster_path, title, isLatest, overview } = movie;
  const showDetail = (event) => {
    event.preventDefault();
  };
  return (
    <div className="movie-card" onMouseEnter={showDetail}>
      <div className="movie-card__image">
        {/* <img src={linkImage + poster_path} /> */}
      </div>
      <div className="movie-card__description">
        {/* <span>{isLatest ? "Titre" : ""}</span> */}
        <h3>Titre</h3>
        {/* <span>{isLatest ? "Description" : ""}</span> */}
        {/* <p>{isLatest ? overview : ""}</p> */}
        <p>
          "Cherry drifts from college dropout to army medic in Iraq - anchored
          only by his true love, Emily. But after returning from the war with
        </p>
      </div>
      <div className="movie-card__detail">
        <Visibility className="visibility" />
        <span>490</span>
        <Favorite className="favorite" />
        <span>250</span>
      </div>
    </div>
  );
};

export default MovieCard;
