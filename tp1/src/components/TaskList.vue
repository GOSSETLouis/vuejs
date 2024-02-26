<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import type { TasksType } from "../types/TasksType";
export default defineComponent({
  name: "TaskList",
  props: {
    tasks: {
      type: Array as PropType<TasksType[]>,
      required: true,
    },
    deleteTask: {
      type: Function as PropType<(taskId: number) => void>,
      required: true,
    },
    editTask: {
      type: Function as PropType<(task: { id: number; text: string }) => void>,
      required: true,
    },
  },
  setup() {
    const taskEditText = ref("");

    function editTask(task: TasksType) {
      task.editing = true;
      taskEditText.value = task.text;
    }

    function cancelEdit(task: TasksType) {
      task.editing = false;
      taskEditText.value = "";
    }

    function saveEdit(task: TasksType) {
      if (taskEditText.value.trim() !== "") {
        task.text = taskEditText.value;
        task.editing = false;
        taskEditText.value = "";
      }
    }

    return { taskEditText, editTask, cancelEdit, saveEdit };
  },
});
</script>

<template>
  <div class="flex gap-4">
    <ui-list>
      <ui-item v-for="task in tasks" :key="task.id">
        <ui-checkbox v-model="task.completed" />
        <span v-if="!task.editing">{{ task.text }}</span>
        <ui-textfield
          v-if="task.editing"
          v-model="taskEditText"
          @blur="cancelEdit(task)"
          @keyup.enter="saveEdit(task)"
        />

        <ui-button @click="editTask(task)"><ui-icon>edit</ui-icon></ui-button>

        <ui-button @click="deleteTask(task.id)"><ui-icon>delete</ui-icon></ui-button>
      </ui-item>
    </ui-list>
  </div>
</template>
