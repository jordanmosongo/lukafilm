import React from "react";
import Banner from "../shared/Banner";
import "../scss/films.scss";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import Title from "../shared/Title";
import Container from "../shared/Container";
import Paginate from "../shared/Paginate";
const dataMovie = `https://api.themoviedb.org/3/discover/movie?api_key=c802217348f2b02deda6d2bd90464776&page=2`;
const Films = () => {
  const [genders, setGenders] = useState([]);

  const apiGender = `https://api.themoviedb.org/3/genre/movie/list?api_key=c802217348f2b02deda6d2bd90464776&language=FR`;
  const tendanceApi = `https://api.themoviedb.org/3/trending/movie/week?api_key=c802217348f2b02deda6d2bd90464776`;
  useEffect(() => {
    fetch(apiGender)
      .then((data) => {
        return data.json();
      })
      .then(({ genres }) => {
        console.log(genres);
        setGenders([...genres]);
      })
      .catch((err) => console.log(err));
  }, [apiGender]);
  return (
    <div>
      <Banner
        firstText="A la recherche "
        secondText="des films "
        url={tendanceApi}
      />
      <div className="films">
        <div className="action">
          {genders.map(({ name }) => {
            return <Button content={name} />;
          })}
        </div>
        <div className="container">
          <Title titre="Tous les films" />
          <Container url={dataMovie} />
          <Paginate />
        </div>
      </div>
    </div>
  );
};

export default Films;
