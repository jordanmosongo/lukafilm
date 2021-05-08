import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import React from "react";
import Nouvelles from "./pages/Nouvelles";

const MenuStateContext = React.createContext(false);

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Nouvelles />
      <Footer />
    </div>
  );
}

export default App;
