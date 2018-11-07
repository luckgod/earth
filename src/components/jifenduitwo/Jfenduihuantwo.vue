<template>
  <div>
      <div class="tit">
         <i class="iconfont icon-left zitia"></i>
         <i class="iconfont icon-fenxiang zitib"></i>
      </div>
      <div>
    <div class="lunbo">
        <mt-swipe :auto="4000" style="width:100vw;height:5.6rem;">
            <mt-swipe-item><img src="../../assets/logo.png" alt="" class="kimg"></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/logo.png" alt="" class="kimg"></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/logo.png" alt="" class="kimg"></mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="se">
        <p class="proname">赣南高级脐橙2个</p>
        <p class="projia">店铺价：¥98.00</p>
        <p class="projifen">880积分</p>
    </div>
    <div class="sea">
        <p  class="proname">商品详情</p>
        <ul>
           <li> <img src="../../assets/logo.png" class="kimg" alt=""></li>
           <li> <img src="../../assets/logo.png" class="kimg" alt=""></li>
           <li> <img src="../../assets/logo.png" class="kimg" alt=""></li>
            <li> <img src="../../assets/logo.png" class="kimg" alt=""></li>
            <li> <img src="../../assets/logo.png" class="kimg" alt=""></li>
           <li> <img src="../../assets/logo.png" class="kimg" alt=""></li>
        </ul>
    </div>
      </div>
      <div class="footer">
          <p class="zuihou">已售罄</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'jfenduihuantwo',
      data () {
    return {
      msg: 'moban'
    }
  }
  
}
</script>
<style  scoped>
@import "jfenduihuantwo.css";
</style>