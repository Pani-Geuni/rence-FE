import LayoutBackoffice from '@/views/LayoutBackoffice.vue';
import LandingView from '@/components/backoffice/landing/LandingView.vue';
import InsertView from '@/components/backoffice/landing/InsertView.vue';

export default [
  {
    path: '/backoffice',
    component: LayoutBackoffice,
    children: [
      {
        path: 'landing',
        name: 'LandingView',
        component: LandingView,
      },
      {
        path: 'insert',
        name: 'InsertView',
        component: InsertView,
      },
    ],
  },
];
