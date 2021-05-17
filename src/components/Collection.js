import React from "react";
import "../scss/collection.scss";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlowMotionVideo } from "@material-ui/icons";

const CardSlick = ({ movie }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-image">
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
        </div>
        <ul className="social-icons">
          <li>
            <a>
              <SlowMotionVideo />
            </a>
          </li>
        </ul>
        <div className="details">
          <h3>{movie.title}</h3>
          <p>Une legere description</p>
        </div>
      </div>
    </div>
  );
};
let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: "linear",
};
const api =
  "https://api.themoviedb.org/3/discover/movie?api_key=c802217348f2b02deda6d2bd90464776&page=1";
const tendanceApi = `https://api.themoviedb.org/3/trending/movie/week?api_key=c802217348f2b02deda6d2bd90464776`;
const Collection = () => {
  const [movies, setmovies] = useState([]);
  const [tendances, setTendances] = useState([]);
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
  useEffect(() => {
    fetch(tendanceApi)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        if (results) {
          setTendances([...results]);
        }
      })
      .catch((error) => console.log(error));
  }, [tendanceApi]);
  return (
    <div className="collection">
      <div className="collection__container">
        <h2>Tendance du moment</h2>
        <div className="collection__container__image">
          {/* {tendances.slice(0, 4).map((tendance) => {
            return topMovie(tendance);
          })} */}
          <Slider {...settings}>
            {movies.map((movie) => {
              return <CardSlick movie={movie} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Collection;
