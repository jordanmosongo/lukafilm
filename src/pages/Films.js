import React, { useState } from "react";
import Banner from "../shared/Banner";
import "../scss/films.scss";
import Title from "../shared/Title";
import Container from "../shared/Container";
import Paginate from "../shared/Paginate";
import AllApisPath from "../Apis/AllApisPath";
import Action from "../shared/Action";
import paginate from "../util/paginate";

const Films = () => {
  const { discover, trending } = AllApisPath;
  const [page, setPage] = useState(1);
  const [genderId, setGenderId] = useState(null);
  const [title, setTitle] = useState("Tous les films");
  return (
    <div>
      <Banner
        firstText="A la recherche "
        secondText="des films "
        url={trending("movie")}
      />
      <div className="films">
        <Action
          topic="movie"
          loadInitialData={() => {
            setGenderId(null);
            setTitle("Tous les films");
          }}
          filterByGender={(id, name) => {
            setGenderId(id);
            setTitle(name);
          }}
        />
        <div className="container">
          <Title titre={title} />
          <Container url={discover("movie", page, genderId)} />
          <Paginate
            count={500}
            paginateFromChild={(pageValue) =>
              setPage(paginate(pageValue, page))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Films;
