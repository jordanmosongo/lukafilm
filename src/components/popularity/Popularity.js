import React, { useReducer, useState } from "react";
import "./popularity.scss";
import Title from "../title/Title";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import AllApisPath from "../../Apis/AllApisPath";
import Container from "../../components/container/Container";
import Paginate from "../paginate/Paginate";
import paginate from "../../util/paginate";

const reducer = (state, action) => {
  action === "Séries" ? (state = "tv") : (state = "movie");
  return state;
};

const Popularity = (props) => {
  const [querySelect, setQuerySelect] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [topic, dispatch] = useReducer(reducer, "movie");
  const [page, setPage] = useState(1);
  const { popular } = AllApisPath;

  const handleClickSelect = (event) => {
    setQuerySelect(!querySelect);
    const val = event.target;
    dispatch(val.textContent);
    if (val.textContent === "Séries") {
      setItemSelected(true);
    } else {
      setItemSelected(false);
    }
    props.trendingTopic(topic);
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
              <li onClick={handleClickSelect}>Films</li>
              <li onClick={handleClickSelect}>Séries</li>
            </ul>
          )}
        </div>
        <Container url={popular(topic, page)} />
        <Paginate
          count={500}
          paginateFromChild={(pageValue) => setPage(paginate(pageValue, page))}
        />
      </div>
    </div>
  );
};

export default Popularity;
