import { createRouter, createWebHashHistory } from "vue-router";
import QuizzVue from "../views/Quizz.vue";
import HomeVue from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/quizz/:category",
    name: "Quizz",
    component: QuizzVue,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
