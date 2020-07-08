import styled, { css } from "styled-components";
import { AppBar, IconButton } from "@material-ui/core";
import { IoMdSunny } from "react-icons/io";
import { device } from "../responsive";

export const CustomAppBar = styled(AppBar)`
  && {
    box-shadow: 0px 3px 21px -6px rgba(0, 0, 0, 0.3);
  }
  padding: 0 2rem;

  @media ${device.mobileL} {
    padding: 0;

    && {
      box-shadow: 0px 3px 15px -8px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const ToolBarLogoIcon = styled(IoMdSunny)`
  font-size: 1.5rem;
  color: #333;
  margin: 3px;
  z-index: 2;

  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
`;

export const ToolBarLogoText = styled.h3`
  color: #333;
  font-size: 1.4rem;
  z-index: 2;

  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;

export const ToolBarSpacer = styled.span`
  flex-grow: 1;
`;

export const NavLinksFrame = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.mobileL} {
    align-items: center;
    z-index: 1;
    justify-content: center;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    background: #fff;

    ${(props) =>
      !props.isNavOpen
        ? css`
            display: none;
          `
        : css`
            display: flex;
          `}
  }
`;

export const NavLinksLi = styled.li`
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const NavHamburger = styled(IconButton)`
  && {
    display: none;
    min-width: 2rem;
    transition: 0.5s;
    border-radius: 50%;
    z-index: 2;

    @media ${device.mobileL} {
      display: block;

      > * {
        color: #333;
        font-size: 3rem;
        line-height: 3rem;
      }
    }
  }
`;
