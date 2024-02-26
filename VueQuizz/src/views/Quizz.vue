<template>
  <BaseHeader :title="title" :show-score="showScore" :score="score" />
  <div class="mx-auto p-4 max-w-[800px]">
    <QuestionDisplay
      v-if="currentQuestion"
      :question="currentQuestion.question"
      :options="currentQuestion.options"
      :correct-answer="currentQuestion.correctAnswer"
      @option-selected="handleOptionSelected"
    />
    <div v-if="showScore">Score final: {{ score }}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import BaseHeader from "../components/BaseHeader.vue";
import QuestionDisplay from "../components/QuestionDisplay.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseHeader,
    QuestionDisplay,
  },
  setup() {
    const title = "Quiz Application";
    const showScore = ref(false);
    const score = ref(0);
    const currentQuestionIndex = ref(0);

    const questions = [
      {
        question: "Question 1: Quelle est la capitale de la France?",
        options: ["Paris", "Londres", "Berlin"],
        correctAnswer: "Paris",
      },
      {
        question: "Question 2: Combien de continents y a-t-il sur Terre?",
        options: ["5", "6", "7"],
        correctAnswer: "7",
      },
    ];

    const currentQuestion = ref(questions[currentQuestionIndex.value]);

    const handleOptionSelected = (selectedOption) => {
      if (selectedOption === questions[currentQuestionIndex.value].correctAnswer) {
        score.value++;
      }
      if (currentQuestionIndex.value < questions.length - 1) {
        setTimeout(() => {
          currentQuestionIndex.value++;
          currentQuestion.value = questions[currentQuestionIndex.value];
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
    };
  },
});
</script>
