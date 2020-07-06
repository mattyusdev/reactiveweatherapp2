import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SET_CORRENT_WEATHER,
  SET_FORECAST_WEATHER,
} from "./types";

const initalState = {
  correntCity: {
    key: "215854",
    correntWeather: {},
    forecastWeather: [],
  },
  favoriteCities: [],
  fetch: {
    loading: false,
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
    case SET_CORRENT_WEATHER:
      return {
        ...state,
        correntCity: { ...state.correntCity, correntWeather: action.payload },
      };
    case SET_FORECAST_WEATHER:
      return {
        ...state,
        correntCity: { ...state.correntCity, forecastWeather: action.payload },
      };
    default:
      return { ...state };
  }
};
