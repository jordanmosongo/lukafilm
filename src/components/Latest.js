import React from "react";
import Title from "./subcomponents/Title";
import "../scss/latest.scss";
import MovieCard from "./subcomponents/MovieCard";
const Latest = () => {
  return (
    <div className="latest-container">
      <div className="latest">
        <Title titre="Derniers films" />
        <div className="movie-card-container">
          <div className="movie-card-container__left">
            <MovieCard
              movie={{
                poster_path: "/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
                title: "super titre",
              }}
            />
          </div>
          <div className="movie-card-container__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
