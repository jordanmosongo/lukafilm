import React from "react";
import InputBanner from "../InputBanner";
import SearchSharp from "@material-ui/icons/SearchSharp";
import SearchModal from "./SearchModal";
import { useState } from "react";

const SearchBox = () => {
  const [stateOfModal, setstateOfModal] = useState(false);
  const [typedValue, settypedValue] = useState("");
  const showModal = () => {
    setstateOfModal(!stateOfModal);
  };
  const closeModal = () => {
    settypedValue((typedValue) => (typedValue = ""));
    setstateOfModal(!stateOfModal);
  };

  const textWritting = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (value.length >= 3) {
      settypedValue(value);
      showModal();
    }
  };
  console.log(typedValue);
  return (
    <div className="banner__input">
      <input
        type="text"
        placeholder="Tapez votre recherche"
        onChange={textWritting}
      />
      <button>
        <SearchSharp className="searchIcon" />
      </button>
      <SearchModal
        modalState={stateOfModal}
        entry={typedValue}
        closeModalFromChild={closeModal}
      />
    </div>
  );
};

export default SearchBox;
