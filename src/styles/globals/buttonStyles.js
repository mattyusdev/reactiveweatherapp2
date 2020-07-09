import React from "react";
import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";
import { device } from "../responsive";

export const ButtonWithProps = ({ nav, primary, outline, ...otherProps }) => (
  <Button {...otherProps} />
);

export const PrimaryButton = styled(ButtonWithProps)`
  && {
    transition: 0.5s;
    font-size: 0.75rem;
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0 2rem;
    border-radius: 6.25rem;
    margin: 3px;

    ${(props) =>
      props.primary
        ? css`
            color: #fff;
            background: ${props.theme.primary};

            :hover {
              background: ${props.theme.primaryHover};
            }
          `
        : css`
            color: ${props.theme.primaryText};
            background: transparent;

            :hover {
              background: rgba(170, 170, 170, 0.2);
            }
          `}

    ${(props) =>
      props.outline &&
      css`
        color: #fff;
        border-color: #fff;
      `}

    ${(props) =>
      props.nav &&
      css`
        @media ${device.mobileL} {
          && {
            font-size: 2rem;
            padding: 4rem;
            width: 100%;
            margin: 0;
            border-radius: 0;

            &: hover {
              transform: scale(1.03);
            }
          }
        }
      `}

      @media ${device.tablet} {
          height: 3.2rem;
          line-height: 3.2rem;
          padding: 0 2.2rem;
        }
  }
`;
