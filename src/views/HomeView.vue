<template>
  <div class="content">
    <TheWeather />
    <TheMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheWeather from "@/components/weather/TheWeather.vue";
import TheMap from "@/components/map/TheMap.vue";

export default defineComponent({
  components: {
    TheWeather,
    TheMap,
  },
});
</script>
