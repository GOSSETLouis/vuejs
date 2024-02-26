<script lang="ts">
import { defineComponent } from "vue";
import BaseHeader from "../components/BaseHeader.vue";

export default defineComponent({
  name: "QuizzDisplay",
  components: { BaseHeader },
  setup() {
    const title = "Bonjour";

    return {
      title,
    };
  },
});
</script>

<template>
  <BaseHeader :title="title" />
  <div class="flex flex-col gap-4">
    <h1>Mon Quizz</h1>
  </div>
</template>
