import React from "react";
import "../scss/header.scss";
import Menu from "@material-ui/icons/Menu";

const Header = (props) => {
  const showMenu = (event) => {
    event.preventDefault();
    props.changeMenuState();
  };
  return (
    <div className="header">
      <a className="logo">Lukafilm</a>
      <Menu className="menu" onClick={showMenu} />
    </div>
  );
};

export default Header;
