import Vue from 'vue'
import Router from 'vue-router'

import Account from '../components/Account'
import Contact from '../components/Contact'
import Friends from '../components/Friends'

Vue.use(Router)

const HelloWorld1=()=>import('../components/HelloWorld1')
export default new Router({
  routes: [
    {
      path: '/',
      name: '/Hello',
      component: HelloWorld1
    },
    {
      path: '/friends/:id/:age/:weight',
      name: 'Friends',
      props: true,
      component: Friends
    },
    {
      path: '/contact',
      name: '/con',
      component: Contact,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
