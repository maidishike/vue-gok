import Vue from 'vue'
import Router from 'vue-router'
// import VueResource from 'vue-resource'
import Recom from '@/pages/Recom'
import Search from '@/pages/Search'
import HeroList from '@/pages/HeroList'
import Detail from '@/pages/Detail'
Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
  routes: [{
    path: '/recom',
    name: 'Recom',
    component: Recom
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
