import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, useLocation } from "react-router-dom";
import {
  CustomAppBar,
  ToolBarSpacer,
  ToolBarLogoText,
  ToolBarLogoIcon,
  NavLinksFrame,
  NavLinksLi,
  NavHamburger,
  NavIconButton,
} from "../styles/globals/navStyles";
import { PrimaryButton } from "../styles/globals/buttonStyles";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { MdBrightness4, MdBrightnessHigh } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, changeUnit } from "../redux/actions";

export default function Navbar({ isNavOpen, setIsNavOpen }) {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme, unit } = useSelector((state) => state);

  const changeUnitHandler = () => {
    if (unit === "c") {
      localStorage.setItem("unit", "f");
    } else {
      localStorage.removeItem("unit");
    }
    dispatch(changeUnit());
  };

  const changeThemeHandler = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
    dispatch(changeTheme());
  };

  return (
    <CustomAppBar position="static" component="nav">
      <Toolbar>
        <ToolBarLogoIcon />
        <ToolBarLogoText>WeatherApp</ToolBarLogoText>
        <ToolBarSpacer />

        <NavLinksFrame isNavOpen={isNavOpen}>
          <NavLinksLi>
            <PrimaryButton
              component={Link}
              nav={true}
              to="/"
              variant="contained"
              disableElevation
              onClick={() => setIsNavOpen(false)}
              primary={location !== "/" ? false : true}
            >
              Home
            </PrimaryButton>
          </NavLinksLi>

          <NavLinksLi>
            <PrimaryButton
              component={Link}
              nav={true}
              to="/favorites"
              variant="contained"
              disableElevation
              onClick={() => setIsNavOpen(false)}
              primary={location !== "/favorites" ? false : true}
            >
              Favorites ❤
            </PrimaryButton>
          </NavLinksLi>
        </NavLinksFrame>

        <NavIconButton onClick={changeUnitHandler}>
          {unit === "c" ? "c °" : "f °"}
        </NavIconButton>

        <NavIconButton onClick={changeThemeHandler}>
          {theme === "light" ? <MdBrightness4 /> : <MdBrightnessHigh />}
        </NavIconButton>

        <NavHamburger onClick={() => setIsNavOpen((prevState) => !prevState)}>
          {!isNavOpen ? <RiMenu4Line /> : <RiCloseLine />}
        </NavHamburger>
      </Toolbar>
    </CustomAppBar>
  );
}
