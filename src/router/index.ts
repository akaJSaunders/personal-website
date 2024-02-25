import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView from '../views/ExperienceView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => AboutView
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => ExperienceView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => ProjectView
    }
  ]
})

export default router
