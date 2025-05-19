<template>
  <header class="header">
    <div class="header__content content">
      <div class="header__left">
        <BaseLogo />
        <HeaderCurrent class="header__current" />
      </div>
      <div class="header__right">
        <HeaderLanguage />
        <HeaderSearch />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.header {
  background-color: #ffffff;
  height: $header-height;
  display: flex;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 15px;
  top: 0;
  width: 100%;
  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__right,
  &__left {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media screen and (max-width: 550px) {
    &__current {
      display: none;
    }
  }
}
</style>
