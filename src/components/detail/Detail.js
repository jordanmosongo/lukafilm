import React from "react";
import { useHistory } from "react-router-dom";
import "./detail.scss";

const Detail = (props) => {
  const { id } = props;
  const history = useHistory();
  const handleDetail = () => {
    const currentUrl = window.location.pathname;
    if (currentUrl === "/") {
      props.handleDetailFromChild();
    } else {
      history.push(`${currentUrl}/${id}`);
    }
  };
  return (
    <div className="movie-card__effect">
      <div className="movie-card__over-effect"></div>
      <div className="movie-card__over-content">
        <button data-aos="fade-right" onClick={handleDetail}>
          voir détail
        </button>
        {window.location.pathname === "/" && (
          <button data-aos="fade-left">en voir plus</button>
        )}
      </div>
    </div>
  );
};
export default Detail;
