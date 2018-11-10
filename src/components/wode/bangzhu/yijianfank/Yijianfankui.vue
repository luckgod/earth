<template>
  <div>
      <div class="warp">
          <textarea name="" id="" cols="30" rows="8" class="wenben" placeholder="请留下您宝贵的意见~"></textarea>
           <div class="paizhao"><i class="iconfont icon-zhaoxiangji"></i></div> 
      </div>
        <div class="btn" @click="jauntip">
                <p >提交</p>
            </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  name: 'Yijianfankui',
      data () {
    return {
      msg: 'moban'
    }
  },
  methods:{
      jauntip(){
          Toast({
                message: '提交成功',
                duration: 1000
                });
      }
  }
  
}
</script>
<style  scoped>
@import "Yijianfankui.css";
</style>