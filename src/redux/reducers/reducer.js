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
  CHANGE_THEME,
  CHANGE_UNIT,
  OPEN_AUTO_SEARCH,
  CLOSE_AUTO_SEARCH,
} from "../types/types";

const initalState = {
  currentCity: {
    key: "215854",
    name: "Tel Aviv",
    ID: "TA",
    country: "Israel",
    currentWeather: {},
    forecastWeather: [],
  },
  favoriteCities: [],
  searchResults: [],
  isAutoSearchOpen: false,
  fetch: {
    loading: true,
    error: false,
  },
  theme: "light",
  unit: "c",
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
      return {
        ...state,
        currentCity: { ...state.currentCity, ...action.payload },
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
            return { ...city, loading: false, error: false };
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
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case CHANGE_UNIT:
      return {
        ...state,
        unit: state.unit === "c" ? "f" : "c",
      };
    case OPEN_AUTO_SEARCH:
      return {
        ...state,
        isAutoSearchOpen: true,
      };
    case CLOSE_AUTO_SEARCH:
      return {
        ...state,
        isAutoSearchOpen: false,
      };
    default:
      return state;
  }
};
