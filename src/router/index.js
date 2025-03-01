import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GameView from '../views/GameView.vue';
import transactiuon from '../views/transaction.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/game',
    name: 'Game',
    component: GameView,
  },
  {
    path: '/tt',
    name: 'tt',
    component: transactiuon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
