import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { getCurrentLocation } from "./redux/actions/asyncActions";
import {
  getLocalFavorites,
  getLocalTheme,
  getLocalUnit,
} from "./redux/actions/middlewareActions";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    dispatch(getLocalFavorites());
    dispatch(getLocalTheme());
    dispatch(getLocalUnit());
    dispatch(getCurrentLocation());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyle isNavOpen={isNavOpen} />
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Switch>
          <Route path="/" exact component={Home} />
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
