import Vue, { createApp } from 'vue';
import VueCookies from 'vue-cookies';
import Vue3Storage from 'vue3-storage';
import Datepicker from '@vuepic/vue-datepicker';
// import VueSession from 'vue-session';

import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(VueCookies)
  .use(Vue3Storage)
  .component('Datepicker', Datepicker)
  .mount('#app');

// const sessionOptions = {
//   persist: true,
// };
// Vue.use(VueSession, sessionOptions);
