import { createGlobalStyle, css } from "styled-components";

export const device = {
  mobileS: `(max-width: 375px)`,
  mobileM: `(max-width: 584px)`,
  mobileL: `(max-width: 768px)`,
  tablet: `(max-width: 1024px)`,
  laptopS: `(max-width: 1280px)`,
  laptop: `(max-width: 1440px)`,
};

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 15px;
        

        @media ${device.laptop} {
            font-size: 13px;
        }

        @media ${device.tablet} {
            font-size: 10px;
        }
    }

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
