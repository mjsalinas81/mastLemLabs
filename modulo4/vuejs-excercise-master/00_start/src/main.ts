import Vue from "vue";
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from "./App.vue";
import { router } from './router';

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: "#root",
  render: h => h(App),
  router
});
