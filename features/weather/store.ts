import type {
  IHourWeather,
  IWeekDaysWeather,
  WindDirection,
} from "@/assets/types";

export const useWeatherStore = definePiniaStore("weatherStore", {
  state: () => ({
    hourly: {} as IHourWeather,
    currentWeather: {} as IHourWeather,
    selectedDayId: 0 as number, // id of the day of week from 0 to 6
    selectedHourId: 11 as number, // id of the hour of day from 0 to 23
    timeIsChanged: false as boolean,
    weekDaysWeather: {} as IWeekDaysWeather,
    timezone: "" as string,
  }),

  actions: {
    getWeatherForHour(hourId: number) {
      const windDegrees = this.hourly.winddirection_10m[hourId];
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
        time: this.hourly.time[hourId],
        weathercode: this.hourly.weathercode[hourId],
        temperature: this.hourly.temperature_2m[hourId],
        apparentTemperature: this.hourly.apparent_temperature[hourId],
        windSpeed: this.hourly.windspeed_120m[hourId],
        windDirection: windDirection as WindDirection,
        humidity: this.hourly.relativehumidity_2m[hourId],
        pressure: this.hourly.pressure_msl[hourId],
        precipitationProbability: this.hourly.precipitation_probability[hourId],
      };
    },
    async fetchWeatherData (
      selectedSearchResult: { lat: number; lon: number },
    ): Promise<void> {
      const { lat, lon } = selectedSearchResult;
    
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,windspeed_120m,pressure_msl,relativehumidity_2m,weathercode,winddirection_10m&daily=weathercode,sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&relativehumidity_2m,apparent_temperature&windspeed_unit=ms&timezone=auto`;
    
      const response = await fetch(url);
      const data = await response.json();
    
      this.weekDaysWeather = data.daily;
      this.timezone = data.timezone;
      this.selectedHourId = Number(
        new Date(data.current_weather.time).toLocaleTimeString("uk", {
          hour: "numeric",
        })
      );
      this.currentWeather = data.current_weather.time;
      this.hourly = data.hourly;
    },
    
    getWeatherCodeForHour(hourId: number): number {
      return this.hourly.weathercode[hourId + this.selectedDayId * 24];
    },
  },

  getters: {
    getCurrentWeather(state) {
      return useWeatherStore().getWeatherForHour(new Date().getHours());
    },
    getSelectedHourWeather(state) {
      return useWeatherStore().getWeatherForHour(
        state.selectedDayId * 24 + state.selectedHourId
      );
    },
  },
});
