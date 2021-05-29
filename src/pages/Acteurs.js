import React from "react";
import { useState } from "react";
import AllApisPath from "../Apis/AllApisPath";
import Banner from "../shared/Banner";
import Container from "../shared/Container";
import Paginate from "../shared/Paginate";
import Title from "../shared/Title";
import paginate from "../util/paginate";

const Acteurs = () => {
  const { popular } = AllApisPath;
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="films">
        <div className="container">
          <Title titre="Tous les acteurs" />
          <Container url={popular("person", page)} />
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

export default Acteurs;
