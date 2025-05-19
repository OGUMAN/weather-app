<template>
  <img ref="iconRef" :src="icon" alt="Weather state icon" />
</template>

<script lang="ts" setup>
import icons from "@/assets/icons";
import { useWeatherStore } from "~/features/weather/store";
const store = useWeatherStore();
const iconRef = ref(null);

const props = defineProps({
  weathercode: {
    type: Number,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
});

const iconTime = (): "dayIcon" | "nightIcon" => {
  if (
    props.hour >
      Number(
        new Date(
          store.weekDaysWeather.sunrise[store.selectedDayId]
        ).toLocaleTimeString("uk", {
          hour: "numeric",
        })
      ) &&
    props.hour <
      Number(
        new Date(
          store.weekDaysWeather.sunset[store.selectedDayId]
        ).toLocaleTimeString("uk", {
          hour: "numeric",
        })
      )
  ) {
    return "dayIcon";
  } else {
    return "nightIcon";
  }
};

const icon = computed(() => {
  return icons[props.weathercode.toString() as keyof typeof icons][iconTime()];
});
</script>
