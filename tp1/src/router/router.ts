import TodoList from "../views/TodoList.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    component: TodoList,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
