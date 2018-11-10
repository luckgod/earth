<template>
  <div>
      <div class="warp">
          <ul class="list">
            <li class="itm"><i class="iconfont icon-zhuyi"></i> <span>登录注册注意事项</span><i class="iconfont icon-right"></i></li>
            <li class="itm"><i class="iconfont icon-liucheng"></i> <span>商家入驻流程</span><i class="iconfont icon-right"></i></li>
            <li class="itm"><i class="iconfont icon-san"></i> <span>安全注意事项</span><i class="iconfont icon-right"></i></li>
          </ul>
           <div class="btn" @click="jumpa">
                <p >意见反馈</p>
            </div>
      </div>
     
  </div>
</template>
<script>
export default {
  name: 'Bangzhuzhongxin',
      data () {
    return {
      msg: 'moban'
    }
  },
  methods:{
      jumpa(){
        this.$router.push({path:'/yijianfankui'})
      }
  }
  
}
</script>
<style  scoped>
@import "Bangzhuzhongxin.css";
</style>