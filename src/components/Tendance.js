import React from "react";
import "../scss/tendance.scss";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Card from "../shared/Card";
import Title from "../shared/Title";
import { useEffect, useState } from "react";
import Loader from "../shared/Loader";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Tendance = () => {
  const classes = useStyles();
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [isQueryToggleSelected, setIsQueryToggleSelected] = useState(false);
  const [isItemToggleSelected, setIsItemToggleSelected] = useState(false);
  const [topic, setTopic] = useState("movie");
  const dataMovie = `https://api.themoviedb.org/3/discover/${topic}?api_key=c802217348f2b02deda6d2bd90464776&page=2`;
  useEffect(() => {
    fetch(dataMovie)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        if (results) {
          setmovies([...results]);
          setloading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [dataMovie]);
  const handleQuerySelectToggle = () => {
    setIsQueryToggleSelected(!isQueryToggleSelected);
  };

  const handleClickFilmSelect = () => {
    setIsItemToggleSelected(false);
    setIsQueryToggleSelected(!isQueryToggleSelected);
    setTopic("movie");
  };
  const handleClickSerialSelect = () => {
    setIsItemToggleSelected(true);
    setIsQueryToggleSelected(!isQueryToggleSelected);
    setTopic("tv");
  };

  return loading ? (
    <Loader />
  ) : (
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
          {isQueryToggleSelected ? (
            <ul className="select-categorie" data-aos="zoom-in">
              <li className="active" onClick={handleClickFilmSelect}>
                Films
              </li>
              <li onClick={handleClickSerialSelect}>Séries</li>
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className="movie-card-container">
          {movies.length == 0
            ? ""
            : movies.map((movie) => {
                return <Card movie={movie} />;
              })}
        </div>
        <div className="groupPageButton">
          <div className={classes.root}>
            <Pagination count={500} variant="outlined" shape="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tendance;
