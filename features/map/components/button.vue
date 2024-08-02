<template>
  <v-btn
    :variant="store.mode === props.value ? 'elevated' : 'outlined'"
    color="blue"
    @click="store.mode = props.value"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts" setup>
import type { MapMode } from "~/features/map/types";
import { useMapStore } from "../store";
const store = useMapStore();

const props = defineProps({
  value: {
    type: String as PropType<MapMode>,
    required: true,
  },
});
</script>
