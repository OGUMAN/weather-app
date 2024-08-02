<template>
  <div class="range">
    <v-slider
      :ticks="rawTicks"
      show-ticks="always"
      step="1"
      tick-size="0"
      :max="23"
      thumb-size="15"
      :tick-label="tickLabels"
      v-model="store.selectedHourId"
    >
      <template #tick-label="{ tick, index }">
        <div class="range__tick">
          <div class="range__tick-line"></div>
          <div class="range__tick-text">{{ tickLabels[index] }}</div>
        </div>
      </template>
    </v-slider>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { useWeatherStore } from "../store";

const store = useWeatherStore();

const rawTicks = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
const tickLabels = formatTicks(rawTicks);

function formatTicks(ticks: number[]): string[] {
  return ticks.map((hour) => dayjs().hour(hour).minute(0).format("HH:mm"));
}

watch(
  () => store.selectedHourId,
  () => {
    store.timeIsChanged = true;
  }
);
</script>

<style lang="scss" scoped>
.range {
  &__tick {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-line {
      width: 1px;
      height: 7px;
      background: #000;
    }

    &-text {
      font-size: 13px !important;
    }
  }
}

:deep(.v-slider-track__fill) {
  display: none;
}

:deep(.v-slider-thumb__surface) {
  border-radius: 0;
}
</style>
