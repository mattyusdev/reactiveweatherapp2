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
      dispatch(fetchFavoriteFailed(cityKey));
    }
    // }, 1000);
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
          //   `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}`
          // );

          const locationResponse = await axios.get(
            "/localapi/currentLocation.json"
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
