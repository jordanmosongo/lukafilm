import React from "react";
import Card from "../shared/Card";
import useMovieOrSerie from "../Hooks/useMovieOrSerie";
import "../scss/Container.scss";
import Loader from "./Loader";

const Container = ({ url }) => {
  const { moviesOrSeries } = useMovieOrSerie(url);
  return (
    <div className="movie-card-container">
      {!moviesOrSeries ? (
        <Loader />
      ) : (
        moviesOrSeries.map((movie) => {
          return <Card movie={movie} />;
        })
      )}
    </div>
  );
};

export default Container;
