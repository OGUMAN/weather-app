import weatherIcons from "~/assets/icons";

export interface ISearchResult {
  address: {
    country_code?: string;
    name: string;
    county?: string;
    state?: string;
    country?: string;
  };
  lat?: string;
  lon?: string;
}

export interface IResponseError {
  error: string;
}

export interface IStatus {
  uk: string;
  ru: string;
  en: string;
}

export type WeatherIconsKeyType = keyof typeof weatherIcons;

export interface IHourWeather {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  windspeed_120m: number[];
  winddirection_10m: number[];
  relativehumidity_2m: number[];
  pressure_msl: number[];
  weathercode: number[];
  precipitation_probability: number[];
}

export interface ISelectedSearchResult {
  lat?: string;
  lon?: string;
  name: string;
}

export interface IWeekDaysWeather {
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  date: string[];
  time: string[];
  sunrise: string[];
  sunset: string[];
}

export enum WindDirection {
  N = "N",
  NE = "NE",
  E = "E",
  SE = "SE",
  S = "S",
  SW = "SW",
  W = "W",
  NW = "NW",
}

export enum MapMode {
  WIND = "wind",
  TEMPERATURE = "temp",
  CLOUDS = "clouds",
  RAIN = "rain",
  PRESSURE = "pressure",
  RADAR = "radar",
}

export enum LangCode {
  RU = "ru",
  UK = "uk",
  EN = "en",
}
