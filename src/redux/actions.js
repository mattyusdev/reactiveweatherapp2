import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SET_CORRENT_WEATHER,
  SET_FORECAST_WEATHER,
} from "./types";

export const fetchStarted = () => {
  return { type: FETCH_STARTED };
};

export const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};

export const fetchFailed = () => {
  return { type: FETCH_FAILED };
};

export const setCorrentWeather = (correntWeather) => {
  return { type: SET_CORRENT_WEATHER, payload: correntWeather };
};

export const setForecastWeather = (forecastWeather) => {
  return { type: SET_FORECAST_WEATHER, payload: forecastWeather };
};
