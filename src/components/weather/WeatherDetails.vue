<template>
  <div class="details">
    <div class="details__item">
      <div class="details__property">
        {{ getTranslation("apparentTemperature") }}
      </div>
      <div class="details__connector"></div>
      <div class="details__value">
        <span
          ><BaseTemperature :value="getWeatherForHour.apparentTemperature"
        /></span>
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">{{ getTranslation("wind") }}</div>
      <div class="details__connector"></div>
      <div class="details__value">
        {{ Math.round(getWeatherForHour.windSpeed) }}
        {{ getTranslation("metersPerSecond") }},
        {{ getTranslation(getWeatherForHour.windDirection) }}
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">
        {{ getTranslation("precipitation") }}
      </div>
      <div class="details__connector"></div>
      <div class="details__value">
        {{ getWeatherForHour.precipitationProbability }}%
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">{{ getTranslation("humidity") }}</div>
      <div class="details__connector"></div>
      <div class="details__value">{{ getWeatherForHour.humidity }}%</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "@/store/helpers";
import BaseTemperature from "@/components/base/BaseTemperature.vue";

export default defineComponent({
  components: {
    BaseTemperature,
  },

  setup() {
    const { getWeatherForHour, getTranslation } = mapGetters();
    const { language } = mapState();

    return { getWeatherForHour, getTranslation, language };
  },
});
</script>

<style lang="scss" scoped>
.details {
  margin-bottom: 15px;

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }

  &__connector {
    height: 2px;
    width: 100%;
    border-bottom: 0.5px dotted #adadad;
  }

  &__property {
    margin-right: 10px;
  }

  &__value {
    margin-left: 10px;
    font-weight: 600;
  }

  &__property,
  &__value {
    flex-shrink: 0;
  }
}
</style>
