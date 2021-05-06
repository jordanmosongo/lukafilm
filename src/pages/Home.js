import React from "react";
import Banner from "../components/Banner";
import Tendance from "../components/Tendance";
import Collection from "../components/Collection";
import Latest from "../components/Latest";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tendance />
      <Collection />
      <Latest />
    </div>
  );
};

export default Home;
