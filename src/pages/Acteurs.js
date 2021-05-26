import React from "react";
import AllApisPath from "../Apis/AllApisPath";
import Banner from "../shared/Banner";
import Container from "../shared/Container";
import Paginate from "../shared/Paginate";
import Title from "../shared/Title";

const Acteurs = () => {
  const { popular } = AllApisPath;
  return (
    <div>
      <div className="films">
        <div className="container">
          <Title titre="Tous les acteurs" />
          <Container url={popular("person", 1)} />
          <Paginate />
        </div>
      </div>
    </div>
  );
};

export default Acteurs;
