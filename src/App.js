import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Switch } from "react-router-dom";
import Films from "./pages/Films";
import Series from "./pages/Series";
import Acteurs from "./pages/Acteurs";

const MenuStateContext = React.createContext(false);

function App() {
  AOS.init({ duration: 1000 });
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/acteurs">
          <Acteurs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
