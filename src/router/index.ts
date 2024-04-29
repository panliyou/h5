import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/zrsm1",
    name: "zrsm1",
    component: () =>
      import( "../views/memberApplets/zrsm1.vue"),
  },
  {
    path: "/zrsm2",
    name: "zrsm2",
    component: () =>
      import( "../views/memberApplets/zrsm2.vue"),
  },
  {
    path: "/zrsm3",
    name: "zrsm3",
    component: () =>
      import( "../views/memberApplets/zrsm3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
