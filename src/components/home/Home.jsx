import React, { useEffect } from "react";
import { ForecastFrame, CurrentMain } from "../../styles/pages/homeStyles";
import {
  CurrentHeader,
  CurrentForecast,
  CurrentCityText,
  CurrentCountryText,
  CurrentInfoFrame,
  CurrentTemperature,
  CurrentWeatherIcon,
} from "../../styles/globals/currentWeatherStyles";
import { CircularProgress } from "@material-ui/core";
import ForecastCard from "./ForecastCard";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCityData } from "../../redux/asyncActions";
import SearchBar from "../SearchBar";
import { addToFavorites, removeFromFavorites } from "../../redux/actions";
import { PrimaryButton } from "../../styles/globals/buttonStyles";
import getWeatherStyle from "../../utils/functions/getWeatherIcon";

export default function Home({ history }) {
  const { currentCity, fetch, favoriteCities } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { currentWeather, name, ID, key, forecastWeather } = currentCity;
  const weatherStyle = getWeatherStyle(currentWeather.WeatherIcon);

  const isFavorites = favoriteCities.some((city) => city.key === key);
  const favoriteCityObject = { name, ID, key, loading: true, error: false };

  useEffect(() => {
    dispatch(getCurrentCityData(key));
  }, [key]);

  const favoritesClickHandler = (cityData, isInFavorites) => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(cityData.key));
      localStorage.setItem(
        "favorites",
        JSON.stringify(
          favoriteCities.filter((city) => city.key !== cityData.key)
        )
      );
    } else {
      dispatch(addToFavorites(cityData));
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favoriteCities, cityData])
      );
    }
  };

  return (
    <>
      <SearchBar history={history} />

      <CurrentMain>
        {fetch.loading ? (
          <CircularProgress color="secondary" />
        ) : !fetch.error ? (
          <>
            <CurrentHeader backgroundColor={weatherStyle.backgroundColor}>
              <CurrentCityText>
                {name} ({ID})
              </CurrentCityText>
              <CurrentCountryText>Israel</CurrentCountryText>

              <CurrentInfoFrame>
                <CurrentTemperature>
                  {currentWeather.Temperature &&
                    `${currentWeather.Temperature.Metric.Value}° ${currentWeather.Temperature.Metric.Unit}`}
                </CurrentTemperature>

                <CurrentWeatherIcon color={weatherStyle.iconColor}>
                  <weatherStyle.Icon />
                </CurrentWeatherIcon>

                <PrimaryButton
                  variant={isFavorites ? "contained" : "outlined"}
                  disableElevation
                  color={isFavorites ? "secondary" : "inherit"}
                  onClick={() =>
                    favoritesClickHandler(favoriteCityObject, isFavorites)
                  }
                >
                  {isFavorites ? "Favorite ❤" : "Add favorite"}
                </PrimaryButton>
              </CurrentInfoFrame>

              <CurrentForecast>{currentWeather.WeatherText}</CurrentForecast>
            </CurrentHeader>
            <ForecastFrame>
              {forecastWeather.map((day) => (
                <ForecastCard foreCastData={day} key={day.Date} />
              ))}
            </ForecastFrame>
          </>
        ) : (
          <h1>Error! please try again later.</h1>
        )}
      </CurrentMain>
    </>
  );
}
