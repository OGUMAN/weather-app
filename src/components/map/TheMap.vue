<template>
  <div class="map block">
    <h2 class="title">{{ getTranslation("mapTitle") }}</h2>
    <div class="map__buttons">
      <MapButton :value="'wind'" />
      <MapButton :value="'temp'" />
      <MapButton :value="'clouds'" />
      <MapButton :value="'rain'" />
      <MapButton :value="'pressure'" />
      <MapButton :value="'radar'" />
    </div>
    <MapWidget />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MapButton from "@/components/map/MapButton.vue";
import MapWidget from "@/components/map/MapWidget.vue";
import { mapGetters } from "@/store/helpers";

export default defineComponent({
  components: {
    MapButton,
    MapWidget,
  },
  setup() {
    const { getTranslation } = mapGetters();

    return { getTranslation };
  },
});
</script>

<style lang="scss" scoped>
.map {
  &__buttons {
    margin-bottom: 10px;
  }
}
</style>
