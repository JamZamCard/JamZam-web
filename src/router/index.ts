import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Channel from '../views/Channel.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/channel',
    name: 'Channel',
    component: Channel,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
