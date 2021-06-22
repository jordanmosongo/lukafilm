import React from "react";
import { useHistory } from "react-router-dom";
import "./detail.scss";
const Detail = ({ id }) => {
  const history = useHistory();
  const handleDetail = () => {
    history.push(`${window.location.pathname}/${id}`);
  };
  return (
    <div className="movie-card__effect">
      <div className="movie-card__over-effect"></div>
      <div className="movie-card__over-content">
        <button data-aos="fade-left" onClick={handleDetail}>
          View detail
        </button>
        <button data-aos="fade-right">View detail</button>
      </div>
    </div>
  );
};
export default Detail;
