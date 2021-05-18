import React from "react";
import SearchSharp from "@material-ui/icons/SearchSharp";
import SearchModal from "./SearchModal";
import { useState } from "react";

const SearchBox = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const closeModal = () => {
    setUserQuery((userQuery) => (userQuery = ""));
    setIsModalVisible(!isModalVisible);
  };

  const handleSearch = (event) => {
    let value = event.target.value;
    if (value.length >= 3) {
      setUserQuery(value);
      showModal();
    }
  };
  return (
    <div className="banner__input">
      <input
        type="text"
        placeholder="Tapez votre recherche"
        onChange={handleSearch}
      />
      <button>
        <SearchSharp className="searchIcon" />
      </button>
      <SearchModal
        modalState={isModalVisible}
        entry={userQuery}
        closeModalFromChild={closeModal}
      />
    </div>
  );
};

export default SearchBox;
