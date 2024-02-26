import { createRouter, createWebHashHistory } from "vue-router";
import QuizzVue from "../views/Quizz.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: QuizzVue,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
