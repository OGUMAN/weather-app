<template>
  <div class="weather" v-if="!loading">
    <WeatherWeek />
    <div class="weather__info block">
      <div class="weather__flex">
        <div class="weather__left">
          <h1 class="weather__title title">{{ selectedSearchResult.name }}</h1>
          <WeatherDate />
          <div class="weather__heading">
            <BaseTemperature
              class="weather__temperature"
              :value="getWeatherForHour.temperature"
            />
            <BaseWeatherIcon
              :hour="selectedHourId"
              class="weather__icon"
              :weathercode="getWeatherForHour.weathercode"
            />
            <BaseIconDescription :weathercode="getWeatherForHour.weathercode" />
          </div>
          <WeatherDetails />
        </div>
        <WeatherSchedule />
      </div>
      <WeatherRange />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import BaseWeatherIcon from "@/components/base/BaseWeatherIcon.vue";
import BaseIconDescription from "@/components/base/BaseIconDescription.vue";
import BaseTemperature from "@/components/base/BaseTemperature.vue";
import WeatherSchedule from "@/components/weather/WeatherSchedule.vue";
import WeatherRange from "@/components/weather/WeatherRange.vue";
import WeatherDetails from "@/components/weather/WeatherDetails.vue";
import WeatherWeek from "@/components/weather/WeatherWeek.vue";
import WeatherDate from "@/components/weather/WeatherDate.vue";
import { mapState, mapGetters, mapMutations } from "@/store/helpers";
import { ISearchResult } from "@/types";

export default defineComponent({
  components: {
    BaseWeatherIcon,
    BaseIconDescription,
    BaseTemperature,
    WeatherRange,
    WeatherSchedule,
    WeatherDetails,
    WeatherWeek,
    WeatherDate,
  },
  setup() {
    const loading = ref<boolean>(true);
    const { selectedSearchResult, language, selectedHourId } = mapState();
    const {
      setHourly,
      setSelectedHourId,
      setSelectedSearchResult,
      setWeekDaysWeather,
      setTimezone,
      setCurrentWeather,
    } = mapMutations([
      "setHourly",
      "setSelectedHourId",
      "setSelectedSearchResult",
      "setWeekDaysWeather",
      "setTimezone",
      "setCurrentWeather",
    ]);
    const { getWeatherForHour } = mapGetters();

    const loadWeather = (): void => {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${selectedSearchResult.value.lat}&longitude=${selectedSearchResult.value.lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,windspeed_120m,pressure_msl,relativehumidity_2m,weathercode,winddirection_10m&daily=weathercode,sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&relativehumidity_2m,apparent_temperature&windspeed_unit=ms&timezone=auto`
      )
        .then((res: Response) => res.json())
        .then((data) => {
          setWeekDaysWeather(data.daily);
          setTimezone(data.timezone);
          setSelectedHourId(
            Number(
              new Date(data.current_weather.time).toLocaleTimeString("uk", {
                hour: "numeric",
              })
            )
          );
          setCurrentWeather(data.current_weather.time);
          setHourly(data.hourly);
          loading.value = false;
        });
    };

    const loadSearch = (): void => {
      fetch(
        `https://api.locationiq.com/v1/autocomplete?key=YOUR_API_KEY&q=${selectedSearchResult.value.name}&dedupe=1&accept-language=${language.value}`
      )
        .then((res: Response) => res.json())
        .then((data: ISearchResult[]) => {
          const kyiv = data[0]; //first result is Kyiv (capital of Ukraine)
          setSelectedSearchResult({
            name: kyiv.address.name,
            lat: kyiv.lat,
            lon: kyiv.lon,
          });
        });
    };

    onMounted(() => {
      loadWeather();
      loadSearch();
    });

    watch(selectedSearchResult, () => {
      loadWeather();
    });

    return {
      loading,
      getWeatherForHour,
      selectedSearchResult,
      selectedHourId,
    };
  },
});
</script>

<style lang="scss" scoped>
.weather {
  padding: 15px 0;

  &__left {
    width: 100%;
  }

  &__heading {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__title {
    margin-bottom: 5px !important;
  }

  &__temperature {
    font-size: 48px;
    margin-right: 10px;
  }

  &__icon {
    margin-right: 10px;
    width: 50px;
  }

  @media screen and (min-width: 858px) {
    & {
      padding-top: 25px;
    }

    &__info {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  @media screen and (min-width: 535px) {
    &__flex {
      display: flex;
      justify-content: space-between;
    }

    &__left {
      max-width: 335px;
      min-width: 265px;
      padding-right: 30px;
      border-right: 0.5px #bfbfbf solid;
    }
  }
}
</style>
