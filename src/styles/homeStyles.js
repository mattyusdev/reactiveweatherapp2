import styled from "styled-components";

export const SearchFrame = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: flex;

  > * {
    margin: 10px;
  }
  input {
    width: 300px;
  }
`;

export const CurrentHeader = styled.header`
  height: 300px;
`;

export const CurrentTitle = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CurrentForecast = styled.h1`
  text-align: center;
`;

export const ForecastFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;
