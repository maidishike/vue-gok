import Vue from 'vue'
import Router from 'vue-router'
// import VueResource from 'vue-resource'
import Index from '@/pages/Index'
import Equip from '@/pages/equip'
import Search from '@/pages/Search'
import HeroList from '@/pages/HeroList'
import Detail from '@/pages/Detail'
Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Equip',
    name: 'Equip',
    component: Equip
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/list',
    name: 'HeroList',
    component: HeroList
  },
  {
    path: '/detail/:id/:imgId',
    name: 'detail',
    component: Detail
  }]
})
