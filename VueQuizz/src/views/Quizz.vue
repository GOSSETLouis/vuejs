<template>
  <BaseHeader :title="title" :show-score="showScore" :score="score" />
  <div v-if="isLoading">Chargement...</div>
  <div v-else-if="isError">Erreur lors de la requête</div>
  <div v-else class="mx-auto p-4 max-w-[800px]">
    <QuestionDisplay
      v-if="currentQuestion"
      :question="currentQuestion.question.text"
      :options="currentQuestionOptions"
      :correct-answer="currentQuestion.correctAnswer"
      @option-selected="handleOptionSelected"
    />
    <div v-if="showScore">Score: {{ score }} / {{ questionsTotal }}</div>
  </div>
</template>

<script lang="ts">
import { Ref, computed, defineComponent, reactive, ref, watchEffect } from "vue";
import BaseHeader from "../components/BaseHeader.vue";
import QuestionDisplay from "../components/QuestionDisplay.vue";
import { useQuery } from "@tanstack/vue-query";
import { getQuestionsByCategory } from "../queries/questions";
import { QuestionType } from "../types/QuestionType";

export default defineComponent({
  name: "QuizzVue",
  components: {
    BaseHeader,
    QuestionDisplay,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const showScore = ref(false);
    const score = ref(0);
    const currentQuestionIndex = ref(0);
    console.log(props.category);
    const category = ref(props.category);
    const title = category;
    const questionsArray: Ref<QuestionType[]> = ref([]);
    const { isError, isLoading } = useQuery({
      queryKey: ["questions", category.value],
      queryFn: async () => {
        const questions = await getQuestionsByCategory(category.value);
        for await (const question of questions) {
          questionsArray.value.push(question);
        }
        return { data: questions };
      },
    });
    const questions = reactive(questionsArray.value);

    let currentQuestion = computed(() => questions[currentQuestionIndex.value]);
    let questionsTotal = ref(0);
    const currentQuestionOptions: Ref<string[]> = ref([]);

    watchEffect(() => {
      if (currentQuestion.value) {
        currentQuestionOptions.value = [
          ...currentQuestion.value.incorrectAnswers,
          currentQuestion.value.correctAnswer,
        ];
      }
      if (questions.length > 0) {
        questionsTotal.value = questions.length;
      }
    });

    const handleOptionSelected = (selectedOption: string) => {
      if (selectedOption === questions[currentQuestionIndex.value].correctAnswer) {
        score.value++;
      }
      if (currentQuestionIndex.value < questions.length - 1) {
        setTimeout(() => {
          currentQuestionIndex.value++;
        }, 2000);
      } else {
        setTimeout(() => {
          showScore.value = true;
        }, 2000);
      }
    };

    return {
      title,
      showScore,
      score,
      currentQuestion,
      handleOptionSelected,
      isError,
      isLoading,
      questions,
      currentQuestionOptions,
      questionsTotal,
    };
  },
});
</script>
