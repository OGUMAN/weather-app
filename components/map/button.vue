<template>
  <v-btn
    :variant="store.mapMode === props.value ? 'elevated' : 'outlined'"
    color="blue"
    @click="store.mapMode = props.value"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts" setup>
import type { MapMode } from "~/assets/types";
import { useMainStore } from "~/store";
const store = useMainStore();

const props = defineProps({
  value: {
    type: String as PropType<MapMode>,
    required: true,
  },
});
</script>
