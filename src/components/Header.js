import React from "react";
import "../scss/header.scss";
import Menu from "@material-ui/icons/Menu";
import FullPageMenu from "./FullPageMenu";
import { useState } from "react";
import SearchBox from "./subcomponents/SearchBox";

const Header = (props) => {
  const [menuState, setmenuState] = useState(false);
  const [addBackground, setaddBackground] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const showOrHideMenu = () => {
    setmenuState(!menuState);
  };
  return (
    <>
      <div className={addBackground ? "header add-black" : "header"}>
        <a className="logo">Lukafilm</a>
        {showSearch ? <SearchBox /> : ""}
        <Menu className="menu" onClick={showOrHideMenu} />
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
