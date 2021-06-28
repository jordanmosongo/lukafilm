import React, { useState, useReducer, createContext } from "react";
import Banner from "../../components/banner/Banner";
import Popularity from "../../components/popularity/Popularity";
import Trending from "../../components/trending/Treding";
import Title from "../../components/title/Title";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import "./home.scss";

const reducer = (state, action) => {
  switch (action) {
    case "Séries":
      state = "tv";
      break;
    default:
      state = "movie";
      break;
  }
  return state;
};
export const topicContext = createContext();

const Home = () => {
  const [itemSelected, setItemSelected] = useState(false);
  const [querySelect, setQuerySelect] = useState(false);
  const [topic, dispatch] = useReducer(reducer, "movie");

  const handleClickSelect = (event) => {
    setQuerySelect(!querySelect);
    setItemSelected(!itemSelected);
    const item = event.target;
    dispatch(item.textContent);
  };
  return (
    <div className="home">
      <Banner />
      <div className="tendance__container__titre">
        <Title
          titre={itemSelected ? "Séries populaires" : "Films populaires"}
        />
        <button onClick={() => setQuerySelect(!querySelect)}>
          <span className="selection-title">
            {itemSelected ? "Séries" : "Films"}
          </span>
          <span className="selection-icon">
            {querySelect ? <ExpandLess /> : <ExpandMore />}
          </span>
        </button>
        {querySelect && (
          <ul className="select-categorie" data-aos="flip-left">
            <li onClick={handleClickSelect}>Films</li>
            <li onClick={handleClickSelect}>Séries</li>
          </ul>
        )}
      </div>
      <topicContext.Provider value={topic}>
        <Popularity topic={topic} />
      </topicContext.Provider>
      <Trending topic={topic} />
    </div>
  );
};

export default Home;
