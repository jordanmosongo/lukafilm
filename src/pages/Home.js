import React, { useState } from "react";
import Banner from "../components/Banner";
import Tendance from "../components/Tendance";
import Collection from "../components/Collection";
import "../scss/news.scss";

const Home = () => {
  const [topic, setTopic] = useState("movie");
  return (
    <div>
      <Banner />
      <Tendance trendingTopic={(topic) => setTopic(topic)} />
      <Collection topic={topic} />
    </div>
  );
};

export default Home;
