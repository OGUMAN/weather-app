<template>
  <div>{{ Math.round(value) }}°</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>
