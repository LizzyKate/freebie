import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Routes from './route'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
