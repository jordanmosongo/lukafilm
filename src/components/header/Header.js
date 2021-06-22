import React, { Fragment, useState } from "react";
import "./header.scss";
import Menu from "@material-ui/icons/Menu";
import FullPageMenu from "../../components/menu/FullPageMenu";
import SearchBox from "../search/SearchBox";
import useScroll from "../../Hooks/useScroll";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Fragment>
      <div
        className={`${
          useScroll() || window.location.pathname !== "/"
            ? "header add-black"
            : "header"
        }`}
      >
        <a className="logo" href="/">
          Luka<span>film</span>
        </a>
        <div className="header-container">
          <SearchBox />
          <Menu className="menu" onClick={() => setMenu(!menu)} />
        </div>
      </div>
      {menu && <FullPageMenu changeMenuStateFromChild={() => setMenu(!menu)} />}
    </Fragment>
  );
};

export default Header;
