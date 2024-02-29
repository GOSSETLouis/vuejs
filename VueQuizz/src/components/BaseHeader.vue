<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "BaseHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const title = ref(props.title);
    const showScore = ref(props.showScore);
    const score = ref(props.score);
    const router = useRouter();

    function goHome() {
      router.push({ name: "Home" });
    }

    return {
      title,
      score,
      showScore,
      goHome,
    };
  },
});
</script>

<template>
  <header class="bg-blue-500 text-white py-4">
    <div class="mx-auto flex items-center justify-between pl-12 pr-12">
      <ui-icon class="hover:cursor-pointer" @click="goHome">home</ui-icon>
      <div class="text-2xl font-bold">{{ title }}</div>
      <div class="flex items-center space-x-4">
        <div v-if="showScore" class="text-lg font-semibold">
          Score : <span class="text-yellow-500">{{ score }}</span>
        </div>
        <button
          class="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300"
        >
          Déconnexion
        </button>
      </div>
    </div>
  </header>
</template>
