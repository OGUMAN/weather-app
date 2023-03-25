import weatherIcons from "@/data/weathercodes.json";

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

export type languageType = "uk" | "en" | "ru";

export interface IStatus {
  uk: string;
  ru: string;
  en: string;
}

export type weatherIconsKeyType = keyof typeof weatherIcons;

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

export interface IWeekDayWeather {
  weathercode: number;
  maxTemperature: number;
  minTemperature: number;
  date: string;
}

export type mapModeType =
  | "wind"
  | "temp"
  | "clouds"
  | "rain"
  | "pressure"
  | "radar";
