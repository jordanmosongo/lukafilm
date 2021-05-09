import React from "react";
import Banner from "../components/Banner";
import Tendance from "../components/Tendance";
import Collection from "../components/Collection";
import Videos from "../components/Videos";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tendance />
      <Collection />
      <Videos />
    </div>
  );
};

export default Home;
