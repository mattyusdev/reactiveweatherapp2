import {
  IoMdSunny,
  IoMdPartlySunny,
  IoMdCloudy,
  IoMdRainy,
  IoMdThunderstorm,
  IoMdSnow,
  IoMdMoon,
  IoMdCloudyNight,
} from "react-icons/io";
import { FaDiceD20, FaWind, FaCloudSunRain } from "react-icons/fa";

const weatherStyles = [
  //DEFAULT
  {
    number: "default",
    Icon: FaCloudSunRain,
    iconColor: "#ffde17",
    backgroundColor: "#1d87d8",
  },
  //SUNNY
  {
    number: 1,
    Icon: IoMdSunny,
    iconColor: "#ffde17",
    backgroundColor: "#1d87d8",
  },
  {
    number: 2,
    Icon: IoMdSunny,
    iconColor: "#ffde17",
    backgroundColor: "#1d87d8",
  },
  {
    number: 30,
    Icon: IoMdSunny,
    iconColor: "#ffde17",
    backgroundColor: "#1d87d8",
  },
  //PARTLY SUNNY
  {
    number: 3,
    Icon: IoMdPartlySunny,
    iconColor: "#ffde17",
    backgroundColor: "#1d87d8",
  },
  {
    number: 4,
    Icon: IoMdPartlySunny,
    iconColor: "#ffde17",
    backgroundColor: "#1d87d8",
  },
  {
    number: 5,
    Icon: IoMdPartlySunny,
    iconColor: "#ffde17",
    backgroundColor: "#1d87d8",
  },
  //CLOUDY
  {
    number: 6,
    Icon: IoMdCloudy,
    iconColor: "#aaaaaa",
    backgroundColor: "#335169",
  },
  {
    number: 7,
    Icon: IoMdCloudy,
    iconColor: "#aaaaaa",
    backgroundColor: "#335169",
  },
  {
    number: 8,
    Icon: IoMdCloudy,
    iconColor: "#aaaaaa",
    backgroundColor: "#335169",
  },
  {
    number: 11,
    Icon: IoMdCloudy,
    iconColor: "#aaaaaa",
    backgroundColor: "#335169",
  },
  //SHOWERS/RAIN
  {
    number: 12,
    Icon: IoMdRainy,
    iconColor: "#b2dcfe",
    backgroundColor: "#567a97",
  },
  {
    number: 13,
    Icon: IoMdRainy,
    iconColor: "#b2dcfe",
    backgroundColor: "#567a97",
  },

  {
    number: 14,
    Icon: IoMdRainy,
    iconColor: "#b2dcfe",
    backgroundColor: "#567a97",
  },
  {
    number: 18,
    Icon: IoMdRainy,
    iconColor: "#b2dcfe",
    backgroundColor: "#567a97",
  },
  {
    number: 39,
    Icon: IoMdRainy,
    iconColor: "#b2dcfe",
    backgroundColor: "#567a97",
  },
  {
    number: 40,
    Icon: IoMdRainy,
    iconColor: "#b2dcfe",
    backgroundColor: "#567a97",
  },
  //THUNDER STORMS
  {
    number: 15,
    Icon: IoMdThunderstorm,
    iconColor: "#d4e32e",
    backgroundColor: "#002337",
  },
  {
    number: 16,
    Icon: IoMdThunderstorm,
    iconColor: "#d4e32e",
    backgroundColor: "#002337",
  },
  {
    number: 17,
    Icon: IoMdThunderstorm,
    iconColor: "#d4e32e",
    backgroundColor: "#002337",
  },
  {
    number: 41,
    Icon: IoMdThunderstorm,
    iconColor: "#d4e32e",
    backgroundColor: "#002337",
  },
  {
    number: 42,
    Icon: IoMdThunderstorm,
    iconColor: "#d4e32e",
    backgroundColor: "#002337",
  },

  //FLURRIES/SNOW
  {
    number: 19,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  {
    number: 20,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  {
    number: 21,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  {
    number: 22,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  {
    number: 23,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  {
    number: 29,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  {
    number: 43,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  {
    number: 44,
    Icon: IoMdSnow,
    iconColor: "#dfdfdf",
    backgroundColor: "#75b4c2",
  },
  //ICE/SLEET
  {
    number: 24,
    Icon: FaDiceD20,
    iconColor: "#b9dae2",
    backgroundColor: "#90b0d1",
  },
  {
    number: 25,
    Icon: FaDiceD20,
    iconColor: "#b9dae2",
    backgroundColor: "#90b0d1",
  },
  {
    number: 26,
    Icon: FaDiceD20,
    iconColor: "#b9dae2",
    backgroundColor: "#90b0d1",
  },
  {
    number: 31,
    Icon: FaDiceD20,
    iconColor: "#b9dae2",
    backgroundColor: "#90b0d1",
  },
  //WINDY
  {
    number: 32,
    Icon: FaWind,
    iconColor: "#dedede",
    backgroundColor: "#9e9e9e",
  },
  //CLEAR
  {
    number: 33,
    Icon: IoMdMoon,
    iconColor: "#c7c7c7",
    backgroundColor: "#0a1320",
  },
  {
    number: 34,
    Icon: IoMdMoon,
    iconColor: "#c7c7c7",
    backgroundColor: "#0a1320",
  },
  //CLOUDY NIGHT
  {
    number: 35,
    Icon: IoMdCloudyNight,
    iconColor: "#848484",
    backgroundColor: "#262d36",
  },
  {
    number: 36,
    Icon: IoMdCloudyNight,
    iconColor: "#848484",
    backgroundColor: "#262d36",
  },
  {
    number: 37,
    Icon: IoMdCloudyNight,
    iconColor: "#848484",
    backgroundColor: "#262d36",
  },
  {
    number: 38,
    Icon: IoMdCloudyNight,
    iconColor: "#848484",
    backgroundColor: "#262d36",
  },
];

export default weatherStyles;
