import React, { useEffect } from "react";
import {
  SearchFrame,
  SearchForm,
  CurrentHeader,
  CurrentTitle,
  CurrentForecast,
  ForecastFrame,
  CurrentMain,
} from "../../styles/homeStyles";
import {
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { AiFillHeart } from "react-icons/ai";
import ForecastCard from "./ForecastCard";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCityData } from "../../redux/asyncActions";
import { setCurrentCity } from "../../redux/actions";

export default function Home() {
  const { currentCity, fetch } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { currentWeather, name, ID, key, forecastWeather } = currentCity;

  useEffect(() => {
    dispatch(getCurrentCityData(key));
  }, [key]);

  const setCity = () => {
    dispatch(
      setCurrentCity({
        key: 28143,
        name: "Dhaka",
        ID: "C",
      })
    );
  };

  return (
    <div>
      <SearchFrame>
        <SearchForm>
          <TextField label="Search..." />
          <Button
            type="button"
            onClick={setCity}
            variant="contained"
            disableElevation
            color="secondary"
          >
            GO
          </Button>
        </SearchForm>
      </SearchFrame>

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
                  <IconButton color="secondary">
                    <AiFillHeart />
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
