import Vue, { createApp } from 'vue';
import VueCookies from 'vue-cookies';
// import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import App from './App.vue';
import router from './router';
import store from './store';

// createApp(App).use(store).use(router).use(VueCookies);
//   .use(VCalendar);
//   .mount('#app');
createApp({
  extends: App,
  mixins: [router, store, VueCookies, DatePicker],
}).mount('#app');

// new Vue({
//   router,
//   store,
//   VueCookies,
//   render: (h) => h(App),
// }).$mount('#app');

// // Vue.component('calendar', Calendar);
// Vue.component('date-picker', DatePicker);
