import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "@/pages/Experience.vue";
import ProjectsVue from "@/pages/Projects.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
