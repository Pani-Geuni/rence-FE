import LayoutBackoffice from '@/views/LayoutBackoffice.vue';
import LandingView from '@/components/backoffice/landing/LandingView.vue';

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
    ],
  },
];
