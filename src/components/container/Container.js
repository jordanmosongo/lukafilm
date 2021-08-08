import React from "react";
import Card from "../../components/card/Card";
import useMovieOrSerie from "../../Hooks/useMovieOrSerie";
import Loader from "../loader/Loader";
import "./Container.scss";

const Container = ({ url, limit, detailModal, topic, isActor }) => {
  const { moviesOrSeries, loading } = useMovieOrSerie(url);
  if (loading) return <Loader />;
  return (
    <div className="movie-card-container">
      {limit === null || undefined
        ? moviesOrSeries.map((movie) => {
            return (
              <Card
                movie={movie}
                detailModal={detailModal}
                topic={topic}
                isActor={isActor}
              />
            );
          })
        : moviesOrSeries.slice(0, limit).map((movie) => {
            return (
              <Card
                movie={movie}
                detailInModal={detailModal}
                topic={topic}
                isActor={isActor}
              />
            );
          })}
    </div>
  );
};

export default Container;
