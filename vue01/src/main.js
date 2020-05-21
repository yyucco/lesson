import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';
import { sync } from 'vuex-router-sync';

import definitions from './definitions';
Vue.prototype.$definitions = definitions;


Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})




