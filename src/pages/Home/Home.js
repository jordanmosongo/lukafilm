import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import Popularity from "../../components/popularity/Popularity";
import Trending from "../../components/trending/Treding";

const Home = () => {
  const [topic, setTopic] = useState("movie");
  return (
    <div>
      <Banner />
      <Popularity trendingTopic={(topic) => setTopic(topic)} />
      <Trending topic={topic} />
    </div>
  );
};

export default Home;
