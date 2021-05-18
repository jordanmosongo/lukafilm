import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import Card from "../shared/Card";
import { useEffect, useState } from "react";
import "../scss/Container.scss";

const Container = ({ url }) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        if (results) {
          setmovies([...results]);
        }
      })
      .catch((error) => console.log(error));
  }, [url]);
  return (
    <div className="movie-card-container">
      {movies.length == 0
        ? ""
        : movies.map((movie) => {
            return <Card movie={movie} />;
          })}
    </div>
  );
};

export default Container;
