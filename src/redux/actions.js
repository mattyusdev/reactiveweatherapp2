import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SET_CURRENT_WEATHER,
  SET_FORECAST_WEATHER,
  SET_CURRENT_CITY,
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

export const setCurrentWeather = (currentWeather) => {
  return { type: SET_CURRENT_WEATHER, payload: currentWeather };
};

export const setForecastWeather = (forecastWeather) => {
  return { type: SET_FORECAST_WEATHER, payload: forecastWeather };
};

export const setCurrentCity = (cityKey) => {
  return { type: SET_CURRENT_CITY, payload: cityKey };
};
