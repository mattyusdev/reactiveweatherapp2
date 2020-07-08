import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import Search from "./components/search/Search";
import { useDispatch } from "react-redux";
import { setAllFavorites } from "./redux/actions";
import { GlobalStyle } from "./styles/responsive";

function App() {
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      dispatch(setAllFavorites(favorites));
    }
  }, []);

  return (
    <div>
      <GlobalStyle isNavOpen={isNavOpen} />
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Route path="/" exact component={Home} />
      <Route path="/search/:text" component={Search} />
      <Route path="/favorites" exact component={Favorites} />
    </div>
  );
}

export default App;
