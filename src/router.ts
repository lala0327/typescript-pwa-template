import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'
import { Home, MainPage, MainHome, MainList, MainNotice, MainSetting } from "./components/pages";

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
      {
        path: "notice",
        name: "MainNotice",
        component: MainNotice
      },
      {
        path: "setting",
        name: "MainSetting",
        component: MainSetting
      },
    ]
  },

];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;
