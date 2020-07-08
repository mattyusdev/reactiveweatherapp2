import React, { useEffect } from "react";

import { CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getCurrentFavoriteCityData } from "../../redux/asyncActions";
import { setCurrentCity } from "../../redux/actions";

import {
  CurrentHeader,
  CurrentForecast,
  CurrentCityText,
  CurrentCountryText,
  CurrentInfoFrame,
  CurrentTemperature,
  CurrentWeatherIcon,
} from "../../styles/globals/currentWeatherStyles";
import { PrimaryButton } from "../../styles/globals/buttonStyles";
import getWeatherStyle from "../../utils/functions/getWeatherIcon";

export default function FavoriteCurrentHeader({ data, history }) {
  const dispatch = useDispatch();
  const weatherStyle = getWeatherStyle(
    data.currentWeather && data.currentWeather.WeatherIcon
  );

  useEffect(() => {
    dispatch(getCurrentFavoriteCityData(data.key));
  }, []);

  const viewFavoriteClickHandler = (cityData) => {
    dispatch(setCurrentCity(cityData));

    history.push("/");
  };

  return (
    <CurrentHeader small={true} backgroundColor={weatherStyle.backgroundColor}>
      <CurrentCityText small={true}>
        {data.name}({data.ID})
      </CurrentCityText>

      <CurrentCountryText small={true}>Israel</CurrentCountryText>

      {data.loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <CurrentInfoFrame small={true}>
            <CurrentTemperature small={true}>
              {data.currentWeather &&
                data.currentWeather.Temperature.Metric.Value}
              °
              {data.currentWeather &&
                data.currentWeather.Temperature.Metric.Unit}
            </CurrentTemperature>

            <CurrentWeatherIcon small={true} color={weatherStyle.iconColor}>
              <weatherStyle.Icon />
            </CurrentWeatherIcon>

            <PrimaryButton
              variant="contained"
              disableElevation
              color="secondary"
              onClick={() => viewFavoriteClickHandler(data)}
            >
              VIEW
            </PrimaryButton>
          </CurrentInfoFrame>

          <CurrentForecast small={true}>
            {data.currentWeather && data.currentWeather.WeatherText}
          </CurrentForecast>
        </>
      )}
    </CurrentHeader>
  );
}
