import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import Search from "./components/search/Search";
import { useDispatch } from "react-redux";
import { setAllFavorites } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      dispatch(setAllFavorites(favorites));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/search/:text" component={Search} />
      <Route path="/favorites" exact component={Favorites} />
    </div>
  );
}

export default App;
