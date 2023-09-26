import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main";
import Documents from "@/pages/Documents";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/documents',
    component: Documents
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
