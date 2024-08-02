<template>
  <div class="schedule">
    <WeatherScheduleItem
      v-for="(hour, index) in scheduleHours[
        screenWidth >= 685 ? 'desktop' : 'mobile'
      ]"
      :hour="hour"
      :key="index"
    />
  </div>
</template>

<script lang="ts" setup>
import scheduleHours from "~/features/weather/schedule/hours.json";

const screenWidth = ref<number>(window.innerWidth);
onMounted(() => {
  window.addEventListener("resize", (): void => {
    screenWidth.value = window.innerWidth;
  });
});
</script>

<style lang="scss" scoped>
.schedule {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

@media screen and (min-width: 535px) {
  .schedule {
    padding-left: 15px;
    width: 100%;
  }
}
</style>
