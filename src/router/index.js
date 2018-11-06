import Vue from 'vue'
import Router from 'vue-router'
import Syindex from '../components/shouye/Syindex'
import Huoquweizhi from '../components/shouye/weizhi/Huoquweizhi.vue'
import Shangpinsousu from '../components/shouye/sousu/Shangpinsousu.vue'
import Shangjiaifo from '../components/shouye/shangjiaifo/Shangjiaifo.vue'
import Miaoshashangpin from '../components/shouye/miaosha/Miaoshashangpin.vue'
import Tejiashangpin from '../components/shouye/tejia/Tejiashangpin.vue'
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
      path:'/shangjiaifo',
      component:Shangjiaifo
    },
    {
      path:'/miaoshashangpin',
      component:Miaoshashangpin
    },
    {
      path:'/tejiashangpin',
      component:Tejiashangpin
    },
    {
      path:'*',
      redirect:'/syindex'
  }
  ]
})
