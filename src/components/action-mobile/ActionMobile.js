import React, { useState, useEffect } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import AllApisPath from "../../Apis/AllApisPath";
import "./action-mobile.scss";

const ActionMobile = (props) => {
  const [querySelect, setQuerySelect] = useState(false);
  const [genders, setGenders] = useState([]);
  const { gender } = AllApisPath;
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
    <div className="action-mobile">
      <button onClick={() => setQuerySelect(!querySelect)}>
        <span className="selection-icon">
          {querySelect ? <ExpandLess /> : <ExpandMore />}
        </span>
      </button>
      {querySelect && (
        <ul className="select-categorie" data-aos="fade-left">
          {genders.map(({ name, id }) => {
            return (
              <li
                onClick={() => {
                  props.manipulate(name, id);
                  setQuerySelect(false);
                }}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ActionMobile;
