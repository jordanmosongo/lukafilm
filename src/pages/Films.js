import React from "react";
import Banner from "../shared/Banner";
import "../scss/films.scss";
import Title from "../shared/Title";
import Container from "../shared/Container";
import Paginate from "../shared/Paginate";
import AllApisPath from "../Apis/AllApisPath";
import Action from "../shared/Action";

const Films = () => {
  const { discover, trending } = AllApisPath;
  return (
    <div>
      <Banner
        firstText="A la recherche "
        secondText="des films "
        url={trending("movie")}
      />
      <div className="films">
        <Action topic="movie" />
        <div className="container">
          <Title titre="Tous les films" />
          <Container url={discover("movie", 1)} />
          <Paginate />
        </div>
      </div>
    </div>
  );
};

export default Films;
