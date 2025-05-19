<template>
  <div>
    {{ Math.round(displayValue) }}°
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "~/features/weather/store";

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
});

const weatherStore = useWeatherStore();

const displayValue = computed(() => {
  return weatherStore.temperatureUnit === "fahrenheit" ? (props.value * 9) / 5 + 32 : props.value;
});
</script>
