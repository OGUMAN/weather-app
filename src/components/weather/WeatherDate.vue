<template>
  <div class="date">
    {{ timeIsChanged ? selectedTime : currentTime }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch, ref } from "vue";
import { mapState, mapGetters } from "@/store/helpers";

export default defineComponent({
  setup() {
    const { timeIsChanged, language, timezone } = mapState();
    const { getWeatherForHour } = mapGetters();
    const datetime = ref();

    const loadTime = (): void => {
      fetch(`https://worldtimeapi.org/api/timezone/${timezone.value}`).then(
        (res: Response) =>
          res.json().then((data) => {
            datetime.value = data.datetime;
          })
      );
    };

    const currentTime = computed(() => {
      return new Date(datetime.value).toLocaleTimeString(language.value, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: timezone.value,
      } as Intl.DateTimeFormatOptions);
    });

    const selectedTime = computed(() => {
      return new Date(getWeatherForHour.value.time).toLocaleTimeString(
        language.value,
        {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        } as Intl.DateTimeFormatOptions
      );
    });

    onMounted(() => {
      loadTime();
    });

    watch(timezone, () => {
      loadTime();
    });

    return {
      timeIsChanged,
      getWeatherForHour,
      currentTime,
      selectedTime,
    };
  },
});
</script>

<style lang="scss" scoped>
.date {
  margin-bottom: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
