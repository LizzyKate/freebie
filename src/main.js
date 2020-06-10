import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Routes from './route';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue'
import { store } from "./store"
import aos from "aos"
import "aos/dist/aos.css"

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  created(){
    aos.init()
  },
  el: '#app',
  store:store,
  render: h => h(App),
  router: router
});


