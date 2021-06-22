import React from "react";
import { useEffect, useState } from "react";
import AllApisPath from "../../Apis/AllApisPath";
import "./action.scss";

const Action = (props) => {
  const { gender } = AllApisPath;
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    fetch(gender(props.topic))
      .then((data) => {
        return data.json();
      })
      .then(({ genres }) => {
        setGenders([...genres]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="action">
      <button onClick={() => props.loadInitialData()}>Tous</button>
      {genders.map(({ name, id }) => {
        return (
          <button onClick={() => props.filterByGender(id, name)}>{name}</button>
        );
      })}
    </div>
  );
};

export default Action;
