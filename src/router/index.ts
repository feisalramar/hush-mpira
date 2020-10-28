import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/leagues",
    name: "League",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/league/League.vue"),
  },
  {
    path: "/standing",
    name: "Standing",
    component: () => import("../views/standing/Standing.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
