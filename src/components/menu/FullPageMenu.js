import React from "react";
import MenuLink from "./MenuLink";
import Close from "@material-ui/icons/Close";

import "./fullPageMenu.scss";

const FullPageMenu = (props) => {
  const changeMenuState = () => {
    props.changeMenuStateFromChild();
  };
  const Link = ({ contentText, path }) => {
    return (
      <li onClick={changeMenuState}>
        <MenuLink contentText={contentText} path={path} />
      </li>
    );
  };
  return (
    <div className="banner__menu">
      <Close className="close" onClick={changeMenuState} />
      <ul className="banner__menu__items">
        <Link contentText="acceuil" path="/" />
        <Link contentText="Films" path="/films" />
        <Link contentText="Séries" path="/series" />
        <Link contentText="Acteurs" path="/acteurs" />
      </ul>
    </div>
  );
};

export default FullPageMenu;
