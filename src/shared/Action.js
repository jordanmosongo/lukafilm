import React from "react";
import { useEffect, useState } from "react";
import Button from "../shared/Button";
import useMovieOrSerie from "../Hooks/useMovieOrSerie";
import AllApisPath from "../Apis/AllApisPath";

const Action = ({ topic }) => {
  const { gender } = AllApisPath;
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    fetch(gender(topic))
      .then((data) => {
        return data.json();
      })
      .then(({ genres }) => {
        console.log(genres);
        setGenders([...genres]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="action">
      {genders.map(({ name }) => {
        return <Button content={name} />;
      })}
    </div>
  );
};

export default Action;
