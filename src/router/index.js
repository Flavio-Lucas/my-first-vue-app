import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Video from '../views/Video';
import Chip from '../views/Chip';
import Search from '../views/Search';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/chip',
    name: 'Chip',
    component: Chip
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
];

const router = new VueRouter({   mode: 'history',   base: process.env.BASE_URL,   routes })

export default router;
