import React from "react";
import "../scss/tendance.scss";
import Title from "../shared/Title";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import AllApisPath from "../Apis/AllApisPath";
import Container from "../shared/Container";
import Paginate from "../shared/Paginate";

const Tendance = () => {
  const [querySelect, setQuerySelect] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [topic, setTopic] = useState("movie");
  const [page, SetPage] = useState(1);
  const { popular } = AllApisPath;

  const handleClickSelect = () => {
    setItemSelected(!itemSelected);
    setQuerySelect(!querySelect);
    topic === "movie" ? setTopic("tv") : setTopic("movie");
  };
  return (
    <div className="tendance">
      <div className="tendance__container">
        <div className="tendance__container__titre">
          <Title
            titre={itemSelected ? "Séries populaires" : "Films populaires"}
          />
          <button onClick={() => setQuerySelect(!querySelect)}>
            <span>
              {itemSelected ? "Séries" : "Films"}
              {querySelect ? <ExpandLess /> : <ExpandMore />}
            </span>
          </button>
          {querySelect && (
            <ul className="select-categorie" data-aos="zoom-in">
              <li className="active" onClick={handleClickSelect}>
                Films
              </li>
              <li onClick={handleClickSelect}>Séries</li>
            </ul>
          )}
        </div>
        <Container url={popular(topic, page)} />
        <Paginate handlePaginate={(page) => SetPage(page)} />
      </div>
    </div>
  );
};

export default Tendance;
