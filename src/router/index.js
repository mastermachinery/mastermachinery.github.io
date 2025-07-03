import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { title: "Master Machinery | Industrial Equipment in WV" },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: { title: "About Master Machinery" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
    meta: { title: "Contact Master Machinery" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach((to) => {
  document.title = to.meta.title || "Master Machinery";
});
export default router;
