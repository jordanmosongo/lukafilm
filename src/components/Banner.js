import React from "react";
import "../scss/banner.scss";
import SearchBox from "../shared/SearchBox";
import { useState, useEffect } from "react";

const Banner = () => {
  const arrayOfText = [
    "pour une recherche optimale des films et séries",
    "retrouvez toutes les informations y relatives",
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
        <h1>
          Luka<span>film</span>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Banner;
