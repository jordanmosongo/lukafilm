import React, { Fragment, useState } from "react";
import "../scss/header.scss";
import Menu from "@material-ui/icons/Menu";
import FullPageMenu from "../shared/FullPageMenu";
import SearchBox from "../shared/SearchBox";
import useScroll from "../Hooks/useScroll";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Fragment>
      <div className={`${useScroll() ? "header add-black" : "header"}`}>
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
