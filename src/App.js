import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Switch } from "react-router-dom";
import Films from "./pages/Film/Films";
import Series from "./pages/Serie/Series";
import Acteurs from "./pages/Acteur/Acteurs";
import Details from "./pages/Detail/Details";

function App() {
  AOS.init({ duration: 1000 });
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films" component={Films}>
          <Switch>
            <Route exact path="/films" component={Films} />
            <Route path="/films/:id" component={Details} />
          </Switch>
        </Route>
        <Route path="/series" component={Series}>
          <Switch>
            <Route exact path="/series" component={Series} />
            <Route path="/series/:id" component={Details} />
          </Switch>
        </Route>
        <Route path="/acteurs" component={Acteurs}>
          <Switch>
            <Route exact path="/acteurs" component={Acteurs} />
            <Route path="/acteurs/:id" component={Details} />
          </Switch>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
