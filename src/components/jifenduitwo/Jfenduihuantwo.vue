<template>
  <div>
      <div class="tit">
         <i class="iconfont icon-left zitia" @click="jumpa"></i>
         <i class="iconfont icon-fenxiang zitib" @click="fnx"></i>
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
       <mt-popup
                v-model="popupVisibla"
                position="bottom"
                
                >
                <div class="fenxiang">
                    <div class="fenxiang_to">
                        <ul>
                            <li><i class="iconfont icon-iconfontzhizuobiaozhunbduan32  zitiaa"></i> <span class="fenxiang_miao">微信好友</span> </li>
                            <li><i class="iconfont icon-weixinpengyouquan zitibb"></i> <span class="fenxiang_miao">微信朋友圈</span> </li>
                            <li><i class="iconfont icon-lianjie ziticc"></i> <span class="fenxiang_miao">微信朋友圈</span> </li>
                        </ul>
                    </div>
                    <div  class="fenxiangbtn">
                        <span @click="fnxq">取消</span>
                    </div>
        </div>
        </mt-popup>
  </div>
</template>
<script>
export default {
  name: 'jfenduihuantwo',
      data () {
    return {
      msg: 'moban',
        popupVisibla:false,
    }
  },
  methods: {
      jumpa() {
          this.$router.go(-1)
      },
       tanchaun(){
        //   this.$router.push({path:'/shangpinsousu'})
        this.popupVisible=true
      },
      fnx(){
          this.popupVisibla=true
         
      },
      fnxq(){
          this.popupVisibla=false
      },
  },
  
}
</script>
<style  scoped>
@import "jfenduihuantwo.css";
</style>