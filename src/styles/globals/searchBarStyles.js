import styled, { css } from "styled-components";
import { device } from "../responsive";
import { TextField } from "@material-ui/core";

export const SearchFrame = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: 4rem 0;
  }
`;

export const CustomTextField = styled(TextField)`
  && {
    width: 20rem;

    ${(props) =>
      props.error && props.theme
        ? css`
            && p {
              color: orangered;
            }
            && .MuiInput-underline:after {
              border-bottom: 2px solid orangered;
            }
          `
        : css`
            && .MuiInput-underline:after {
              border-bottom: 2px solid ${props.theme.primaryText};
            }
          `}

    ${(props) =>
      props.theme &&
      css`
        && label,
        input {
          color: ${props.theme.primaryText};
        }

        && .MuiInput-underline:before {
          border-bottom: 1px solid ${props.theme.primaryText};
          opacity: 0.7;
        }

        && .MuiInput-underline:hover:before {
          color: ${props.theme.primaryText};
          opacity: 0.7;
          border-bottom: 2px solid ${props.theme.primaryText};
          transition: 0.5s;
        }
      `}
  }
`;
