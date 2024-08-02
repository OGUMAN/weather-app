<template>
  <vue-final-modal
    focus-trap
    esc-to-close
    lockScroll
    :name="props.name"
    classes="base-modal"
    content-class="base-modal__content"
    v-model="showModal"
  >
    <template v-slot:default>
      <div @click="showModal = false" class="base-modal__outside"></div>
      <div
        class="base-modal__window block"
        :style="{
          maxWidth: `${props.width}px`,
        }"
      >
        <div class="base-modal__header">
          <h2><slot name="title" /></h2>
          <v-icon
            @click="handleClose"
            size="25"
            class="base-modal__close"
            icon="mdi:mdi-window-close"
          />
        </div>

        <slot name="content" />
      </div>
    </template>
  </vue-final-modal>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
  width: {
    type: Number,
    required: false,
    default: 450,
  },
});
const showModal = ref(false);

const handleClose = () => {
  showModal.value = false;
};
</script>

<style lang="scss">
.base-modal {
  &__header {
    margin-bottom: 5px; 
  }

  &__outside {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__window {
    position: relative;
    max-height: 500px;
    padding: 16px;
    overflow: auto;
    border-radius: 4px;
    width: 100%;
  }

  &__title {
    margin-bottom: 15px !important;
  }

  &__close {
    position: absolute !important;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin: 8px 8px 0 0;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
