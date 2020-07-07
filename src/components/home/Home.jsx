import React, { useEffect } from "react";
import {
  CurrentHeader,
  CurrentTitle,
  CurrentForecast,
  ForecastFrame,
  CurrentMain,
} from "../../styles/homeStyles";
import { IconButton, CircularProgress } from "@material-ui/core";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ForecastCard from "./ForecastCard";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCityData } from "../../redux/asyncActions";
import SearchBar from "../SearchBar";
import { addToFavorites, removeFromFavorites } from "../../redux/actions";

export default function Home({ history }) {
  const { currentCity, fetch, favoriteCities } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { currentWeather, name, ID, key, forecastWeather } = currentCity;

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
    <div>
      <SearchBar history={history} />

      <CurrentMain>
        {fetch.loading ? (
          <CircularProgress color="secondary" />
        ) : !fetch.error ? (
          <>
            <CurrentHeader>
              <CurrentTitle>
                <div>
                  <h3>
                    {name} ({ID})
                  </h3>
                  <h2>
                    {currentWeather.Temperature &&
                      `${currentWeather.Temperature.Metric.Value}°${currentWeather.Temperature.Metric.Unit}`}
                  </h2>
                </div>

                <div>
                  <IconButton
                    color={isFavorites ? "secondary" : "inherit"}
                    onClick={() =>
                      favoritesClickHandler(favoriteCityObject, isFavorites)
                    }
                  >
                    {isFavorites ? <AiFillHeart /> : <AiOutlineHeart />}
                  </IconButton>
                </div>
              </CurrentTitle>

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
    </div>
  );
}
