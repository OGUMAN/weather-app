<template>
  <div class="content">
    <TheWeather />
    <TheMap />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheWeather from "@/components/weather/TheWeather.vue";
import TheMap from "@/components/map/TheMap.vue";
import TheFooter from "@/components/footer/TheFooter.vue";

export default defineComponent({
  components: {
    TheWeather,
    TheMap,
    TheFooter,
  },
});
</script>
