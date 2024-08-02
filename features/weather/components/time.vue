<template>
  <div class="date">
    {{ store.timeIsChanged ? selectedTime : currentTime }}
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../store";

const store = useWeatherStore();
const datetime = ref();
const { locale } = useI18n();

const loadTime = (): void => {
  fetch(`https://worldtimeapi.org/api/timezone/${store.timezone}`).then(
    (res: Response) =>
      res.json().then((data) => {
        datetime.value = data.datetime;
      })
  );
};

const currentTime = computed(() => {
  return new Date(datetime.value).toLocaleTimeString(locale.value, {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: store.timezone,
  } as Intl.DateTimeFormatOptions);
});

const selectedTime = computed(() => {
  return new Date(store.getWeatherForHour.time).toLocaleTimeString(
    locale.value,
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

watch(
  () => store.timezone,
  () => {
    loadTime();
  }
);
</script>

<style lang="scss" scoped>
.date {
  margin-bottom: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
