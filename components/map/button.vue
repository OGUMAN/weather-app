<template>
  <button
    class="button"
    :class="{ 'button--active': props.value === store.mapMode }"
    @click="store.$patch({mapMode: props.value})"
  >
    {{ store.getTranslation(`${props.value}Btn`) }}
  </button>
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

<style lang="scss" scoped>
.button {
  font-size: 14px;
  font-weight: 500;
  background: #cbe3ff;
  border: none;
  border-radius: 5px;
  padding: 7px 13px;
  margin-right: 10px;
  margin-bottom: 7.5px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #4a7db8;
    color: #ffffff;
  }
}

.button--active {
  background: #4a7db8;
  color: #ffffff;
}
</style>
