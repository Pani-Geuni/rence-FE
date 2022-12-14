
import { createApp } from 'vue';
import VueCookies from 'vue-cookies';
import Vue3Storage from 'vue3-storage';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(VueCookies)
  .use(Vue3Storage)
  .mount('#app');
