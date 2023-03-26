<template>
  <footer class="footer">
    <div class="footer__content content">
      <BaseLogo />
      <router-link class="footer__link" to="/credits">{{
        getTranslation("credits")
      }}</router-link>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLogo from "@/components/base/BaseLogo.vue";
import { mapGetters } from "@/store/helpers";

export default defineComponent({
  components: {
    BaseLogo,
  },
  setup() {
    const { getTranslation } = mapGetters();

    return { getTranslation };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: calc(-81px - 15px);
  left: 0;
  width: 100%;
  background-color: #ffffff;
  height: 81px;
  display: flex;
  align-items: center;
  border-top: 1px solid #b5b5b5;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
