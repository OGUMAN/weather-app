<template>
  <div class="weather-part" @click="hourClicked">
    <div class="weather-part__time">{{ props.hour.time }}</div>
    <BaseWeatherIcon
      class="weather-part__icon"
      :weathercode="getWeatherCodeForHour(props.hour.hourId)"
      :hour="props.hour.hourId"
    />
    <BaseIconDescription
      class="weather-part__description"
      :weathercode="getWeatherCodeForHour(props.hour.hourId)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseWeatherIcon from "@/components/base/BaseWeatherIcon.vue";
import BaseIconDescription from "@/components/base/BaseIconDescription.vue";
import { mapGetters, mapMutations } from "@/store/helpers";

export default defineComponent({
  props: {
    hour: {
      type: Object,
      required: true,
    },
  },

  components: {
    BaseWeatherIcon,
    BaseIconDescription,
  },

  setup(props) {
    console.log(props.hour.hourId);
    const { getWeatherCodeForHour } = mapGetters();
    const { setSelectedHourId, setTimeIsChanged } = mapMutations([
      "setSelectedHourId",
      "setTimeIsChanged",
    ]);

    const hourClicked = (): void => {
      setTimeIsChanged(true);
      setSelectedHourId(props.hour.hourId);
    };

    return {
      getWeatherCodeForHour,
      hourClicked,
      props,
    };
  },
});
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
    font-size: 12px;
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
