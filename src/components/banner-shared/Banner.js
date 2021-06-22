import React from "react";
import "./banner-shared.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMovieOrSerie from "../../Hooks/useMovieOrSerie";

const linkImage = "https://image.tmdb.org/t/p/w500";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "ease-in-out",
  autoplay: true,
};

const BannerElement = ({ image }) => {
  return (
    <div className="banner-image">
      <img src={`${linkImage}${image}`} alt="" />
    </div>
  );
};
const Banner = ({ firstText, secondText, url }) => {
  const { moviesOrSeries } = useMovieOrSerie(url);
  return (
    <div className="banner-shared">
      <Slider {...settings}>
        {moviesOrSeries.map((image) => {
          return (
            <BannerElement image={image.backdrop_path || image.profile_path} />
          );
        })}
      </Slider>
      <div className="banner-shared__overlay"></div>
      <div className="banner-shared__text">
        <p>
          <span>{firstText}</span>
          <span className="second-text">{secondText}</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
