<template>
  <div>{{ Math.round(props.value) }}°</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
});
</script>
