import React from "react";
import InputBanner from "../InputBanner";
import SearchSharp from "@material-ui/icons/SearchSharp";

const SearchBox = () => {
  return (
    <div className="banner__input">
      <InputBanner />
      <button>
        <SearchSharp className="searchIcon" />
      </button>
    </div>
  );
};

export default SearchBox;
