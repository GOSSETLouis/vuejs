<template>
  <BaseHeader :title="title" :show-score="showScore" />
  <div class="container mx-auto p-4">
    <h2 class="text-xl font-semibold mb-4">Sélectionnez une catégorie :</h2>
    <ul>
      <li
        v-for="(category, index) in categories"
        :key="index"
        class="cursor-pointer py-2 border-b border-gray-300 hover:bg-gray-100"
        @click="startQuiz(category)"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseHeader from "../components/BaseHeader.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomeVue",
  components: { BaseHeader },
  setup() {
    const router = useRouter();
    const categories = [
      "music",
      "sport_and_leisure",
      "film_and_tv",
      "arts_and_literature",
      "history",
      "society_and_culture",
      "science",
      "geography",
      "food_and_drink",
      "general_knowledge",
    ];
    const title = "Quiz Application";
    const showScore = ref(false);
    const startQuiz = (category: string) => {
      router.push({ name: "Quizz", params: { category } });
    };

    return {
      categories,
      startQuiz,
      title,
      showScore,
    };
  },
});
</script>
