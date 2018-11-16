import Vue from 'vue'
import Router from 'vue-router'
import Syindex from '../components/shouye/Syindex'
import Wode from '../components/wode/Wode.vue'
import Shopcar from '../components/shopcar/Shopcar.vue'
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
import Jiaonashuoming from '../components/wode/wuyefe/jiaonashuomin/Jiaonashuoming.vue'
import Yijianfankui from '../components/wode/bangzhu/yijianfank/Yijianfankui.vue'
import Xiaoxizhongxin from '../components/wode/xiaoxizhongxin/Xiaoxizhongxin.vue'
import Shengxiandingdan from '../components/wode/shengxiandingdan/Shengxiandingdan.vue'
import Daifukuan from '../components/wode/shengxiandingdan/daifukuan/Daifukuan.vue'
import Daipeisong from '../components/wode/shengxiandingdan/daipeisong/Daipeisong.vue'
import Daishouhuo from '../components/wode/shengxiandingdan/daishouhuo/Daishouhuo.vue'
import Daipingjia from '../components/wode/shengxiandingdan/daipingjia/Daipingjia.vue'
import Tuikuanshouhou from '../components/wode/tuikuanshouhou/Tuikuanshouhou.vue'
import Shenqingtuikuan from '../components/wode/shengxiandingdan/shenqingtuikuan/Shenqingtuikuan.vue'
import Tuikuanxiangqing from '../components/wode/tuikuanshouhou/tuikuanxiangqing/Tuikuanxiangqing.vue'
import Dingdanxiangqing from '../components/wode/shengxiandingdan/dingdanxaingqing/Dingdanxaingqing.vue'
import Querendingdan from '../components/shopcar/querendingdan/Querendingdan.vue'
import Pingjia from '../components/wode/shengxiandingdan/daipingjia/pingjia/Pingjia.vue'
import Shangpinseach from '../components/shouye/sousu/shangpinseach/Shangpinseach.vue'
import Tianjiabeizhun from '../components/shopcar/querendingdan/tianjiabeizhu/Tianjiabeizhu.vue'
import Fukuanyouhuijuan from '../components/shopcar/querendingdan/fukuanyouhuijuan/Fukuanyouhuijuan.vue'
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
      path:'/shopcar',
      component:Shopcar
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
      path:'/jiaonashuoming',
      component:Jiaonashuoming
    },
    {
      path:'/yijianfankui',
      component:Yijianfankui
    },
    {
      path:'/xiaoxizhongxin',
      component:Xiaoxizhongxin
    },
    {
      path:'/shengxiandingdan',
      component:Shengxiandingdan
    },
    {
      path:'/daifukuan',
      component:Daifukuan
    },
    {
      path:'/daipeisong',
      component:Daipeisong
    },
    {
      path:'/daishouhuo',
      component:Daishouhuo
    },
    {
      path:'/daipingjia',
      component:Daipingjia
    },
    {
      path:'/tuikuanshouhou',
      component:Tuikuanshouhou
    },
    {
      path:'/shenqingtuikuan',
      component:Shenqingtuikuan
    },
    {
      path:'/tuikuanxiangqing',
      component:Tuikuanxiangqing
    },
    {
      path:'/dingdanxiangqing',
      component:Dingdanxiangqing
    },
    {
      path:'/querendingdan',
      component:Querendingdan
    },
    {
      path:'/pingjia',
      component:Pingjia
    },
    {
      path:'/shangpinseach',
      component:Shangpinseach
    },
    {
      path:'/tianjiabeizhun',
      component:Tianjiabeizhun
    },
    {
      path:'/fukuanyouhuijuan',
      component:Fukuanyouhuijuan
    },
    {
      path:'*',
      redirect:'/syindex'
  }
  ]
})
