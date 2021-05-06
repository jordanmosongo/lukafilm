import React from "react";
import "../scss/banner.scss";
import SearchBox from "./subcomponents/SearchBox";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__blur"></div>
      <div className="banner__blur__content">
        <h1>Lukafilm</h1>
        <h2>A la decouverte des films et séries illimités</h2>
        <SearchBox />
      </div>
    </div>
  );
};

export default Banner;
