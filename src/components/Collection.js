import React from "react";
import "../scss/collection.scss";
import movieOne from "../images/filmFour.jpg";
import movieTwo from "../images/filmOne.jpg";
import movieThree from "../images/filmThree.jpg";
import movieSecond from "../images/filmTwo.jpg";
import Title from "./subcomponents/Title";

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__container">
        <h2>Top movies in theatres</h2>
        <div className="collection__container__image">
          <div className="card-image">
            <img src={movieOne} />
          </div>
          <div className="card-image">
            <img src={movieTwo} />
          </div>
          <div className="card-image">
            <img src={movieThree} />
          </div>
          <div className="card-image">
            <img src={movieSecond} />
          </div>
          <div className="card-image">
            <img src={movieOne} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
