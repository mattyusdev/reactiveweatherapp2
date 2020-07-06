import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SET_CURRENT_WEATHER,
  SET_FORECAST_WEATHER,
  SET_CURRENT_CITY,
} from "./types";

const initalState = {
  currentCity: {
    key: "215854",
    name: "Tel Aviv",
    ID: "TA",
    currentWeather: {},
    forecastWeather: [],
  },
  favoriteCities: [],
  fetch: {
    loading: true,
    error: false,
  },
};

export const weatherReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, fetch: { ...state.fetch, loading: true } };
    case FETCH_SUCCESS:
      return { ...state, fetch: { ...state.fetch, loading: false } };
    case FETCH_FAILED:
      return {
        ...state,
        fetch: { ...state.fetch, loading: false, error: true },
      };
    case SET_CURRENT_WEATHER:
      return {
        ...state,
        currentCity: { ...state.currentCity, currentWeather: action.payload },
      };
    case SET_FORECAST_WEATHER:
      return {
        ...state,
        currentCity: { ...state.currentCity, forecastWeather: action.payload },
      };
    case SET_CURRENT_CITY:
      const { key, name, ID } = action.payload;
      return {
        ...state,
        currentCity: { ...state.currentCity, key, name, ID },
      };
    default:
      return { ...state };
  }
};
