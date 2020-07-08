import styled, { css } from "styled-components";
import { device } from "../responsive";

export const CurrentHeader = styled.div`
  width: 100%;

  ${(props) =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `}

  > * {
    color: #fff;
  }

  ${(props) =>
    props.small
      ? css`
          padding: 30px 0;
        `
      : css`
          padding: 40px 0;
        `}
`;

export const CurrentCityText = styled.h2`
  padding: 0 20%;
  margin: 0;

  ${(props) =>
    props.small &&
    css`
      font-size: 1.3rem;
    `}

  @media ${device.mobileL} {
    text-align: center;
  }
`;

export const CurrentCountryText = styled.h3`
  margin: 0;
  padding: 0 20%;
  font-weight: 200;
  opacity: 0.7;

  ${(props) =>
    props.small &&
    css`
      font-size: 1.1rem;
    `}

  @media ${device.mobileL} {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const CurrentInfoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  && {
    > * {
      ${(props) =>
        props.small
          ? css`
              margin: 0 10px;
            `
          : css`
              margin: 0 20px;
            `}
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;

    && {
      > * {
        margin: 15px 0;
      }
    }
  }
`;

export const CurrentTemperature = styled.h1`
  ${(props) =>
    props.small
      ? css`
          font-size: 2rem;
        `
      : css`
          font-size: 3rem;
        `}
`;

export const CurrentWeatherIcon = styled.div`
  svg {
    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `}

    ${(props) =>
      props.small
        ? css`
            font-size: 9rem;
          `
        : css`
            font-size: 13rem;
          `}
  }
`;

export const CurrentForecast = styled.h1`
  text-align: center;
  letter-spacing: 4px;

  ${(props) =>
    props.small
      ? css`
          margin: 0 0 15px;
          font-size: 2.3rem;
        `
      : css`
          margin: 10px 0 15px;

          font-size: 3.3rem;
        `}
`;
