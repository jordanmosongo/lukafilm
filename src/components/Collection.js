import React from "react";
import "../scss/collection.scss";
import movieOne from "../images/movieOne.jpeg";

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__container">
        <div className="collection__container__text">
          <p>
            <span>Dans cette collection,</span> <br /> Retrouvez des films et
            series ainsi que toutes les informations y relatives
          </p>
        </div>
        <div className="collection__container__image">
          <img src={movieOne} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
