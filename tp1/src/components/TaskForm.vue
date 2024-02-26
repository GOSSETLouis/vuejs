<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { usersList } from "../utils/UsersList";
import { User } from "../types/User";

export default defineComponent({
  name: "TaskForm",
  props: {
    addTask: {
      type: Function as PropType<(task: string, selectedUser: User | null) => void>,
      required: true,
    },
  },
  setup(props) {
    const newTask = ref("");

    const selectedUser = ref(null);

    const users = usersList;

    const addTask = () => {
      if (newTask.value.trim() !== "") {
        props.addTask(newTask.value, selectedUser.value);
        newTask.value = "";
        selectedUser.value = null;
      }
    };

    return { newTask, addTask, users, selectedUser };
  },
});
</script>

<template>
  <div class="flex gap-4 align-middle justify-center items-center">
    <ui-textfield
      v-model="newTask"
      placeholder="Ajouter une nouvelle tâche"
      @keyup.enter="addTask"
    />
    <select v-model="selectedUser">
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <ui-button @click="addTask">Ajouter</ui-button>
  </div>
</template>
