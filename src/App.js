import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/favorites" exact component={Favorites} />
    </div>
  );
}

export default App;
