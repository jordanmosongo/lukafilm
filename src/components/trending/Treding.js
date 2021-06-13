import React from "react";
import "./trending.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlowMotionVideo } from "@material-ui/icons";
import useMovieOrSerie from "../../Hooks/useMovieOrSerie";
import AllApisPath from "../../Apis/AllApisPath";

const CardSlick = ({ movie }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-image">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="card"
          />
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
  autoplay: true,
};
const Trending = ({ topic }) => {
  console.log(topic);
  const { trending } = AllApisPath;
  const { moviesOrSeries, loading } = useMovieOrSerie(trending(topic));

  return (
    <div className="collection">
      <div className="collection__container">
        <h2>Tendance du moment</h2>
        <div className="collection__container__image">
          <Slider {...settings}>
            {moviesOrSeries.map((movie) => {
              return <CardSlick movie={movie} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trending;
