<template>
  <div class="range">
    <v-slider
      :ticks="rawTicks"
      show-ticks="always"
      step="1"
      tick-size="2"
      :max="23"
      :tick-label="tickLabels"
      @input="rangeOnChange"
    >
    <template #tick-label="{ tick, index }">
      <span>{{ tickLabels[index] }}</span>
    </template>
  </v-slider>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { useMainStore } from "@/store";

const store = useMainStore();

const rawTicks = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
const tickLabels = formatTicks(rawTicks);

function formatTicks (ticks: number[]): string[] {
  return ticks.map(hour => dayjs().hour(hour).minute(0).format('HH:mm'));
};

const rangeOnChange = (event: Event): void => {
  store.$patch({
    selectedHourId: parseInt((event.target as HTMLInputElement).value),
  });
  store.$patch({ timeIsChanged: true });
};
</script>



<style lang="scss" scoped>
.range {

}
</style>
