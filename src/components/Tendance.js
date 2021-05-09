import React from "react";
import "../scss/tendance.scss";
import Button from "./subcomponents/Button";
import MovieCard from "./subcomponents/MovieCard";
import Title from "./subcomponents/Title";
import filmOne from "../images/filmOne.jpg";
import { useEffect, useState } from "react";
import Loader from "./subcomponents/Loader";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const dataMovie =
  "https://api.themoviedb.org/3/discover/movie?api_key=c802217348f2b02deda6d2bd90464776&page=2";

const Tendance = () => {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);
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

  return loading ? (
    <Loader />
  ) : (
    <div className="tendance">
      <div className="tendance__container">
        <div className="groupButton">
          <a>Now playing</a>
          <Button content="Opening this week" />
          <Button content="Coming soon" />
        </div>
        <div className="movie-card-container">
          {/* {movies.length == 0
            ? ""
            : movies.slice(0, 4).map((movie) => {
                return <MovieCard movie={movie} />;
              })} */}
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <div className="groupPageButton">
          <button>
            <ArrowBack />
          </button>
          <button>
            <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tendance;
