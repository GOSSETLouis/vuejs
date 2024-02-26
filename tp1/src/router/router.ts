import TodoList from "../views/TodoList.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TodoList,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
