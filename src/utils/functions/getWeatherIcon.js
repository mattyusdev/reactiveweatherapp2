import weatherStyles from "../data/weatherStyles";

const getWeatherStyle = (iconNumber) => {
  const icon = weatherStyles.find((icon) => icon.number === iconNumber);

  if (icon) return icon;
  return weatherStyles[0];
};

export default getWeatherStyle;
