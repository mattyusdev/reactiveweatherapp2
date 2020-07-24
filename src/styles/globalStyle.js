import { createGlobalStyle, css } from "styled-components";
import { device } from "./responsive";

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 15px;
    
    ${(props) =>
      props.theme &&
      css`
        background: ${props.theme.background};
      `}

    @media ${device.laptop} {
        font-size: 13px;
    }

    @media ${device.tablet} {
        font-size: 10px;
    }
}

${(props) =>
  props.theme &&
  css`
    .MuiAutocomplete-paper {
      && {
        background: ${props.theme.background};
        color: ${props.theme.primaryText};
        li {
          padding: 0.7rem 1rem;
        }
        p {
          opacity: 0.7;
          margin: 0;
          font-size: 0.8rem;
        }
      }
    }
  `}

body {
    ${(props) =>
      !props.isNavOpen
        ? css`
            overflow: auto;
          `
        : css`
            overflow: hidden;
          `}

}
`;
