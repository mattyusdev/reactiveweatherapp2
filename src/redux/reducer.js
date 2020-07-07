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
  SET_FAVORITE_CURRENT_WEATHER,
  FETCH_FAVORITE_STARTED,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_FAILED,
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
  searchResults: [],
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
      return {
        ...state,
        fetch: { ...state.fetch, loading: false, error: false },
      };
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
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_ALL_FAVORITES:
      return {
        ...state,
        favoriteCities: [...action.payload],
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter(
          (city) => city.key !== action.payload
        ),
      };
    case FETCH_FAVORITE_STARTED:
      return {
        ...state,
        favoriteCities: state.favoriteCities.map((city) => {
          if (city.key === action.payload) {
            return { ...city, loading: true };
          } else {
            return city;
          }
        }),
      };
    case FETCH_FAVORITE_SUCCESS:
      return {
        ...state,
        favoriteCities: state.favoriteCities.map((city) => {
          if (city.key === action.payload) {
            return { ...city, loading: false };
          } else {
            return city;
          }
        }),
      };
    case FETCH_FAVORITE_FAILED:
      return {
        ...state,
        favoriteCities: state.favoriteCities.map((city) => {
          if (city.key === action.payload) {
            return { ...city, loading: false, error: true };
          } else {
            return city;
          }
        }),
      };
    case SET_FAVORITE_CURRENT_WEATHER:
      return {
        ...state,
        favoriteCities: state.favoriteCities.map((city) => {
          if (city.key === action.payload.cityKey) {
            return { ...city, currentWeather: action.payload.data };
          } else {
            return city;
          }
        }),
      };
    default:
      return { ...state };
  }
};
