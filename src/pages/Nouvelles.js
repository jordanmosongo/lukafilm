import React from "react";
import MovieCard from "../shared/MovieCard";
import Title from "../shared/Title";
import "../scss/nouvelles.scss";

const Nouvelles = () => {
  return (
    <div className="news">
      <Title titre="Nouvelles" />
      <div className="nouvelle-container">
        <MovieCard />
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

export default Nouvelles;
