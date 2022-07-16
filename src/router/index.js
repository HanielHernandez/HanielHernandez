import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const AboutMe = () => import('../views/AboutMe.vue')
const MyWork = () => import('../views/Work.vue')
const MyCV = () => import('../views/CV.vue')

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMe
  },
  {
    path: '/my-work',
    name: 'MyWork',
    component: MyWork
  },
  {
    path: '/mycv',
    name: 'MyCV',
    component: MyCV
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
