/* eslint-disable linebreak-style */
import { createRouter, createWebHistory } from 'vue-router';
import MyPageView from '@/components/office/my_page/MyPageView.vue';
import MileageView from '../components/office/my_page/MileageView.vue';
import ReviewView from '../components/office/my_page/ReviewView.vue';
import QuestionView from '../components/office/my_page/QuestionView.vue';
import ReserveListView from '../components/office/my_page/ReserveListView.vue';

import BeforeReserveInfoView from '../components/office/reserve/BeforeReserveInfoView.vue';
import NowReserveInfoView from '../components/office/reserve/NowReserveInfoView.vue';

import SpaceDetailView from '../components/office/space_detail/SpaceDetailView.vue';

import HomeView from '../components/office/HomeView.vue';
import ListView from '../components/office/ListView.vue';

import LayoutOffice from '../views/LayoutOffice.vue';

import masterRoutes from './masterRoutes';
import backofficeRoutes from './backofficeRoutes';

const routes = [
  {
    path: '/',
    component: LayoutOffice,
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
      {
        path: 'mileage',
        name: 'MileageView',
        component: MileageView,
      },
      {
        path: 'reserve_list',
        name: 'ReserveListView',
        component: ReserveListView,
      },
      {
        path: 'reserved_info',
        name: 'BeforeReserveInfoView',
        component: BeforeReserveInfoView,
      },
      {
        path: 'reserve_info',
        name: 'NowReserveInfoView',
        component: NowReserveInfoView,
      },
      {
        path: 'review',
        name: 'ReviewView',
        component: ReviewView,
      },
      {
        path: 'question',
        name: 'QuestionView',
        component: QuestionView,
      },
      {
        path: 'space',
        name: 'SpaceDetailView',
        component: SpaceDetailView,
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
