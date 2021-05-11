import React from "react";
import Title from "./subcomponents/Title";
import "../scss/latest.scss";
import MovieCard from "./subcomponents/MovieCard";
import LatestMovieCard from "./subcomponents/LatestMovieCard";
import { useState, useEffect } from "react";

const Videos = () => {
  const api =
    "https://api.themoviedb.org/3/discover/movie?api_key=c802217348f2b02deda6d2bd90464776&page=80";
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        if (results) {
          setmovies([...results]);
        }
      })
      .catch((error) => console.log(error));
  }, [api]);
  return (
    <div className="latest-container">
      <div className="latest">
        <div className="movie-card-container">
          <div className="movie-card-container__left">
            <div className="latest-header">
              <Title titre="Videos and photos" />
            </div>
            {/* <MovieCard movie={movies[18]} isLatest={true} /> */}
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
