import React from "react";
import Title from "../shared/Title";
import Card from "../shared/Card";
import { useState, useEffect } from "react";
import "../scss/latest.scss";

const Photo = ({ poster_path }) => {
  return (
    <div className="photo">
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
    </div>
  );
};

const Videos = () => {
  const api =
    "https://api.themoviedb.org/3/discover/movie?api_key=c802217348f2b02deda6d2bd90464776&page=80";
  const photoUrl =
    "https://api.themoviedb.org/3/person/popular?api_key=c802217348f2b02deda6d2bd90464776&language=en-US&page=1";
  const [movies, setmovies] = useState([]);
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        if (results) {
          setmovies([...results]);
        }
      })
      .catch((error) => console.log(error));
  }, [api]);
  useEffect(() => {
    fetch(photoUrl)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        const photos = results.map((element) => {
          return element.profile_path;
        });
        setphotos([...photos]);
      })
      .catch((err) => console.log(err));
  }, [photoUrl]);
  return (
    <div className="latest-container">
      <div className="latest">
        <div className="movie-card-container">
          <div className="movie-card-container__left">
            <div className="latest-header">
              <Title titre="Videos and photos" />
            </div>
            {movies.slice(18, 19).map((movie) => {
              return <Card movie={movie} isLatest={false} />;
            })}
          </div>
          <div className="movie-card-container__right">
            {photos.slice(0, 6).map((photo) => {
              return <Photo poster_path={photo} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
