<template>
  <div>
      <div class="warp">
          <ul class="list">
              <li class="item"><span>头像</span><div class="zbname"> <img src="../../../assets/logo.png" alt=""><i class="iconfont icon-right"></i></div></li>
              <li class="item" @click="juana"><span>名字</span><div class="zbname"> <span>主播咚巴拉</span><i class="iconfont icon-right"></i></div></li>
              
          </ul>

      </div>
  </div>
</template>
<script>
export default {
  name: 'Gerenziliao',
      data () {
    return {
      msg: 'moban'
    }
  },
  methods:{
    juana(){
        this.$router.push({path:'/shezhiname'})
    }
  }
  
}
</script>
<style  scoped>
@import "Gerenziliao.css";
</style>