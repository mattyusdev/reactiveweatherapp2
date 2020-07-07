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
} from "./actions";
import axios from "axios";

export const getCurrentCityData = (cityKey) => {
  return async (dispatch) => {
    dispatch(fetchStarted());
    // setTimeout(async () => {
    try {
      // const currentResponse = await axios.get(
      //   `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
      // );
      // const forecastResponse = await axios.get(
      //   `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
      // );

      const currentResponse = await axios.get("/localapi/telavivCurrent.json");
      const forecastResponse = await axios.get(
        "/localapi/telavivForecast.json"
      );

      dispatch(setCurrentWeather(currentResponse.data[0]));
      dispatch(setForecastWeather(forecastResponse.data.DailyForecasts));
      dispatch(fetchSuccess());
    } catch (err) {
      console.log(err);
      dispatch(fetchFailed());
    }
    // }, 1000);
  };
};

export const searchCity = (cityName) => {
  return async (dispatch) => {
    dispatch(fetchStarted());

    // setTimeout(async () => {
    try {
      // const searchResponse = await axios.get(
      //   `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${cityName}`
      // );

      const searchResponse = await axios.get("/localapi/search.json");

      dispatch(setSearchResults(searchResponse.data));
      dispatch(fetchSuccess());
    } catch (err) {
      console.log(err);
      dispatch(fetchFailed());
    }
    // }, 1000);
  };
};

export const getCurrentFavoriteCityData = (cityKey) => {
  return async (dispatch) => {
    dispatch(fetchFavoriteStarted(cityKey));

    // setTimeout(async () => {
    try {
      // const currentResponse = await axios.get(
      //   `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
      // );

      const currentResponse = await axios.get("/localapi/telavivCurrent.json");

      dispatch(setFavoriteCurrentWeather(cityKey, currentResponse.data[0]));
      dispatch(fetchFavoriteSuccess(cityKey));
    } catch (err) {
      //////**************************
    }
    // }, 1000);
  };
};
