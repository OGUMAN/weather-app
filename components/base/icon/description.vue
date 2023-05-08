<template>
  <div class="icon-description">
    {{ description }}
  </div>
</template>

<script lang="ts" setup>
import icons from "@/assets/icons";
import { IStatus } from "@/assets/types";
import { useMainStore } from "@/store/index";

const props = defineProps({
  weathercode: {
    type: Number,
    required: true,
  },
});

const store = useMainStore();

const description = computed(() => {
  const statusObject =
    icons[props.weathercode.toString() as keyof typeof icons].status; // getting .status object with 3 different languages
  return typeof statusObject === "string"
    ? statusObject
    : statusObject[store.language as keyof IStatus];
});
</script>

<style lang="scss" scoped>
.icon-description {
  color: #505050;
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
