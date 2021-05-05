import React from "react";
import Title from "./subcomponents/Title";
import "../scss/latest.scss";
import MovieCard from "./subcomponents/MovieCard";
const Latest = () => {
  return (
    <div className="latest">
      <Title titre="Derniers films" />
      <div className="movie-card-container">
        <MovieCard className="first-element" />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Latest;
