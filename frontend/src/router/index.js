import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '../views/CardsView.vue'
import DecksView from '../views/DecksView.vue'

const routes = [
  {
    path: '/',
    name: 'cards',
    component: CardsView
  },
  {
    path: '/deckbuilder',
    name: 'deckbuilder',
    component: DecksView
  },
  {
    path: '/battlerground',
    name: 'battlerground',
    component: CardsView
  },
  {
    path: '/mercenaries',
    name: 'mercenaries',
    component: CardsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
