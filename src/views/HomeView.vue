<template>
  <div class="content">
    <TheWeather />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheWeather from "@/components/weather/TheWeather.vue";

export default defineComponent({
  components: {
    TheWeather,
  },
});
</script>
