<template>
  <div class="range">
    <input
      class="range__input"
      type="range"
      min="0"
      max="23"
      :value="store.selectedHourId"
      @change="rangeOnChange"
    />
    <div class="range__ticks">
      <div class="range__tick" v-for="(hour, index) in sliderHours" :key="index">
        <div
          class="range__line"
          :class="{ 'range__line--small': index % 2 !== 0 }"
        ></div>
        <div class="range__time" v-if="index % 2 === 0">{{ hour }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import sliderHours from "@/assets/data/sliderHours.json";
import { useMainStore } from "@/store";
const store = useMainStore();

const rangeOnChange = (event: Event): void => {
  store.$patch({
    selectedHourId: parseInt((event.target as HTMLInputElement).value),
  });
  store.$patch({ timeIsChanged: true });
};
</script>

<style lang="scss" scoped>
.range {
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &__input {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    margin-bottom: 2.5px;
    min-width: 700px;
    &::focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      background-color: #868686;
      border-radius: 0px;
      height: 2px;
      padding: 0 12px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      margin-top: -6.5px; /* Centers thumb on the track */
      background-color: #000000;
      border-radius: 0px;
      height: 15px;
      width: 10px;
      position: relative;
      z-index: 2;
    }

    &::-moz-range-track {
      background-color: #868686;
      border-radius: 0px;
      height: 2px;
      padding: 0 12px;
    }

    &::-moz-range-thumb {
      background-color: #000000;
      border: none; /*Removes extra border that FF applies*/
      border-radius: 0px;
      height: 15px;
      width: 10px;
      position: relative;
      z-index: 2;
    }
  }

  &__line {
    width: 1px;
    height: 10px;
    background-color: #868686;
    z-index: 1;
    &--small {
      height: 6px;
    }
  }

  &__ticks {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 5px;
    min-width: 700px;
    margin-bottom: 15px;
    padding: 0 16.5px;
  }

  &__tick {
    position: relative;
  }

  &__time {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
  }
}
</style>
