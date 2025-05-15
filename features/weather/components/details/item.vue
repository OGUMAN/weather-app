<template>
  <div class="details__item">
    <div class="details__property">
      <slot name="property" />
    </div>
    <div class="details__connector"></div>
    <div class="details__value">
      <slot name="value" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.details__item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

.details__connector {
  height: 2px;
  width: 100%;
  border-bottom: 0.5px dotted #adadad;
}

.details__property {
  margin-right: 10px;
  flex-shrink: 0;
}

.details__value {
  margin-left: 10px;
  font-weight: 600;
  flex-shrink: 0;
}
</style>
