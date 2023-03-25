<template>
  <div class="icon-description">
    {{ description }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { mapState } from "@/store/helpers";
import weatherIcons from "@/data/weathercodes.json";
import { IStatus, weatherIconsKeyType } from "@/types";

export default defineComponent({
  props: {
    weathercode: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { language } = mapState();

    const description = computed(() => {
      const statusObject =
        weatherIcons[props.weathercode.toString() as weatherIconsKeyType]
          .status; // getting .status object with 3 different languages
      return typeof statusObject === "string"
        ? statusObject
        : statusObject[language.value as keyof IStatus];
    });

    return {
      description,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-description {
  color: #505050;
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
