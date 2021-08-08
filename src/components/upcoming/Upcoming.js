import React from "react";
import "./upcoming.scss";
import AllApisPath from "../../Apis/AllApisPath";
import Container from "../../components/container/Container";
import Title from "../title/Title";

const Upcoming = ({ topic }) => {
  const { upcoming } = AllApisPath;
  return (
    <div className="tendance">
      <Title titre={topic === "movie" ? "Films à venir" : "A l'antenne"} />
      <div className="tendance__container">
        <Container url={upcoming(topic)} isActor={false} />
      </div>
    </div>
  );
};

export default Upcoming;
