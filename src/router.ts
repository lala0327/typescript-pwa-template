import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { Home, Login } from "./components/pages";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
