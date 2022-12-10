import LayoutMaster from '@/views/LayoutMaster.vue';
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
];
