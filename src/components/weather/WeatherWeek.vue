<template>
  <div class="week">
    <WeatherWeekDay
      v-for="(date, index) in weekDaysWeather.time"
      :key="index"
      :date="date"
      :weathercode="weekDaysWeather.weathercode[index]"
      :minTemperature="weekDaysWeather.temperature_2m_min[index]"
      :maxTemperature="weekDaysWeather.temperature_2m_max[index]"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeatherWeekDay from "@/components/weather/WeatherWeekDay.vue";
import { mapState } from "@/store/helpers";

export default defineComponent({
  components: {
    WeatherWeekDay,
  },

  setup() {
    const { weekDaysWeather } = mapState();
    return { weekDaysWeather };
  },
});
</script>

<style lang="scss" scoped>
.week {
  display: flex;
  overflow-x: auto;
  padding-bottom: 4px; // to see box-shadow
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 858px) {
    & {
      padding-bottom: 0;
      overflow-x: visible;
    }
  }
}
</style>
