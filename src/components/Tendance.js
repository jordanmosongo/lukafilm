import React from "react";
import "../scss/tendance.scss";
import Card from "../shared/Card";
import Title from "../shared/Title";
import { useState } from "react";
import Loader from "../shared/Loader";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import useMovieOrSerie from "../Hooks/useMovieOrSerie";
import AllApisPath from "../Apis/AllApisPath";
import Container from "../shared/Container";

const Tendance = () => {
  const [isQueryToggleSelected, setIsQueryToggleSelected] = useState(false);
  const [isItemToggleSelected, setIsItemToggleSelected] = useState(false);
  const [topic, setTopic] = useState("movie");
  const { popular } = AllApisPath;
  const { moviesOrSeries, loading } = useMovieOrSerie(popular(topic, 2));
  const handleQuerySelectToggle = () => {
    setIsQueryToggleSelected(!isQueryToggleSelected);
  };
  const handleClickSelect = () => {
    setIsItemToggleSelected(!isItemToggleSelected);
    setIsQueryToggleSelected(!isQueryToggleSelected);
    topic === "movie" ? setTopic("tv") : setTopic("movie");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="tendance">
      <div className="tendance__container">
        <div className="tendance__container__titre">
          <Title
            titre={
              isItemToggleSelected ? "Séries populaires" : "Films populaires"
            }
          />
          <button onClick={handleQuerySelectToggle}>
            <span>
              {isItemToggleSelected ? "Séries" : "Films"}
              {isQueryToggleSelected ? <ExpandLess /> : <ExpandMore />}
            </span>
          </button>
          {isQueryToggleSelected && (
            <ul className="select-categorie" data-aos="zoom-in">
              <li className="active" onClick={handleClickSelect}>
                Films
              </li>
              <li onClick={handleClickSelect}>Séries</li>
            </ul>
          )}
        </div>
        {/* <Container url={popular(topic, 1)} /> */}
        <div className="movie-card-container">
          {moviesOrSeries.map((movie) => {
            return <Card movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tendance;
