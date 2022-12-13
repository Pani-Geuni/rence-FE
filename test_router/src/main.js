import { createApp } from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(VueCookies)
  .mount('#app');
