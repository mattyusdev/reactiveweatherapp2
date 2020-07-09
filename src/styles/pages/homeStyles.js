import styled, { css } from "styled-components";
import { Card } from "@material-ui/core";
import { device } from "../responsive";

export const CurrentMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const ForecastFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  && {
    > * {
      box-shadow: none;
      border-radius: 0;
    }
  }
`;

export const ForecastCustomCard = styled(Card)`
  && {
    padding: 1.5rem;
    text-align: center;
    width: 17rem;
    background: transparent;

    ${(props) =>
      props.theme &&
      css`
        > * {
          color: ${props.theme.primaryText};
        }
      `}

    @media ${device.mobileL} {
      width: 100%;
    }
  }
`;

export const ForecastDayText = styled.h1`
  text-transform: uppercase;
  font-size: 2.7rem;
  margin: 10px 0;
  letter-spacing: 3px;

  @media ${device.mobileL} {
    font-size: 3.8rem;
  }
`;

export const ForecastInfoFrame = styled.div`
  display: flex;
  justify-content: center;

  > div {
    margin: 10px 0;
    width: 50%;

    @media ${device.mobileL} {
      width: auto;
      margin: 10px;
    }
  }
`;

export const ForecastWeatherIcon = styled.div`
  margin: 0;
  svg {
    font-size: 2.5rem;
    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `}

      @media ${device.mobileL} {
    font-size: 3rem;
  }
  }
`;

export const ForecastWeatherText = styled.h3`
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin: 0;
  @media ${device.mobileL} {
    font-size: 1.3rem;
  }
`;

export const ForecastDayTimeText = styled.h4`
  font-size: 0.8rem;
  opacity: 0.7;
  margin: 0;
`;

export const ForecastTemperatureText = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  letter-spacing: 2px;

  @media ${device.mobileL} {
    font-size: 1.7rem;
  }
`;
