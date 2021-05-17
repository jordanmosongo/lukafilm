import React from "react";

const Title = (props) => {
  const { titre } = props;
  return <h2 className="tendance__titre">{titre}</h2>;
};

export default Title;
