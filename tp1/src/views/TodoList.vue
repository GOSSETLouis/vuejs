<template>
  <div class="flex flex-col gap-4">
    <h1>Ma Todo List</h1>
    <TaskForm :addTask="addTask" />
    <TaskList :tasks="tasks" :deleteTask="deleteTask" :edit-task="editTask" />
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
import { TasksType } from "../types/TasksType";
import { User } from "../types/User";
export default defineComponent({
  name: "TodoList",
  components: {
    TaskList,
    TaskForm,
  },
  setup() {
    const tasks: Ref<TasksType[]> = ref([]);

    function addTask(task: string, selectedUser: User | null) {
      if (!selectedUser) {
        throw new Error("Pas d'utilisateur sélectionné")
      }
      tasks.value.push({ id: Date.now(), text: task, completed: false, editing: false, userAssigned: selectedUser });
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
