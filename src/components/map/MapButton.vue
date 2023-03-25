<template>
  <button
    class="button"
    :class="{ 'button--active': props.value === mapMode }"
    @click="setMapMode(props.value)"
  >
    {{ getTranslation(`${props.value}Btn`) }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapMutations } from "@/store/helpers";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { mapMode } = mapState();
    const { getTranslation } = mapGetters();
    const { setMapMode } = mapMutations(["setMapMode"]);

    return { props, getTranslation, setMapMode, mapMode };
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
