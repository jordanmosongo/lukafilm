import React from "react";
import "../scss/banner.scss";
import FullPageMenu from "./FullPageMenu";
import InputBanner from "./InputBanner";
import { useState, useEffect } from "react";
import SearchSharp from "@material-ui/icons/SearchSharp";

const Banner = (props) => {
  let { status } = props;
  const [menuState, setmenuState] = useState(status);
  const hideMenu = () => {
    props.changeMenuState();
  };
  // useEffect(() => {
  //   setmenuState(status);
  // });
  //console.log(menuState);
  return (
    <div className="banner">
      <div className="banner__blur"></div>
      <div className="banner__blur__content">
        <h1>Lukafilm</h1>
        <h2>A la decouverte des films et séries illimités</h2>
        <div className="banner__input">
          <InputBanner />
          <button>
            <SearchSharp className="searchIcon" />
          </button>
        </div>
      </div>
      {status ? <FullPageMenu changeMenuState={hideMenu} /> : ""}
    </div>
  );
};

export default Banner;
