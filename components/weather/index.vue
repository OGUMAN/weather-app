<template>
  <div class="weather" v-if="!loading">
    <WeatherWeek />
    <div class="weather__info block">
      <div class="weather__flex">
        <div class="weather__left">
          <h1 class="weather__title title">
            {{ store.selectedSearchResult.name }}
          </h1>
          <WeatherTime />
          <div class="weather__heading">
            <BaseTemperature
              class="weather__temperature"
              :value="store.getWeatherForHour.temperature"
            />
            <BaseIcon
              :hour="store.selectedHourId"
              class="weather__icon"
              :weathercode="store.getWeatherForHour.weathercode"
            />
            <BaseIconDescription
              :weathercode="store.getWeatherForHour.weathercode"
            />
          </div>
          <WeatherDetails />
        </div>
        <WeatherSchedule />
      </div>
      <WeatherRange />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";

const store = useMainStore();
const loading = ref<boolean>(true);

const loadWeather = (): void => {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${store.selectedSearchResult.lat}&longitude=${store.selectedSearchResult.lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,windspeed_120m,pressure_msl,relativehumidity_2m,weathercode,winddirection_10m&daily=weathercode,sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&relativehumidity_2m,apparent_temperature&windspeed_unit=ms&timezone=auto`
  )
    .then((res: Response) => res.json())
    .then((data) => {
      store.$patch({ weekDaysWeather: data.daily });
      store.$patch({ timezone: data.timezone });
      store.$patch({
        selectedHourId: Number(
          new Date(data.current_weather.time).toLocaleTimeString("uk", {
            hour: "numeric",
          })
        ),
      });
      store.$patch({ currentWeather: data.current_weather.time });
      store.$patch({ hourly: data.hourly });
      loading.value = false;
    });
};

onMounted(() => {
  loadWeather();
  console.log(store.hourly);
});

watch(store.selectedSearchResult, () => {
  loadWeather();
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
