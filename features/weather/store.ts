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
          windDirection: windDirection as WindDirection,
          humidity: state.hourly.relativehumidity_2m[hourId],
          pressure: state.hourly.pressure_msl[hourId],
          precipitationProbability:
            state.hourly.precipitation_probability[hourId],
        };
      },
      getWeatherCodeForHour: (state) => (hourId: number) => {
        return state.hourly.weathercode[state.selectedDayId * 24 + hourId];
      },
    },
  
    actions: {},
  });
  