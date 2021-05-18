import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ contentText, path }) => {
  return <Link to={path}>{contentText}</Link>;
};

export default MenuLink;
