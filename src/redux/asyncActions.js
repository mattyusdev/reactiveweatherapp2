import {
  fetchStarted,
  fetchSuccess,
  setCurrentWeather,
  fetchFailed,
  setForecastWeather,
} from "./actions";
import axios from "axios";

export const getCurrentCityData = (cityKey) => {
  return async (dispatch) => {
    dispatch(fetchStarted());
    // setTimeout(async () => {
    try {
      //   const currentResponse = await axios.get(
      //     `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
      //   );
      //   const forecastResponse = await axios.get(
      //     `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
      //   );

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
    // }, 2000);
  };
};
