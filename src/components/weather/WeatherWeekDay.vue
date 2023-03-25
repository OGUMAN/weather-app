<template>
  <div
    class="weather-day block"
    :class="{ 'weather-day--selected': index === selectedDayId }"
    @click="dayClicked(index)"
    v-if="loading"
  >
    <div class="weather-day__date">
      <div class="weather-day__title">{{ dayInfo.weakday }}</div>
      <div class="weather-day__day">{{ dayInfo.monthday }}</div>
    </div>
    <BaseWeatherIcon
      class="weather-day__icon"
      :weathercode="weathercode"
      :hour="12"
    />
    <div class="weather-day__temperature-range">
      <BaseTemperature :value="maxTemperature" class="weather-day__max" />
      <BaseTemperature :value="minTemperature" class="weather-day__min" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { mapState, mapMutations, mapGetters } from "@/store/helpers";
import BaseTemperature from "@/components/base/BaseTemperature.vue";
import BaseWeatherIcon from "@/components/base/BaseWeatherIcon.vue";

export default defineComponent({
  components: {
    BaseWeatherIcon,
    BaseTemperature,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
    weathercode: {
      type: Number,
      required: true,
    },
    minTemperature: {
      type: Number,
      required: true,
    },
    maxTemperature: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { selectedDayId, language, currentWeather } = mapState();
    const {
      setSelectedDayId,
      setTimeIsChanged,
      setCurrentTime,
      setSelectedHourId,
    } = mapMutations([
      "setSelectedDayId",
      "setTimeIsChanged",
      "setCurrentTime",
      "setSelectedHourId",
    ]);
    const { getWeatherForHour } = mapGetters();
    const loading = ref<boolean>(false);

    const weekdayOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      timeZone: "UTC",
    };
    const monthdayOptions: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };

    const dayClicked = (index: number): void => {
      setSelectedDayId(index);

      if (index === 0) {
        // the current day of the week
        setTimeIsChanged(false); // returning to current day, so turning on current time with minutes
        setCurrentTime(
          Number(
            new Date(getWeatherForHour.value.time).toLocaleTimeString("uk", {
              hour: "numeric",
            })
          )
        );
        setSelectedHourId(
          Number(
            new Date(currentWeather.value).toLocaleTimeString("uk", {
              hour: "numeric",
            })
          )
        );
      } else {
        setTimeIsChanged(true);
      }
    };

    const date = new Date(props.date);

    const dayInfo = ref();

    const updateDayInfo = (): void => {
      dayInfo.value = {
        weakday: date.toLocaleDateString(language.value, weekdayOptions),
        monthday: date.toLocaleDateString(language.value, monthdayOptions),
      };
    };

    onMounted(() => {
      updateDayInfo();
      loading.value = true;
    });

    watch(language, () => {
      updateDayInfo();
    });

    return { dayInfo, selectedDayId, setSelectedDayId, dayClicked, loading };
  },
});
</script>

<style lang="scss" scoped>
.weather-day {
  position: relative;
  display: inline-block;
  margin-right: 12.5px;
  margin-bottom: 7px;
  min-width: 175px;
  opacity: 0.5;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }

  &:after {
    display: block;
    background-color: #fff;
    width: 100%;
    height: 4px;
    right: -20px;
    position: absolute;
    bottom: -4px;
    left: 0px;
    display: block;
    content: "";
    transition: opacity 0.2s;
    opacity: 0;
  }

  &--selected {
    opacity: 1;
  }

  &__icon {
    width: 35px;
  }

  &__date {
    margin-right: 10px;
  }

  &__title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
    text-transform: capitalize;
  }

  &__day {
    font-weight: 500;
    font-size: 13px;
    color: #434343;
  }

  &__temperature-range {
    display: none;
  }

  &__icon {
    margin-bottom: 5px;
    height: 35px;
  }

  @media screen and (min-width: 858px) {
    & {
      width: calc(100% / 7);
      min-width: auto;
      margin-right: 0;
      border-radius: 0;
      text-align: center;
      margin-bottom: 0;
      flex-direction: column;

      &:first-child {
        border-top-left-radius: 10px;
      }

      &:last-child {
        border-top-right-radius: 10px;
      }

      &--selected {
        &:after {
          opacity: 1;
        }
      }
    }

    &__max {
      margin-right: 15px;
    }

    &__min {
      opacity: 0.8;
    }

    &__date {
      margin-right: 0 !important;
      margin-bottom: 10px;
    }

    &__title {
      margin-bottom: 2px;
    }

    &__temperature-range {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
