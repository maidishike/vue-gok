import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Recom from '@/pages/Recom'
import RankList from '@/pages/RankList'
import Search from '@/pages/Search'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [{
    path: '/recom',
    name: 'Recom',
    component: Recom
  },
  {
    path: '/ranklist',
    name: 'RankList',
    component: RankList
  },
  {
    path: '/search',
    name: 'seach',
    component: Search
  }]
})
