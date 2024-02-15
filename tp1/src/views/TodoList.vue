<template>
  <div>
    <h1 class="text-red-600">Ma Todo List</h1>
    <TaskForm :addTask="addTask" />
    <TaskList :tasks="tasks" :deleteTask="deleteTask" :edit-task="editTask" />
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
import { TasksType } from "../types/TasksType";
export default defineComponent({
  name: "TodoList",
  components: {
    TaskList,
    TaskForm,
  },
  setup() {
    const tasks: Ref<TasksType[]> = ref([]);

    function addTask(task: string) {
      tasks.value.push({ id: Date.now(), text: task, completed: false, editing: false });
    }

    function deleteTask(taskId: number) {
      tasks.value = tasks.value.filter((task) => task.id !== taskId);
    }

    function editTask(task: { id: number; text: string }) {
      const taskToEdit = tasks.value.find((t) => t.id === task.id);
      if (taskToEdit) {
        taskToEdit.editing = true;
      }
    }

    return { tasks, addTask, deleteTask, editTask };
  },
});
</script>
