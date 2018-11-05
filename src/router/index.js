import Vue from 'vue'
import Router from 'vue-router'
import Syindex from '../components/shouye/Syindex'
import Huoquweizhi from '../components/shouye/weizhi/Huoquweizhi.vue'
import Shangpinsousu from '../components/shouye/sousu/Shangpinsousu.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/syindex',
      component:Syindex
    },
    {
      path:'/huoquweizhi',
      component:Huoquweizhi
    },
    {
      path:'/shangpinsousu',
      component:Shangpinsousu
    },
    {
      path:'*',
      redirect:'/syindex'
  }
  ]
})
