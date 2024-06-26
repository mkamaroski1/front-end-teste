import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import RegisterAddress from '../components/RegisterAddress.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterAddress,
    },
  ],
});