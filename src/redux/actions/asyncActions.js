import {
  fetchStarted,
  fetchSuccess,
  setCurrentWeather,
  fetchFailed,
  setForecastWeather,
  setSearchResults,
  fetchFavoriteStarted,
  setFavoriteCurrentWeather,
  fetchFavoriteSuccess,
  fetchFavoriteFailed,
  setCurrentCity,
} from "./actions";
import axios from "axios";

const {
  REACT_APP_API_LOCAL: apiLocal,
  REACT_APP_API_ROOT: apiRoot,
  REACT_APP_API_KEY: apiKey,
} = process.env;

export const getCurrentCityData = (cityKey) => {
  return async (dispatch) => {
    dispatch(fetchStarted());
    try {
      // const getCurrentData = axios.get(
      //   `${apiRoot}/currentconditions/v1/${cityKey}?apikey=${apiKey}&metric=true`
      // );
      // const getForecastData = axios.get(
      //   `${apiRoot}/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`
      // );

      const getCurrentData = axios.get(`${apiLocal}/telavivCurrent.json`);
      const getForecastData = axios.get(`${apiLocal}/telavivForecast.json`);

      const [currentResponse, forecastResponse] = await Promise.all([
        getCurrentData,
        getForecastData,
      ]);

      dispatch(setCurrentWeather(currentResponse.data[0]));
      dispatch(setForecastWeather(forecastResponse.data.DailyForecasts));
      dispatch(fetchSuccess());
    } catch (err) {
      dispatch(fetchFailed());
    }
  };
};

export const searchCity = (cityName) => {
  return async (dispatch) => {
    dispatch(fetchStarted());

    try {
      // const searchResponse = await axios.get(
      //   `${apiRoot}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`
      // );

      const searchResponse = await axios.get(`${apiLocal}/search.json`);

      dispatch(setSearchResults(searchResponse.data));
      dispatch(fetchSuccess());
    } catch (err) {
      dispatch(fetchFailed());
    }
  };
};

export const getCurrentFavoriteCityData = (cityKey) => {
  return async (dispatch) => {
    dispatch(fetchFavoriteStarted(cityKey));

    try {
      // const currentResponse = await axios.get(
      //   `${apiRoot}/currentconditions/v1/${cityKey}?apikey=${apiKey}&metric=true`
      // );

      const currentResponse = await axios.get(
        `${apiLocal}/telavivCurrent.json`
      );

      dispatch(setFavoriteCurrentWeather(cityKey, currentResponse.data[0]));
      dispatch(fetchFavoriteSuccess(cityKey));
    } catch (err) {
      dispatch(fetchFavoriteFailed(cityKey));
    }
  };
};

export const getCurrentLocation = () => {
  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (result) => {
        dispatch(fetchStarted());

        try {
          const { latitude, longitude } = result.coords;

          // const locationResponse = await axios.get(
          //   `${apiRoot}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}`
          // );

          const locationResponse = await axios.get(
            `${apiLocal}/currentLocation.json`
          );

          const cityData = {
            key: locationResponse.data.Key,
            ID: locationResponse.data.AdministrativeArea.ID,
            name: locationResponse.data.LocalizedName,
            country: locationResponse.data.Country.LocalizedName,
          };

          dispatch(setCurrentCity(cityData));
        } catch (err) {
          console.log(err);

          dispatch(fetchFailed());
        }
      });
    }
  };
};
