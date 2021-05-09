import React from "react";
import Title from "./subcomponents/Title";
import "../scss/latest.scss";
import MovieCard from "./subcomponents/MovieCard";
import LatestMovieCard from "./subcomponents/LatestMovieCard";
const Videos = () => {
  return (
    <div className="latest-container">
      <div className="latest">
        <div className="movie-card-container">
          <div className="movie-card-container__left">
            <div className="latest-header">
              <Title titre="Videos and photos" />
            </div>
            <MovieCard
              movie={{
                poster_path: "/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
                title: "super titre",
                overview:
                  "Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
              }}
              isLatest={true}
            />
          </div>
          <div className="movie-card-container__right">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
