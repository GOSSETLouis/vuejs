<template>
  <div class="question-container bg-gray-100 p-4 rounded-md mb-4">
    <h2 class="text-lg font-semibold mb-2">{{ question }}</h2>
    <ul>
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{
          'bg-green-200 hover:bg-green-200': option === selectedOption && option === correctAnswer,
          'bg-red-200 hover:bg-red-200': option === selectedOption && option !== correctAnswer,
        }"
        class="cursor-pointer py-2 px-3 rounded-md hover:bg-gray-200 mb-1"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

export default defineComponent({
  name: "QuestionDisplay",
  props: {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: Array<string>,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  emits: ["option-selected"],
  setup(props, { emit }) {
    const selectedOption: Ref<null | string> = ref(null);
    const selectOption = (option: string) => {
      selectedOption.value = option;
      emit("option-selected", option);
    };

    return {
      selectedOption,
      selectOption,
    };
  },
});
</script>
