import React from "react";
import Card from "../../components/card/Card";
import useMovieOrSerie from "../../Hooks/useMovieOrSerie";
//import Loader from "./Loader";
import "./Container.scss";

const Container = ({ url, limit }) => {
  const { moviesOrSeries } = useMovieOrSerie(url);
  return (
    <div className="movie-card-container">
      {limit === null || undefined
        ? moviesOrSeries.map((movie) => {
            return <Card movie={movie} />;
          })
        : moviesOrSeries.slice(0, limit).map((movie) => {
            return <Card movie={movie} />;
          })}
    </div>
  );
};

export default Container;
