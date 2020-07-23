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
import { themeHandler, unitHandler } from "../redux/actions/middlewareActions";

export default function Navbar({ isNavOpen, setIsNavOpen }) {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme, unit } = useSelector((state) => state);

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

        <NavIconButton onClick={() => dispatch(unitHandler())}>
          {unit === "c" ? "c °" : "f °"}
        </NavIconButton>

        <NavIconButton onClick={() => dispatch(themeHandler())}>
          {theme === "light" ? <MdBrightness4 /> : <MdBrightnessHigh />}
        </NavIconButton>

        <NavHamburger onClick={() => setIsNavOpen((prevState) => !prevState)}>
          {!isNavOpen ? <RiMenu4Line /> : <RiCloseLine />}
        </NavHamburger>
      </Toolbar>
    </CustomAppBar>
  );
}
