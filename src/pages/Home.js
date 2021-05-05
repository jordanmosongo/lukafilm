import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { useState } from "react";
import Tendance from "../components/Tendance";
import Collection from "../components/Collection";
import Latest from "../components/Latest";

const Home = () => {
  let status = false;
  const [menuStatus, setMenuStatus] = useState(status);
  const changeState = () => {
    setMenuStatus(!status);
  };
  console.log(menuStatus);
  return (
    <div>
      <Header changeMenuState={changeState} />
      <Banner status={menuStatus} changeMenuState={changeState} />
      <Tendance />
      <Collection />
      <Latest />
    </div>
  );
};

export default Home;
