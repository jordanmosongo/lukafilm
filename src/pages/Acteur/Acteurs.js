import React from "react";
import { useState } from "react";
import AllApisPath from "../../Apis/AllApisPath";
import Container from "../../components/container/Container";
import Paginate from "../../components/paginate/Paginate";
import Title from "../../components/title/Title";
import paginate from "../../util/paginate";
import "./acteur.scss";

const Acteurs = () => {
  const { popular } = AllApisPath;
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="actors">
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
