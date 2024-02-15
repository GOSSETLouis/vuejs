<template>
  <div>
    <h1>Ma Todo List</h1>
    <TaskList :tasks="tasks" />
    <TaskForm :addTask="addTask" />
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from 'vue';
import TaskList from './TaskList.vue';
import TaskForm from './TaskForm.vue';
import { TasksType } from "../types/TasksType"
export default defineComponent({
  name: 'TodoList',
  components: {
    TaskList,
    TaskForm,
  },
  setup() {
    const tasks: Ref<TasksType[]> = ref([]);

    function addTask(task: string) {
      tasks.value.push({ id: Date.now(), text: task, completed: false });
    };

    return { tasks, addTask };
  },
});
</script>
