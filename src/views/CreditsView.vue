<template>
  <div class="content">
    <div class="credits block">
      <h1 class="title">{{ getTranslation("credits") }}</h1>
      <div class="credits__text">
        {{ getTranslation("creditsText") }}
      </div>
      <a
        class="credits__link"
        href="https://www.amcharts.com/free-animated-svg-weather-icons"
        target="_blank"
        >Free animated SVG weather icons by amCharts
      </a>
      <a
        class="credits__link"
        href="https://github.com/lipis/flag-icons"
        target="_blank"
        >SVG pack of all country flags by lipis
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "@/store/helpers";

export default defineComponent({
  setup() {
    const { getTranslation } = mapGetters();

    return { getTranslation };
  },
});
</script>

<style lang="scss" scoped>
.credits {
  &__text {
    margin-bottom: 10px;
  }

  &__link {
    margin-bottom: 10px;
    display: block;
    color: blue;
  }
}
</style>
