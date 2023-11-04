import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'

import TabletIndex from '@/components/Tablets/TabletIndex'
import TabletCreate from '@/components/Tablets/CreateTablet'
import TabletEdit from '@/components/Tablets/EditTablet'
import TabletShow from '@/components/Tablets/ShowTablet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
      //tablet router
    {
      path: '/tablets',
      name: 'tablets',
      component: TabletIndex
    },
    {
      path: '/tablet/create',
      name: 'tablet-create',
      component: TabletCreate
    },{
      path: '/tablet/edit/:tabletId',
      name: 'tablet-edit',
      component: TabletEdit
    },
    {
      path: '/tablet/:tabletId',
      name: 'tablet',
      component: TabletShow
    }
  ]
})
