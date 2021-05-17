import React from "react";
import Banner from "../components/Banner";
import Tendance from "../components/Tendance";
import Collection from "../components/Collection";
import Videos from "../components/Videos";
import News from "../components/News";
import "../scss/news.scss";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tendance />
      <Collection />
      {/* <Collection />
      <Videos />
      <News /> */}
      <News />
    </div>
  );
};

export default Home;
