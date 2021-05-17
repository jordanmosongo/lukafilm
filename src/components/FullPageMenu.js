import React from "react";
import MenuLink from "./MenuLink";
import Close from "@material-ui/icons/Close";
import "../scss/fullPageMenu.scss";

const FullPageMenu = (props) => {
  const changeMenuState = (event) => {
    event.preventDefault();
    props.changeMenuStateFromChild();
  };
  return (
    <div className="banner__menu">
      <Close className="close" onClick={changeMenuState} />
      <ul className="banner__menu__items">
        <MenuLink contentText="Acceuil" />
        <MenuLink contentText="Films" />
        <MenuLink contentText="Séries" />
        <MenuLink contentText="Acteurs" />
      </ul>
    </div>
  );
};

export default FullPageMenu;
