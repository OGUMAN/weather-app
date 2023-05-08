<template>
  <div class="details">
    <div class="details__item">
      <div class="details__property">
        {{ store.getTranslation("apparentTemperature") }}
      </div>
      <div class="details__connector"></div>
      <div class="details__value">
        <span
          ><BaseTemperature :value="store.getWeatherForHour.apparentTemperature"
        /></span>
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">{{ store.getTranslation("wind") }}</div>
      <div class="details__connector"></div>
      <div class="details__value">
        {{ Math.round(store.getWeatherForHour.windSpeed) }}
        {{ store.getTranslation("metersPerSecond") }},
        {{ store.getTranslation(store.getWeatherForHour.windDirection) }}
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">
        {{ store.getTranslation("precipitation") }}
      </div>
      <div class="details__connector"></div>
      <div class="details__value">
        {{ store.getWeatherForHour.precipitationProbability }}%
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">{{ store.getTranslation("humidity") }}</div>
      <div class="details__connector"></div>
      <div class="details__value">{{ store.getWeatherForHour.humidity }}%</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";
const store = useMainStore();
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
