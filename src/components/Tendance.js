import React from "react";
import "../scss/tendance.scss";
import Button from "./subcomponents/Button";
import MovieCard from "./subcomponents/MovieCard";
import Title from "./subcomponents/Title";
import filmOne from "../images/filmOne.jpg";

const Tendance = () => {
  return (
    <div className="tendance">
      <Title titre="Les plus populaires" />
      <div className="groupButton">
        <a>Tous</a>
        <Button content="Films" />
        <Button content="Séries" />
      </div>
      <div className="movie-card-container">
        <MovieCard src={filmOne} />
        <MovieCard src={filmOne} />
        <MovieCard src={filmOne} />
        <MovieCard src={filmOne} />
        <MovieCard src={filmOne} />
        <MovieCard src={filmOne} />
        <MovieCard src={filmOne} />
        <MovieCard src={filmOne} />
      </div>
      <div className="groupPageButton">
        <button>Tous</button>
        <button>Tous</button>
      </div>
    </div>
  );
};

export default Tendance;
