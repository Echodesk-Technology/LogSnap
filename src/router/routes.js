import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Features from "../views/Home.vue";
import Pricing from "../views/Pricing.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "LogSnap | Issue Tracking",
    },
  },
  {
    path: "/signup",
    beforeEnter() {
      location.href = "https://dashboard.logsnap.app/signup";
    },
  },
  {
    path: "/login",
    beforeEnter() {
      location.href = "https://dashboard.logsnap.app/login";
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About | LogSnap",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact | LogSnap",
    },
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
    meta: {
      title: "Features | LogSnap",
    },
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
    meta: {
      title: "Pricing | LogSnap",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      title: "404 | Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "is-active",
  linkExactActiveClass: "exact-active",
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
