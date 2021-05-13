import React from "react";
import "../scss/collection.scss";
import { useState, useEffect } from "react";

const topMovie = ({ poster_path }) => {
  return (
    <div className="card-image">
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
    </div>
  );
};
const api =
  "https://api.themoviedb.org/3/discover/movie?api_key=c802217348f2b02deda6d2bd90464776&page=2";
const Collection = () => {
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
    <div className="collection">
      <div className="collection__container">
        <h2>Top movies in theatres</h2>
        <div className="collection__container__image">
          {movies.slice(5, 10).map((movie) => {
            return topMovie(movie);
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
