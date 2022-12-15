import LayoutDashboard from '@/views/LayoutDashboard.vue';
import DashBoardMainView from '@/components/backoffice/dashboard/MainView.vue';
import RoomView from '@/components/backoffice/dashboard/RoomView.vue';
import QnaView from '@/components/backoffice/dashboard/QnaView.vue';
import ReviewView from '@/components/backoffice/dashboard/ReviewView.vue';

export default [
  {
    path: '/backoffice/dash',
    component: LayoutDashboard,
    children: [
      {
        path: 'main',
        name: 'DashBoardMainView',
        component: DashBoardMainView,
      },
      {
        path: 'room',
        name: 'RoomView',
        component: RoomView,
      },
      {
        path: 'qna',
        name: 'QnaView',
        component: QnaView,
      },
      {
        path: 'review',
        name: 'ReviewView',
        component: ReviewView,
      },
    ],
  },
];
