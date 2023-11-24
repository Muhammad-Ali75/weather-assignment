import { City } from "../interface/city";
import cities from "cities.json";
import UnknownIcon from "../assets/weather-icons/unknown.svg";
import ClearIcon from "../assets/weather-icons/weather-clear.svg";
import CloudyIcon from "../assets/weather-icons/weather-cloudy.svg";
import FogIcon from "../assets/weather-icons/weather-fog.svg";
import HailIcon from "../assets/weather-icons/weather-hail.svg";
import LightningRainyIcon from "../assets/weather-icons/weather-lightning-rainy.svg";
import LightningIcon from "../assets/weather-icons/weather-lightning.svg";
import NightIcon from "../assets/weather-icons/weather-night.svg";
import PartlyCloudIcon from "../assets/weather-icons/weather-partly-cloudy.svg";
import PouringIcon from "../assets/weather-icons/weather-pouring.svg";
import SnowyHeavyIcon from "../assets/weather-icons/weather-snowy-heavy.svg";
import SnowyRainyIcon from "../assets/weather-icons/weather-snowy-rainy.svg";
import SnowyIcon from "../assets/weather-icons/weather-snowy.svg";
import SunnyIcon from "../assets/weather-icons/weather-sunny.svg";
import SunsetDownIcon from "../assets/weather-icons/weather-sunset-down.svg";
import SunsetUpIcon from "../assets/weather-icons/weather-sunset-up.svg";
import SunsetIcon from "../assets/weather-icons/weather-sunset.svg";
import WindyVariantIcon from "../assets/weather-icons/weather-windy-variant.svg";
import WindyIcon from "../assets/weather-icons/weather-windy.svg";
import { ListProps, UniqueDateInterface } from "../interface/list";

export function getRandomCities() {
  const citiesArray: City[] = cities as City[];
  for (let i = citiesArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [citiesArray[i], citiesArray[j]] = [citiesArray[j], citiesArray[i]];
  }
  const selectedCities = citiesArray.slice(0, 18);
  return selectedCities;
}

export function getWeatherIcon(weather: string) {
  switch (weather) {
    case "clear sky":
      return ClearIcon;
    case "fog":
      return FogIcon;
    case "scattered clouds":
    case "overcast clouds":
      return CloudyIcon;
    case "haze":
      return HailIcon;
    case "thunderstorm with rain":
    case "thunderstorm with light rain":
    case "thunderstorm with heavy rain":
    case "thunderstorm with light drizzle":
    case "thunderstorm with drizzle":
    case "thunderstorm with heavy drizzle":
      return LightningRainyIcon;
    case "light thunderstorm":
    case "thunderstorm":
    case "heavy thunderstorm":
    case "ragged thunderstorm":
      return LightningIcon;
    case "Night":
      return NightIcon;
    case "few clouds":
    case "broken clouds":
      return PartlyCloudIcon;
    case "light rain":
      return PouringIcon;
    case "heavy snow":
      return SnowyHeavyIcon;
    case "rain and snow":
      return SnowyRainyIcon;
    case "snow":
    case "light snow":
      return SnowyIcon;
    case "sunny":
      return SunnyIcon;
    case "sunsetdown":
      return SunsetDownIcon;
    case "sunsetup":
      return SunsetUpIcon;
    case "sunset":
      return SunsetIcon;
    case "windyvariant":
      return WindyVariantIcon;
    case "windy":
      return WindyIcon;

    default:
      return UnknownIcon;
  }
}

export function unitSign(unit: string) {
  switch (unit) {
    case "imperial":
      return "ºF";
    case "metric":
      return "ºC";
    case "standard":
      return "ºK";
    default:
      return "ºC";
  }
}

export function msToTimeString(ms: number, timeMode: boolean) {
  const date = new Date(ms);

  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !timeMode,
  });

  return timeString;
}

export function filter5daysData(list: ListProps[]) {
  const uniqueDates: UniqueDateInterface = {};

  const filteredList = list.reduce((acc: ListProps[], item: ListProps) => {
    const date = item.dt_txt.split(" ")[0];

    if (!uniqueDates[date]) {
      uniqueDates[date] = true;
      acc.push(item);
    }

    return acc;
  }, []);

  return filteredList;
}
