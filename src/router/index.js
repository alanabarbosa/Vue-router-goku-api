import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Transforms from '../views/Transforms.vue'
import Transform from '../views/Transform.vue'
import Family from '../views/Family.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'about',
    component: About
  },
  {
    path: '/transformacoes',
    name: 'transformacoes',
    component: Transforms
  },
 {
    path: '/transformacoes/:transformacao',
    name: 'transformacao',
    component: Transform,
    props: true
  },
  {
    path: '/familia',
    name: 'family',
    component: Family
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router