<template>
  <Title>{{ $t("CREDITS_TITLE") }}</Title>
  <div class="content">
    <div class="credits block">
      <h1 class="title">{{ $t("CREDITS_TITLE") }}</h1>
      <div class="credits__text">
        {{ $t("CREDITS_TEXT") }}
      </div>
      <a
        class="credits__link"
        href="https://www.amcharts.com/free-animated-svg-weather-icons"
        target="_blank"
        >Free animated SVG weather icons by amCharts
      </a>
      <a
        class="credits__link"
        href="https://github.com/lipis/flag-icons"
        target="_blank"
        >SVG pack of all country flags by lipis
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.credits {
  &__text {
    margin-bottom: 10px;
  }

  &__link {
    margin-bottom: 10px;
    display: block;
    color: blue;
  }
}
</style>
