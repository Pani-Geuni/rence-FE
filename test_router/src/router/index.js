import { createRouter, createWebHistory } from 'vue-router';
import LayoutBase from '../views/LayoutBase.vue';
import HomeView from '../components/office/HomeView.vue';
import ListView from '../components/office/ListView.vue';

import masterRoutes from './masterRoutes';
import backofficeRoutes from './backofficeRoutes';

const routes = [
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView,
      },
      {
        path: 'list/:call', // 전달할 변수명 지정 :/변수명
        name: 'ListView',
        component: ListView,
      },
    ],
  },
  ...backofficeRoutes,
  ...masterRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
