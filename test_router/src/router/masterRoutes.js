import LayoutMaster from '@/views/LayoutMaster.vue';
import MasterLogin from '@/components/master/MasterLogin.vue';
import MainView from '@/components/master/MasterMain.vue';
import BackofficeEndView from '@/components/master/BackofficeEnd.vue';

export default [
  {
    path: '/master',
    component: LayoutMaster,
    children: [
      {
        path: 'main',
        name: 'MainView',
        component: /* webpackChunkName: "MainView" */ MainView,
      },
      {
        path: 'backoffice_end',
        name: 'BackofficeEndView',
        component: BackofficeEndView,
      },
    ],
  },
  {
    path: '/master/login',
    name: 'MasterLogin',
    component: MasterLogin,
  },
];
