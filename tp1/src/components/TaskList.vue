<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <input type="checkbox" v-model="task.completed" />
      {{ task.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { TasksType } from "../types/TasksType";
export default defineComponent({
  name: "TaskList",
  props: {
    tasks: {
      type: Array as PropType<TasksType[]>,
      required: true,
    },
  },
});
</script>
