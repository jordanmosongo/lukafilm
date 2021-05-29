import React, { useState } from "react";
import Banner from "../shared/Banner";
import Title from "../shared/Title";
import Container from "../shared/Container";
import Paginate from "../shared/Paginate";
import AllApisPath from "../Apis/AllApisPath";
import Action from "../shared/Action";
import "../scss/films.scss";
import paginate from "../util/paginate";

const Series = () => {
  const { discover, trending } = AllApisPath;
  const [page, setPage] = useState(1);
  return (
    <div>
      <Banner
        firstText="A la recherche "
        secondText="des séries "
        url={trending("tv")}
      />
      <div className="films">
        <div className="action">
          <Action topic="tv" />
        </div>
        <div className="container">
          <Title titre="Toutes les séries" />
          <Container url={discover("tv", page)} />
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

export default Series;
