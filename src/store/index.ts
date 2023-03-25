import translations from "@/data/translations.json";
import { createStore } from "vuex";
import { languageType, ISelectedSearchResult, IHourWeather } from "../types";

export default createStore({
  state: {
    loaded: false as boolean,
    searchValue: "" as string,
    selectedSearchResult: {
      name: "Київ", // Kyiv
    } as ISelectedSearchResult,
    isSearchOpen: false as boolean,
    language: "uk" as languageType,
    hourly: {} as IHourWeather,
    currentWeather: {} as IHourWeather,
    selectedDayId: 0 as number, // id of the day of week from 0 to 6
    selectedHourId: 11 as number, // id of the hour of day from 0 to 23
    timeIsChanged: false as boolean,
    weekDaysWeather: {} as object,
    timezone: "" as string,
    translations: translations as object,
  },
  getters: {
    getWeatherForHour: (state) => {
      const hourId = state.selectedDayId * 24 + state.selectedHourId;
      const windDegrees = state.hourly.winddirection_10m[hourId];
      let windDirection = "";

      if (windDegrees >= 337.5 || windDegrees < 22.5) {
        windDirection = "N";
      } else if (windDegrees >= 22.5 && windDegrees < 67.5) {
        windDirection = "NE";
      } else if (windDegrees >= 67.5 && windDegrees < 112.5) {
        windDirection = "E";
      } else if (windDegrees >= 112.5 && windDegrees < 157.5) {
        windDirection = "SE";
      } else if (windDegrees >= 157.5 && windDegrees < 202.5) {
        windDirection = "S";
      } else if (windDegrees >= 202.5 && windDegrees < 247.5) {
        windDirection = "SW";
      } else if (windDegrees >= 247.5 && windDegrees < 292.5) {
        windDirection = "W";
      } else if (windDegrees >= 292.5 && windDegrees < 337.5) {
        windDirection = "NW";
      }

      return {
        time: state.hourly.time[hourId],
        weathercode: state.hourly.weathercode[hourId],
        temperature: state.hourly.temperature_2m[hourId],
        apparentTemperature: state.hourly.apparent_temperature[hourId],
        windSpeed: state.hourly.windspeed_120m[hourId],
        windDirection: windDirection,
        humidity: state.hourly.relativehumidity_2m[hourId],
        pressure: state.hourly.pressure_msl[hourId],
        precipitationProbability:
          state.hourly.precipitation_probability[hourId],
      };
    },
    getWeatherCodeForHour: (state) => (hourId: number) => {
      return state.hourly.weathercode[state.selectedDayId * 24 + hourId];
    },
    getTranslation: (state: any) => (key: keyof languageType) => {
      return state.translations[key][state.language];
    },
  },
  mutations: {
    setSearchValue(state, value: string) {
      state.searchValue = value;
    },
    setIsSearchOpen(state, value: boolean) {
      state.isSearchOpen = value;
    },
    setHourly(state, value: IHourWeather) {
      state.hourly = value;
    },
    setSelectedDayId(state, value: number) {
      state.selectedDayId = value;
    },
    setTimeIsChanged(state, value: boolean) {
      state.timeIsChanged = value;
    },
    setSelectedHourId(state, value: number) {
      state.selectedHourId = value;
    },
    setSelectedSearchResult(state, value: ISelectedSearchResult) {
      state.selectedSearchResult = value;
    },
    setLoaded(state, value: boolean) {
      state.loaded = value;
    },
    setLanguage(state, value: languageType) {
      state.language = value;
    },
    setWeekDaysWeather(state, value: object) {
      state.weekDaysWeather = value;
    },
    setTimezone(state, value: string) {
      state.timezone = value;
    },
    setCurrentWeather(state, value: IHourWeather) {
      state.currentWeather = value;
    },
  },
  actions: {},
  modules: {},
});
