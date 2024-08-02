<template>
  <header class="header">
    <div class="header__content content">
      <BaseLogo />
      <div class="header__right">
        <HeaderLanguage />
        <HeaderSearch />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  height: 81px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 15px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
</style>
