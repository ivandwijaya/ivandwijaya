import Vue from 'vue'
import Router from 'vue-router'
import Home from 'core/pages/Home'
import Writing from 'core/pages/Writing'
import Contact from 'core/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/writing',
      name: 'Writing',
      component: Writing
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history',
  linkActiveClass: 'menu__item--active',
})
