import React from "react";
import MovieCard from "../components/subcomponents/MovieCard";
import Title from "../components/subcomponents/Title";
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
