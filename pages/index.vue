<template>
  <Title
    >{{ store.selectedSearchResult.name }}
    {{ $t('TITLE') }}</Title
  >
  <div class="content">
    <Weather />
    <Map />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";
const store = useMainStore();
</script>
