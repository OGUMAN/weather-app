<template>
  <v-btn :variant="store.mapMode===props.value ? 'elevated' : 'outlined'" color="blue" @click="store.$patch({mapMode: props.value})">
    {{ store.getTranslation(`${props.value}Btn`) }}
  </v-btn>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store';
const store = useMainStore();

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>
