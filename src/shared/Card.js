import { Favorite, Visibility } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "../scss/card.scss";
import { useHistory } from "react-router-dom";

const linkImage = "https://image.tmdb.org/t/p/w300";

const Card = ({ movie }) => {
  const history = useHistory();

  const { poster_path, title, id } = movie;
  const [detail, setdetail] = useState(false);
  const showDetail = (event) => {
    event.preventDefault();
    let strigger = event.target;
    let parent = strigger.parentNode;
    if (
      parent.classList.contains("movie-card__image") ||
      parent.classList.contains("movie-card__description") ||
      parent.classList.contains("movie-card__detail")
    ) {
      parent.parentNode.classList.add("movie-card__effect");
    } else {
      strigger.parentNode.classList.add("movie-card__effect");

      if (strigger.parentNode.classList.contains("movie-card")) setdetail(true);
    }
  };
  const hideDetail = (event) => {
    event.preventDefault();
    let strigger = event.target;
    strigger.parentNode.classList.remove("movie-card__effect");
    setdetail(false);
  };
  const handleDetail = () => {
    history.push(`${window.location.pathname}/${id}`);
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={showDetail}
      onMouseLeave={hideDetail}
    >
      <div className="movie-card__image">
        <img src={linkImage + (poster_path || movie.profile_path)} alt="" />
      </div>
      <div className="movie-card__description">
        <h3>{title}</h3>
        <div className="movie-card__detail">
          <Visibility className="visibility" />
          <span>490</span>
          <Favorite className="favorite" />
          <span>250</span>
        </div>
      </div>

      {!detail ? (
        ""
      ) : (
        <>
          <div className="movie-card__over-effect"></div>
          <div className="movie-card__over-content">
            <button data-aos="fade-left" onClick={handleDetail}>
              View detail
            </button>
            <button data-aos="fade-right">View detail</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
