<template>
  <div>
        <div class="tabheader">
                <div class="tabheader_fanhui">
                    <i  class="iconfont icon-left "></i>
                </div>
                <span class="tabheader_con">生鲜订单</span>
                <div class="tabheader_del" >
                    <i  class="iconfont icon-kefu1"></i>
                </div>
      </div>
      <div class="hat">

      
    <div class="wapra">
        <span>待收货</span>
    </div>
    <div  class="waprb">
        <p><span>小班扬</span> <span>188****2622</span> </p>
        <p>浙江省杭州市滨江区秋溢路288号东冠高新科技园1号楼1702</p>

    </div>
    <div  class="waprc">
        <p>配送方式</p>
        <p>自提</p>
    </div>
    <div  class="waprc">
        <p>营业时间</p>
        <p>8:00-19:00</p>
    </div>
     <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                              
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69545.80</em></span></li>
                      </ul>
                  </div>
                 
              </div>    
                  </div>
            <div class="waprd">
                <p>订单编号：72634876247238765782</p>
                <p>下单时间：2018-05-31 09:32:12</p>
                <p>支付方式：会员卡支付</p>
                <p>支付时间：2018-05-31 10:32:12</p>    
            </div>
            </div>  
             <div class="wapre">
               
                <p @click="tao">确认收货</p>
                <p>退款</p>
            </div> 
  </div>
  
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  name: 'Daishouhuo',
      data () {
    return {
      msg: 'moban'
    }
  },
  methods: {
      tao() {
          MessageBox({
        title: '收货成功',
        message: '您已获得200积分',
        showCancelButton: true,
        cancelButtonText:'返回首页',
        confirmButtonText:'去评价',
        confirmButtonClass:'yansea',
        cancelButtonClass:'yanseb',
        }); 
      }
  },
  
}
</script>
<style  scoped>
@import "Daishouhuo.css";
</style>