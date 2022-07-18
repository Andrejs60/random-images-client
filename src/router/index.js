import { createRouter, createWebHistory } from "vue-router";
import AscendingView from "../views/AscendingView.vue";

const routes = [
  {
    path: "/",
    name: "ascending",
    component: AscendingView,
  },
  {
    path: "/descending",
    name: "descending",
    component: () => import("../views/DescendingView.vue"),
  },
  {
    path: "/random",
    name: "random",
    component: () => import("../views/RandomView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
