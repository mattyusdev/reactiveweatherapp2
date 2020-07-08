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

export default function ForecastCard({ foreCastData }) {
  const { Date: ForeCastDate, Temperature, Day, Night } = foreCastData;
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
          `${Temperature.Minimum.Value}°${Temperature.Minimum.Unit} - ${Temperature.Maximum.Value}°${Temperature.Maximum.Unit}`}
      </ForecastTemperatureText>
    </ForecastCustomCard>
  );
}
