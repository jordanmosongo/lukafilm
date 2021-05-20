import React from "react";
import "../scss/banner-shared.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useControlled } from "@material-ui/core";
import { useState, useEffect } from "react";
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
      <img src={`${linkImage}${image}`} />
    </div>
  );
};
const movies = [
  "/fPGeS6jgdLovQAKunNHX8l0avCy.jpg",
  "/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
  "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
];

const Banner = (props) => {
  const { firstText, secondText, thirdText, url } = props;
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        if (results) {
          setImages([...results]);
        }
      })
      .catch((error) => console.log(error));
  }, [useControlled]);
  return (
    <div className="banner-shared">
      <Slider {...settings}>
        {images.map((image) => {
          return <BannerElement image={image.backdrop_path} />;
        })}
      </Slider>
      <div className="banner-shared__overlay"></div>
      <div className="banner-shared__text">
        <p>
          <span>{firstText}</span>
          <span className="second-text">{secondText}</span>
        </p>
        <p className="description">{thirdText}</p>
      </div>
    </div>
  );
};

export default Banner;
