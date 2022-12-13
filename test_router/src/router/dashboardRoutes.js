import LayoutDashboard from '@/views/LayoutDashboard.vue';
import DashBoardMainView from '@/components/backoffice/dashboard/MainView.vue';

export default [
  {
    path: '/dashboard',
    component: LayoutDashboard,
    children: [
      {
        path: 'main',
        name: 'DashBoardMainView',
        component: DashBoardMainView,
      },
    ],
  },
];
