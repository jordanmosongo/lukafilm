import React from "react";
import Title from "./subcomponents/Title";
import "../scss/latest.scss";
import MovieCard from "./subcomponents/MovieCard";
const Latest = () => {
  return (
    <div className="latest">
      <Title titre="Derniers films" />
      <div className="movie-card-container"></div>
    </div>
  );
};

export default Latest;
