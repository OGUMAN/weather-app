<template>
  <div class="details">
    <div class="details__item">
      <div class="details__property">
        {{ $t("APPARENT_TEMPERATURE") }}
      </div>
      <div class="details__connector"></div>
      <div class="details__value">
        <span
          ><BaseTemperature
            :value="store.getWeatherForHour.apparentTemperature"
        /></span>
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">{{ $t("WIND") }}</div>
      <div class="details__connector"></div>
      <div class="details__value">
        {{ Math.round(store.getWeatherForHour.windSpeed) }}
        {{ $t("METERS_PER_SECOND") }},
        {{ $t(store.getWeatherForHour.windDirection.toUpperCase()) }}
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">
        {{ $t("PRECIPITATION") }}
      </div>
      <div class="details__connector"></div>
      <div class="details__value">
        {{ store.getWeatherForHour.precipitationProbability }}%
      </div>
    </div>
    <div class="details__item">
      <div class="details__property">
        {{ $t("HUMIDITY") }}
      </div>
      <div class="details__connector"></div>
      <div class="details__value">{{ store.getWeatherForHour.humidity }}%</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../store";

const store = useWeatherStore();
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
