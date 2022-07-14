import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/slider",
    name: "slider",
    component: () => import("@/components/Slider.vue"),
  },
  {
    path: "/footer",
    name: "footer",
    component: () => import("@/components/Footer.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/reservation",
    name: "reservation",
    component: () => import("@/components/ReservationBooking.vue")
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
