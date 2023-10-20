import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main";
import Documents from "@/pages/Documents";
import PersonalAccount from "@/pages/PersonalAccount.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes = [
  {
    name: 'main',
    path: '/',
    component: Main
  },
  {
    name:'docs',
    path: '/documents',
    component: Documents
  },
  {
    name: 'auth',
    path: '/auth',
    component: AuthPage
  },
  {
    name: 'personal',
    path: '/personal',
    component: PersonalAccount
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        left: 0,
        top: 110,
        behavior: 'smooth'
      }
    }
  }
})
export default router
