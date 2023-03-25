<template>
  <img :src="iconSrc" :alt="iconSrc" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import weatherIcons from "@/data/weathercodes.json";
import { weatherIconsKeyType } from "@/types";
import { mapState } from "@/store/helpers";

export default defineComponent({
  props: {
    weathercode: {
      type: Number,
      required: true,
    },
    hour: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { weekDaysWeather, selectedDayId } = mapState();

    const iconSrc = computed(() => {
      let dayOrNight: "day" | "night";

      if (
        props.hour >
          Number(
            new Date(
              weekDaysWeather.value.sunrise[selectedDayId.value]
            ).toLocaleTimeString("uk", {
              hour: "numeric",
            })
          ) &&
        props.hour <
          Number(
            new Date(
              weekDaysWeather.value.sunset[selectedDayId.value]
            ).toLocaleTimeString("uk", {
              hour: "numeric",
            })
          )
      ) {
        dayOrNight = "day";
      } else {
        dayOrNight = "night";
      }

      return require(`@/assets/images/weather-icons/${
        weatherIcons[props.weathercode.toString() as weatherIconsKeyType][
          `${dayOrNight}Icon`
        ]
      }`);
    });

    return {
      iconSrc,
    };
  },
});
</script>
