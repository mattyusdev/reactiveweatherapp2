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
} from "../styles/globals/navStyles";
import { PrimaryButton } from "../styles/globals/buttonStyles";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

export default function Navbar({ isNavOpen, setIsNavOpen }) {
  const location = useLocation().pathname;

  return (
    <CustomAppBar position="static" color="inherit" component="nav">
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
              color={location !== "/" ? "inherit" : "secondary"}
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
              color={location !== "/favorites" ? "inherit" : "secondary"}
            >
              Favorites ❤
            </PrimaryButton>
          </NavLinksLi>
        </NavLinksFrame>

        <NavHamburger onClick={() => setIsNavOpen((prevState) => !prevState)}>
          {!isNavOpen ? <RiMenu4Line /> : <RiCloseLine />}
        </NavHamburger>
      </Toolbar>
    </CustomAppBar>
  );
}
