import { createRouter, createWebHistory } from 'vue-router';
import MyPageView from '@/components/office/my_page/MyPageView.vue';
import LayoutBase from '../views/LayoutBase.vue';
import HomeView from '../components/office/HomeView.vue';
import ListView from '../components/office/ListView.vue';

import masterRoutes from './masterRoutes';
import backofficeRoutes from './backofficeRoutes';
import dashboardRoutes from './dashboardRoutes';

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
      {
        path: 'my_page',
        name: 'MyPageView',
        component: MyPageView,
      },
    ],
  },
  ...backofficeRoutes,
  ...dashboardRoutes,
  ...masterRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
