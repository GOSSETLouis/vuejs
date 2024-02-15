<template>
  <div>
    <ui-textfield v-model="newTask" placeholder="Ajouter une nouvelle tâche" />
    <ui-button @click="addTask">Ajouter</ui-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  name: 'TaskForm',
  props: {
    addTask: {
      type: Function as PropType<(task: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const newTask = ref('');

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        props.addTask(newTask.value);
        newTask.value = '';
      }
    };

    return { newTask, addTask };
  },
});
</script>
