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
          <div v-if="shouldShowTick(index)" class="range__tick-tick"></div>
          <div v-if="shouldShowText(index)" class="range__tick-text">
            {{ tickLabels[index] }}
          </div>
        </div>
      </template>
    </v-slider>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { useWeatherStore } from "../store";

const { width } = useWindowSize();
const store = useWeatherStore();

const rawTicks = Array.from({ length: 22 }, (_, i) => i + 1);
const tickLabels = rawTicks.map(hour => dayjs().hour(hour).minute(0).format("HH:mm"));

const shouldShowTick = (index: number) => width.value > 600 || index % 2 === 0;
const shouldShowText = (index: number) => width.value > 600 ? index % 2 === 0 : index % 4 === 0;

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

    &-tick {
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
