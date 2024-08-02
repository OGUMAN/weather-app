<template>
  <div class="weather-part" @click="hourClicked">
    <div class="weather-part__time">{{ props.hour.time }}</div>
    <BaseIcon
      class="weather-part__icon"
      :weathercode="store.getWeatherCodeForHour(props.hour.hourId)"
      :hour="props.hour.hourId"
    />
    <BaseIconDescription
      class="weather-part__description"
      :weathercode="store.getWeatherCodeForHour(props.hour.hourId)"
    />
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../../store";

const store = useWeatherStore();

const props = defineProps({
  hour: {
    type: Object,
    required: true,
  },
});

const hourClicked = (): void => {
  store.$patch({ timeIsChanged: true });
  store.$patch({ selectedHourId: props.hour.hourId });
};
</script>

<style lang="scss" scoped>
.weather-part {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: calc(25% - 10px);
  text-align: center;

  &__time {
    margin-bottom: 5px;
    font-size: 15px;
    color: #313131;
    font-weight: 400;
  }

  &__icon {
    margin-bottom: 7px;
  }

  &__description {
    color: #000000;
    font-weight: 400;
  }
  @media screen and (min-width: 535px) {
    & {
      width: 50%;
    }
  }

  @media screen and (min-width: 685px) {
    & {
      width: 25%;
    }
  }
}
</style>
