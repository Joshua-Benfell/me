import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { headings } from "@/constants";

const Home = () => import("@/views/Home.vue");
const Projects = () => import("@/views/Projects.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      heading: headings.main.heading
    }
  },
  {
    path: "/projects",
    name: "Projects",
  	component: Projects,
    meta: {
      heading: headings.projects.heading
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-page"
});

export default router;
