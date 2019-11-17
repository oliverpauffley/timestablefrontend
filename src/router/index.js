import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Results from '../components/Results.vue'
import Leaderboard from '../components/Leaderboard.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/results',
    name: 'results',
    component: Results
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: Leaderboard
  }
];

const router = new VueRouter({
  routes
});

export default router
