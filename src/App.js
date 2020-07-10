import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import Search from "./components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setAllFavorites, changeUnit, changeTheme } from "./redux/actions";
import { GlobalStyle } from "./styles/responsive";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { getCurrentLocation } from "./redux/asyncActions";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const localFavorites = JSON.parse(localStorage.getItem("favorites"));
    const localUnit = localStorage.getItem("unit");
    const localTheme = localStorage.getItem("theme");

    if (localFavorites) {
      dispatch(setAllFavorites(localFavorites));
    }

    if (localUnit) {
      dispatch(changeUnit());
    }

    if (localTheme) {
      dispatch(changeTheme());
    }

    dispatch(getCurrentLocation());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyle isNavOpen={isNavOpen} />
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:text" component={Search} />
          <Route path="/favorites" exact component={Favorites} />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
