import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { Home, MainPage, MainHome, MainList } from "./components/pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/main",
    name: "MainPage",
    component: MainPage,
    children: [
      {
        path: "home",
        name: "MainHome",
        component: MainHome
      },
      {
        path: "list",
        name: "MainList",
        component: MainList
      },
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
