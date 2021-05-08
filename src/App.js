import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import React from "react";

const MenuStateContext = React.createContext(false);

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
