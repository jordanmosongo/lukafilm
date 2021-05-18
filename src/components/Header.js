import React from "react";
import "../scss/header.scss";
import Menu from "@material-ui/icons/Menu";
import FullPageMenu from "../shared/FullPageMenu";
import { useState } from "react";
import SearchBox from "../shared/SearchBox";

const Header = () => {
  const [menuState, setmenuState] = useState(false);
  const [addBackground, setaddBackground] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const showOrHideMenu = () => {
    setmenuState(!menuState);
  };
  const manageBackground = (point) => {
    if (point < 120) {
      setaddBackground(false);
    } else if (point > 120) {
      setaddBackground(true);
    }
  };
  const manageSearch = (point) => {
    if (point < 490) {
      setshowSearch(false);
    } else if (point > 490) {
      setshowSearch(true);
    }
  };
  window.onscroll = () => {
    let scrollPoint =
      document.body.scrollTop || document.documentElement.scrollTop;
    manageBackground(scrollPoint);
    manageSearch(scrollPoint);
  };

  return (
    <>
      <div className={addBackground ? "header add-black" : "header"}>
        <a className="logo">
          Luka<span>film</span>{" "}
        </a>
        <div className="header-container">
          {" "}
          <SearchBox />
          <Menu className="menu" onClick={showOrHideMenu} />
        </div>
      </div>
      {menuState ? (
        <FullPageMenu changeMenuStateFromChild={showOrHideMenu} />
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
