import styled, { css } from "styled-components";
import { AppBar, IconButton } from "@material-ui/core";
import { IoMdSunny } from "react-icons/io";
import { device } from "../responsive";

export const CustomAppBar = styled(AppBar)`
  && {
    box-shadow: 0px 3px 21px -6px rgba(0, 0, 0, 0.3);
    padding: 0 2rem;
    position: relative;

    ${(props) =>
      props.theme &&
      css`
        background: ${props.theme.background};
      `}
  }

  @media ${device.mobileL} {
    && {
      padding: 0;

      box-shadow: 0px 3px 15px -8px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const ToolBarLogoIcon = styled(IoMdSunny)`
  font-size: 1.5rem;
  margin: 3px;
  z-index: 2;

  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primaryText};
    `}

  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
`;

export const ToolBarLogoText = styled.h3`
  font-size: 1.4rem;
  z-index: 2;

  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primaryText};
    `}

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
  padding: 0;

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

    ${(props) =>
      props.theme &&
      css`
        background: ${props.theme.background};
      `}

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
    font-size: 1.5rem;
    line-height: 1.5rem;
    transition: 0.5s;
    border-radius: 50%;
    z-index: 2;
    padding: 0.7rem;

    @media ${device.mobileL} {
      display: block;

      > * {
        ${(props) =>
          props.theme &&
          css`
            color: ${props.theme.primaryText};
          `}

        font-size: 2.5rem;
        line-height: 2.5rem;
      }
    }
  }
`;

export const NavIconButton = styled(IconButton)`
  && {
    z-index: 2;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 0.7rem;


    ${(props) =>
      props.theme &&
      css`
        color: ${props.theme.primaryText};
      `}

    @media ${device.mobileL} {
      > * {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
    }
  }
`;
