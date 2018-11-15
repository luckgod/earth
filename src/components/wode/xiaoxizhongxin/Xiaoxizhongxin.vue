<template>
  <div>
      <div class="warp">

       <div class="bg">
      <div class="tabh">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1" @click.native.prevent="active = 'tab1'" >通知</mt-tab-item>
                    <mt-tab-item id="2" @click.native.prevent="active = 'tab2'">公告</mt-tab-item>   
                </mt-navbar>
            </div>
         </div>


           <!-- tab-container -->
      <div class="tabcon">
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" >
          
            <mt-tab-container-item id="tab1">
            <div class="yijianhuifu">
                <div class="yijianhuifua">
                     <p>意见反馈回复</p>
                    <p>提问： 我本来可以收4份蔬菜的，可是为什么却收 到了一份西蓝花和一份土豆？</p>
                    <p>回复： 您的问题我们已经了解到了，会帮您解决的。</p>
                    <p>2018-10-10 14:32:17</p>
                </div>
            </div>
            <div class="yijianhuifu">
                <div class="yijianhuifua">
                     <p>配送清单提醒</p>
                    <p>尊敬的地主：我们将于2018-10-10为您配送蔬菜，请您在2018-10-9 17:00:00之前收割所需蔬菜，逾期我们将自动为您科学配送。</p>
                   
                    <p>2018-10-10 14:32:17</p>
                </div>
            </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                   <div class="yijianhuifu">
                <div class="yijianhuifua ">
                     <p>关于租了个田登录注册的注意事项</p>
                    <p>目前版本持续更新，为保证您的数据一致，请您务 必使用绑定手机号进行登录。</p>
                   
                    <p>2018-10-10 14:32:17</p>
                </div>
                <div><i class="iconfont icon-right  ziti"></i></div>
            </div>
            </mt-tab-container-item>
           
        </mt-tab-container>
         </div>
    </div>
   </div> 
  </div>
</template>
<script>
export default {
  name: 'Xiaoxizhongxin',
      data () {
    return {
      msg: 'moban',
       active: 'tab1',
       selected:'tab1',
    }
  }
  
}
</script>
<style  scoped>
@import "Xiaoxizhongxin.css";
</style>