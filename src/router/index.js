import Vue from 'vue'
import Router from 'vue-router'
import Syindex from '../components/shouye/Syindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/syindex',
      component:Syindex
    },
    {
      path:'*',
      redirect:'/syindex'
  }
  ]
})
