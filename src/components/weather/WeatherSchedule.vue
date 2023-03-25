<template>
  <div class="schedule">
    <WeatherScheduleHour
      v-for="(hour, index) in scheduleHours[
        screenWidth >= 685 ? 'desktop' : 'mobile'
      ]"
      :hour="hour"
      :key="index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import WeatherScheduleHour from "@/components/weather/WeatherScheduleHour.vue";
import scheduleHours from "@/data/scheduleHours.json";

export default defineComponent({
  components: { WeatherScheduleHour },

  setup() {
    const screenWidth = ref<number>(window.innerWidth);

    onMounted(() => {
      window.addEventListener("resize", (): void => {
        screenWidth.value = window.innerWidth;
      });
    });

    return { scheduleHours, screenWidth };
  },
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
