<template>
  <div>
      <div class="onese">
          <div class="shezhi" @click="jumpb"></div>
          <div class="xiaoxi" @click="jumpg"></div>
          <div class="gerencar">
              <div class="warpa" @click="jumpc">
                  <img class="utou" src="../../assets/logo.png" alt="">
                  <div  class="warpn">
                      <p class="unam">小叮当</p>
                        <p class="upho" >177****4562</p>
                  </div>  
                </div>
                <div>
                    <div>
                            <ul class="huyu">
                                <li class="huyuka"><p>¥0</p> <span>会员卡</span></li>
                                <li class="huyukb"><p>1</p> <span>优惠券</span></li>
                                <li class="huyukc"><p>62</p> <span>积分</span></li>
                            </ul>
                    </div>
                  
                    </div>
                </div> 
      </div>
      <div class="twose">
         <span>生鲜订单</span>
         <span>全部</span>
         <i class="iconfont icon-right twoseb"></i>
      </div>
        <div class="shenga">
                        <ul class="shengxiandingdan">
                            <li class="items"><img src="../../assets/img/11.png" alt=""><p>待付款</p></li>
                            <li class="items"><img src="../../assets/img/12.png" alt=""><p>待发货</p></li>
                            <li class="items"><img src="../../assets/img/13.png" alt=""><p>待收货</p></li>
                            <li class="items"><img src="../../assets/img/14.png" alt=""><p>待评价</p></li>
                            <li class="items itemst"><img src="../../assets/img/15.png" alt=""><p>退款/售后</p></li>    
                        </ul>
        </div>
        <div>
            <p class="tit">常用功能</p>
            <div>
                <ul class="tita"> 
                    <li class="titb teshu" @click="jumpf"><img src="../../assets/img/4.png" alt=""><p>物业缴纳</p></li>
                    <li class="titb"  @click="jumpd" ><img src="../../assets/img/5.png" alt=""><p>收货地址</p></li>
                    <li class="titb"><img src="../../assets/img/6.png" alt=""><p>资金管理</p></li>
                    <li class="titb"><img src="../../assets/img/7.png" alt=""><p>积分商城</p></li>
                    <li class="titb" @click="jumpa"><img src="../../assets/img/8.png" alt=""><p>帮助反馈</p></li>
                    <li class="titb"  @click="jumpe"><img src="../../assets/img/9.png" alt=""><p>客服中心</p></li>
                    <li class="titb"><img src="../../assets/img/10.png" alt=""><p>加盟合作</p></li>
                    <li class="titb"></li>
                </ul>
            </div>
        </div>
        
                   
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  name: 'Wode',
      data () {
    return {
      msg: 'moban'
    }
  },
  methods:{
      jumpa(){
          this.$router.push({path:'/bangzhuzhongxin'})
      },
       jumpb(){
          this.$router.push({path:'/Shezhi'})
      },
      jumpc(){
           this.$router.push({path:'/gerenziliao'})
      },
       jumpd(){
           this.$router.push({path:'/dizhi'})
      },
        jumpe(){
                    MessageBox({
                            title:'',
                            message: '+86 15268339502?',
                            showCancelButton: true,
                            confirmButtonText:'呼叫',
                            confirmButtonClass:'chanco'
                            });
      },
        jumpf(){
           this.$router.push({path:'/wuyefeidikou'})
      },
      jumpg(){
          this.$router.push({path:'/xiaoxizhongxin'})
      }

  }
  
}
</script>
<style  scoped>
@import "Wode.css";
</style>