import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SET_CURRENT_WEATHER,
  SET_FORECAST_WEATHER,
  SET_CURRENT_CITY,
  SET_SEARCH_RESULTS,
  ADD_TO_FAVORITES,
  SET_ALL_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_FAVORITE_STARTED,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_FAILED,
  SET_FAVORITE_CURRENT_WEATHER,
  CHANGE_THEME,
  CHANGE_UNIT,
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

export const setCurrentCity = (cityData) => {
  return { type: SET_CURRENT_CITY, payload: cityData };
};

export const setSearchResults = (searchResults) => {
  return { type: SET_SEARCH_RESULTS, payload: searchResults };
};

export const setAllFavorites = (citiesData) => {
  return { type: SET_ALL_FAVORITES, payload: citiesData };
};

export const addToFavorites = (cityData) => {
  return { type: ADD_TO_FAVORITES, payload: cityData };
};

export const removeFromFavorites = (cityKey) => {
  return { type: REMOVE_FROM_FAVORITES, payload: cityKey };
};

export const fetchFavoriteStarted = (cityKey) => {
  return { type: FETCH_FAVORITE_STARTED, payload: cityKey };
};

export const fetchFavoriteSuccess = (cityKey) => {
  return { type: FETCH_FAVORITE_SUCCESS, payload: cityKey };
};

export const fetchFavoriteFailed = (cityKey) => {
  return { type: FETCH_FAVORITE_FAILED, payload: cityKey };
};

export const setFavoriteCurrentWeather = (cityKey, data) => {
  return {
    type: SET_FAVORITE_CURRENT_WEATHER,
    payload: { cityKey, data },
  };
};

export const changeTheme = () => {
  return {
    type: CHANGE_THEME,
  };
};

export const changeUnit = () => {
  return {
    type: CHANGE_UNIT,
  };
};
