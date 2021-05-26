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
import Details from "./pages/Detail/Details";

function App() {
  AOS.init({ duration: 1000 });
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/series" component={Series} />
        <Route path="/acteurs" component={Acteurs} />
        <Route path="/detail" component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
