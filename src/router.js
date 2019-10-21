import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import Work from './views/Work.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});

export default router;
