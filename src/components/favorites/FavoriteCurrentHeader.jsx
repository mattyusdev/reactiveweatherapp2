import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentFavoriteCityData } from "../../redux/actions/asyncActions";
import { setCurrentCity } from "../../redux/actions/actions";

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
import BarLoader from "react-spinners/BarLoader";
import { ErrorMessage } from "../../styles/globals/errorStyles";
import { FavoriteFrame } from "../../styles/pages/favoritesStyles";
import { convertUnit } from "../../utils/functions/convertUnit";

export default function FavoriteCurrentHeader({ data, history }) {
  const dispatch = useDispatch();
  const { unit } = useSelector((state) => state);
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
    <CurrentHeader
      small={true}
      backgroundColor={weatherStyle && weatherStyle.backgroundColor}
    >
      <CurrentCityText small={true}>
        {data.name}({data.ID})
      </CurrentCityText>

      <CurrentCountryText small={true}>{data.country}</CurrentCountryText>

      <FavoriteFrame>
        {data.loading ? (
          <BarLoader color="#fff" />
        ) : !data.error ? (
          <>
            <CurrentInfoFrame small={true}>
              <CurrentTemperature small={true}>
                {data.currentWeather &&
                  convertUnit(
                    unit,
                    data.currentWeather.Temperature.Metric.Value
                  )}
              </CurrentTemperature>

              <CurrentWeatherIcon
                small={true}
                color={weatherStyle && weatherStyle.iconColor}
              >
                <weatherStyle.Icon />
              </CurrentWeatherIcon>

              <PrimaryButton
                variant="contained"
                disableElevation
                primary={true}
                onClick={() => viewFavoriteClickHandler(data)}
              >
                VIEW
              </PrimaryButton>
            </CurrentInfoFrame>

            <CurrentForecast small={true}>
              {data.currentWeather && data.currentWeather.WeatherText}
            </CurrentForecast>
          </>
        ) : (
          <ErrorMessage isFavorite={true} />
        )}
      </FavoriteFrame>
    </CurrentHeader>
  );
}
