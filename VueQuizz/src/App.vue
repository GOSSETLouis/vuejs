<script lang="ts">
import { QueryClient } from "@tanstack/vue-query";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 30_000,
      refetchOnWindowFocus: true,
    },
  },
});
</script>

<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>
