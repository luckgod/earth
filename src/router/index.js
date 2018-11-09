import Vue from 'vue'
import Router from 'vue-router'
import Syindex from '../components/shouye/Syindex'
import Wode from '../components/wode/Wode.vue'
import Huoquweizhi from '../components/shouye/weizhi/Huoquweizhi.vue'
import Shangpinsousu from '../components/shouye/sousu/Shangpinsousu.vue'
import Shangjiaifo from '../components/shouye/shangjiaifo/Shangjiaifo.vue'
import Miaoshashangpin from '../components/shouye/miaosha/Miaoshashangpin.vue'
import Tejiashangpin from '../components/shouye/tejia/Tejiashangpin.vue'
import Quanbumendian from '../components/quanbumendian/Quanbumendian.vue'
import Qianggouxiangqing from '../components/shouye/qianggou/Qianggouxiangqing.vue'
import Laingdanghuodong from '../components/shouye/liangdaong/Laingdanghuodong.vue'
import Fenlei from '../components/shouye/fenleiaa/Fenlei.vue'
import Jifenshangcheng from '../components/shouye/jifen/Jifenshangcheng.vue'
import Jfenduihuan from '../components/jifendui/Jfenduihuan.vue'
import Jfenduihuantwo from '../components/jifenduitwo/Jfenduihuantwo.vue'
import Fukuanma from '../components/shouye/fukuanm/Fukuanma.vue'
import Jiaoyimingxi from '../components/jiaoyimingx/Jiaoyimingxi.vue'  
import Duihuanjilu from '../components/duihuanj/Duihuanjilu.vue'
import Huiyuanka from '../components/huiyuank/Huiyuanka.vue'
import Fukuanmaw from '../components/fukuanmw/Fukuanmaw.vue'
import Bangzhuzhongxin from '../components/wode/bangzhu/Bangzhuzhongxin.vue'
import Shezhi from '../components/wode/shez/Shezhi.vue'
import Gerenziliao from '../components/wode/gere/Gerenziliao.vue'
import Shezhiname from '../components/wode/shezhin/Shezhiname.vue'
import Dizhi from '../components/wode/dizhi/Dizhi.vue'
import Xinzhengshouhuodizhi from '../components/wode/dizhi/xzdizhi/Xinzhengshouhuodizhi.vue'
import Wuyefeidikou from '../components/wode/wuyefe/Wuyefeidikou.vue'
import Fanghaogenggai from '../components/wode/wuyefe/fanghaogai/Fanghaogenggai.vue'
import Dikouxiangqing from '../components/wode/wuyefe/dikoux/Dikouxiangqing.vue'
import Wuyejiaona from '../components/wode/wuyefe/wuyejiaon/Wuyejiaona.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/syindex',
      component:Syindex
    },
    {
      path:'/wode',
      component:Wode
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
      path:'/quanbumendian',
      component:Quanbumendian
    },
    {
      path:'/qianggouxiangqing',
      component:Qianggouxiangqing
    },
    {
      path:'/laingdanghuodong',
      component:Laingdanghuodong
    },
    {
      path:'/fenlei',
      component:Fenlei
    },
    {
      path:'/jifenshangcheng',
      component:Jifenshangcheng
    },
    {
      path:'/jfenduihuan',
      component:Jfenduihuan
    },
    {
      path:'/jfenduihuantwo',
      component:Jfenduihuantwo
    },
    {
      path:'/fukuanma',
      component:Fukuanma
    },
    {
      path:'/jiaoyimingxi',
      component:Jiaoyimingxi
    },
    {
      path:'/duihuanjilu',
      component:Duihuanjilu
    },
    {
      path:'/huiyuanka',
      component:Huiyuanka
    },
    {
      path:'/fukuanmaw',
      component:Fukuanmaw
    },
    {
      path:'/bangzhuzhongxin',
      component:Bangzhuzhongxin
    },
    {
      path:'/Shezhi',
      component:Shezhi
    },
    {
      path:'/gerenziliao',
      component:Gerenziliao
    },
    {
      path:'/shezhiname',
      component:Shezhiname
    },
    {
      path:'/dizhi',
      component:Dizhi
    },
    {
      path:'/xinzhengshouhuodizhi',
      component:Xinzhengshouhuodizhi
    },
    {
      path:'/wuyefeidikou',
      component:Wuyefeidikou
    },
    {
      path:'/fanghaogenggai',
      component:Fanghaogenggai
    },
    {
      path:'/dikouxiangqing',
      component:Dikouxiangqing
    },
    {
      path:'/wuyejiaona',
      component:Wuyejiaona
    },
    {
      path:'*',
      redirect:'/syindex'
  }
  ]
})
