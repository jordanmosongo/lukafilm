import React from "react";
import "../scss/banner.scss";
import SearchBox from "./subcomponents/SearchBox";
import { useState, useEffect } from "react";

const Banner = () => {
  const arrayOfText = [
    "Discover various and unlimited movies",
    "Enjoy a professional touch",
  ];
  const [text, settext] = useState(arrayOfText[0]);
  const [changeState, setchangeState] = useState(false);
  (() => {
    if (changeState) {
      setTimeout(() => {
        settext(arrayOfText[1]);
        setchangeState(!changeState);
      }, 5000);
    } else {
      setTimeout(() => {
        settext(arrayOfText[0]);
        setchangeState(!changeState);
      }, 5000);
    }
  })();
  return (
    <div className="banner">
      <div className="banner__blur"></div>
      <div className="banner__blur__content">
        <h1>Lukafilm</h1>
        {changeState ? <h2>{text}</h2> : <h2>{text}</h2>}
        <SearchBox />
      </div>
    </div>
  );
};

export default Banner;
