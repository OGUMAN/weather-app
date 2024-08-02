<template>
  <Title>{{ store.selectedSearchResult.name }} {{ $t("TITLE") }}</Title>
  <div class="content">
    <Weather />
    <Map />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { useSearchStore } from "~/features/header/search/store";

const store = useSearchStore();
</script>
