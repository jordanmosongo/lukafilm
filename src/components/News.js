import React from "react";
import { useEffect, useState } from "react";

const Card = ({ image, title }) => {
  return (
    <div className="news__movie">
      <div className="news__movie__image">
        <img src={`https://image.tmdb.org/t/p/w300${image}`} />
      </div>
      <div className="news__movie__text">
        <p>{title}</p>
      </div>
    </div>
  );
};
const api =
  "https://api.themoviedb.org/3/discover/movie?api_key=c802217348f2b02deda6d2bd90464776&page=50";
const News = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then(({ results }) => {
        console.log(results);
        setmovies([...results]);
      });
  }, [api]);
  return (
    <div className="news">
      <div className="news__container">
        <div className="news__title">
          <h2>Dernières nouvelles</h2>
        </div>
        <div className="news__content">
          <div className="news__content__left">
            {movies.slice(0, 3).map((movie) => {
              return <Card title={movie.title} image={movie.backdrop_path} />;
            })}
          </div>
          <div className="news__content__middle">
            {movies.slice(10, 11).map((movie) => {
              return <Card title={movie.title} image={movie.backdrop_path} />;
            })}
          </div>
          <div className="news__content__right">
            {movies.slice(3, 6).map((movie) => {
              return <Card title={movie.title} image={movie.backdrop_path} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
