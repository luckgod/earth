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
          <p class="zuihou">兑换</p>
      </div>
      <mt-popup
        v-model="popupVisible"
       
        style="border-radius:0.2rem; "
        >
        <div class="warp">
            <div class="tanc">
                <p class="tanct">提醒</p>
            </div>
            <div class="maisu">
                <p class="maisua">积分商品，需前往该门店自</p>
                <p class="maisua">行提货，是否进行兑换？</p>
            </div>
            <div class="btn">
                <span class="quxiao">取消</span>
                <span class="que">确定</span>

            </div>
           

           
        </div>
        </mt-popup>
  </div>
</template>
<script>
export default {
  name: 'Jfenduihuan',
      data () {
    return {
      msg: 'moban',
      popupVisible:true,
    }
  }
  
}
</script>
<style  scoped>
@import "Jfenduihuan.css";
</style>