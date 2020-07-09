import React from "react";
import daysOfWeek from "../../utils/data/daysOfWeek";
import {
  ForecastDayText,
  ForecastCustomCard,
  ForecastInfoFrame,
  ForecastWeatherText,
  ForecastDayTimeText,
  ForecastTemperatureText,
  ForecastWeatherIcon,
} from "../../styles/pages/homeStyles";
import getWeatherStyle from "../../utils/functions/getWeatherIcon";
import { convertUnit } from "../../utils/functions/convertUnit";
import { useSelector } from "react-redux";

export default function ForecastCard({ foreCastData }) {
  const { Date: ForeCastDate, Temperature, Day, Night } = foreCastData;
  const { unit } = useSelector((state) => state);
  const weatherStyleDay = getWeatherStyle(Day.Icon);
  const weatherStyleNight = getWeatherStyle(Night.Icon);

  const dayName = daysOfWeek[new Date(ForeCastDate).getDay()];

  return (
    <ForecastCustomCard>
      <ForecastDayText>{dayName}</ForecastDayText>

      <ForecastInfoFrame>
        <div>
          <ForecastWeatherIcon color={weatherStyleDay.iconColor}>
            <weatherStyleDay.Icon />
          </ForecastWeatherIcon>

          <ForecastWeatherText>{Day && Day.IconPhrase}</ForecastWeatherText>

          <ForecastDayTimeText>Day</ForecastDayTimeText>
        </div>

        <div>
          <ForecastWeatherIcon color={weatherStyleNight.iconColor}>
            <weatherStyleNight.Icon />
          </ForecastWeatherIcon>

          <ForecastWeatherText>{Night && Night.IconPhrase}</ForecastWeatherText>

          <ForecastDayTimeText>Night</ForecastDayTimeText>
        </div>
      </ForecastInfoFrame>

      <ForecastTemperatureText>
        {Temperature &&
          `${convertUnit(unit, Temperature.Minimum.Value)} - ${convertUnit(
            unit,
            Temperature.Maximum.Value
          )}`}
      </ForecastTemperatureText>
    </ForecastCustomCard>
  );
}
