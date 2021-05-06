import React from "react";
import InputBanner from "../InputBanner";
import SearchSharp from "@material-ui/icons/SearchSharp";
import SearchModal from "./SearchModal";
import { useState } from "react";

const SearchBox = () => {
  const [stateOfModal, setstateOfModal] = useState(false);
  const showModal = () => {
    setstateOfModal(!stateOfModal);
  };
  return (
    <div className="banner__input">
      <input
        type="text"
        placeholder="Tapez votre recherche"
        onMouseDown={showModal}
      />
      <button>
        <SearchSharp className="searchIcon" />
      </button>
      <SearchModal modalState={stateOfModal} closeModalFromChild={showModal} />
    </div>
  );
};

export default SearchBox;
