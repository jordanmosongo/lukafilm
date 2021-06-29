import React from "react";
import "./banner.scss";
import { useState } from "react";

const Banner = () => {
  const arrayOfText = [
    "Une application qui vous falicite la recherche des films, séries et acteurs",
    "Son champs est restreint à des informations y relatives qu'elle vous fournit",
  ];
  const [text, settext] = useState(arrayOfText[0]);
  const [changeState, setchangeState] = useState(false);
  (() => {
    if (changeState) {
      setTimeout(() => {
        settext(arrayOfText[1]);
        setchangeState(!changeState);
      }, 7000);
    } else {
      setTimeout(() => {
        settext(arrayOfText[0]);
        setchangeState(!changeState);
      }, 7000);
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
