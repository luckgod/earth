<template>
  <div>
   <div class="onese">
     <div class="fll dingwei" @click="jump">
       <i class="iconfont icon-Group-"></i>
       <span class="weizhi">德信产业园</span>
       <i class="iconfont icon-xiangxia smell"></i>
     </div>
     <div class="flr ser" @click="jumpa" to='' >
      <input type="text" placeholder="搜索你想要的商品">
     </div>
     <div class="twose">
        <div class="fll twosel" @click="jumpf">
          <span class="twosela">{{res.integralBal}}积分</span>
          <span class="twoselb">={{res.amtBal}}元</span>
        </div>
        <router-link class="flr twoser" to="fukuanma" tag="div">
            <i class="iconfont icon-wodeyouhuijuan smell"></i>
            <span>会员码</span>
            
        </router-link>
    </div>
   </div>
    
    <!-- 轮播 -->
  <mt-swipe :auto="4000" class="lunbo"  :show-indicators="true">
    <mt-swipe-item class="lunboli" v-for="item  in res.banners" ><img :src='item.operImage' alt="" ></mt-swipe-item>
   
  </mt-swipe>
  <!-- 卡片 -->
  <div class="card">
    <div class="fll">
      <ul>
        <router-link  to="Quanbumendian" class="card_hea" tag="li">
          <span> <span v-html="storeName"></span>  <i class="iconfont icon-right "></i></span>
        </router-link>
        <li class="card_se">
          <img src="../../assets/buluo.jpg" alt=""  @click="jumpba">
          <span  @click="jumpba" class='cspan'>{{evaluateStar}}分</span>
          <span  @click="jumpbc" class='cardjuan'>劵</span>
          <span  @click="jumpbc">¥{{couponAmta}}</span>
          <span  @click="jumpbc">¥{{couponAmtb}}</span>  
        </li>
      </ul>
    </div>
    <div class="flr card_rimg">
      <img :src="storeIcon" alt="">
      <!-- <span class="chuxian">休息中</span> -->
    </div>
  </div>  
  <!-- 分类 -->
  <div class="fenlie">
    <ul>
      <li>
        <div>
            <i class="iconfont icon-shuiguo"></i>
        </div>
        <span>新鲜水果</span>
      </li>
      <li>
        <div>
            <i class="iconfont icon-shucai  "></i>
        </div>
        <span>安心蔬菜</span>
      </li>
      <li>
        <div>
            <i class="iconfont icon-roulei"></i>
        </div>
        <span>肉禽类</span>
      </li>
      <li>
        <div>
            <i class="iconfont icon-haixian"></i>
        </div>
        <span>水产海鲜</span>
      </li>
      <li @click="jumpg">
        <div >
            <i class="iconfont icon-more_light"></i>
        </div>
        <span >更多</span>
      </li>
    </ul>
  </div>
<!-- 运营位 -->
<mt-swipe :auto="4000" class="lunbo_two"  :show-indicators="false">
    <mt-swipe-item class="lunboli_two"><img src="../../assets/lunbosucia1.jpg" alt=""> <img src="../../assets/lunbosucia1.jpg" alt=""></mt-swipe-item>
    
  </mt-swipe>
<!-- 秒杀 -->
<div class="miaosha">
  <div class="miaosha_hea"> 
    <ul>
      <li class="fll miaosha_hea_l" >
        <span>秒杀商品</span>
        <span class="miaosha_hea_b" >02</span>
        <span>:</span>
        <span class="miaosha_hea_b">02</span>
        <span>:</span>
        <span class="miaosha_hea_b">{{minutes}}</span>
        
      </li>
      <li class="flr miaosha_hea_r" @click="jumpc">
          <span>更多</span>
          <i class="iconfont icon-right "></i>
      </li>
    </ul>
  </div>
  <div class="miaosha_pro">
    <ul class="slide-box">
      <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
    </ul>
  </div>
</div>
<!-- 特价 -->
<div class="miaosha">
  <div class="miaosha_hea"> 
    <ul>
      <li class="fll tejia_hea_l">
        <span>特价商品</span>
        <i class="iconfont icon-huoyan"></i>
      </li>
      <li class="flr miaosha_hea_r" @click="jumpd">
          <span>更多</span>
          <i class="iconfont icon-right "></i>
      </li>
    </ul>
  </div>
  <div class="miaosha_pro">
    <ul class="slide-box">
      <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
    </ul>
  </div>
</div>
<!-- 限时秒杀 -->
<div class="xianshimiaosha neiyinying" >
  <img src="../../assets/lunbosucia1.jpg" alt="" @click="jumpe">
  <div class="xianshi_dingwei">
    <div class="miaosha_pro">
    <ul class="slide-box">
      <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
       <li class="slide-box-oli">
        <div><img src="../../assets/lunbosucia1.jpg" alt=""></div>
        <div  class="slide-box-na">赣南高级脐橙2个</div>
        <div class="slide-box-sho"><span class="fll">¥8.80</span><i class="iconfont icon-gouwuche flr"></i></div>
      </li>
    
    </ul>
  </div>
  </div>
</div>
</div>

 
  
</template>

<script>
  import Vue from 'vue';
  import axios from "axios"
 import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'Syindex',
  data () {
    return {
      res:'',
      Mshijian:'',
      storeCode:'',
      promoCode:'',
      storeName:'',
      evaluateStar:'',
      storeIcon:'',
      couponAmta:'',
      couponAmtb:'',
      hours:'',
      minutes:'',
      seconds:'',
    }
  },
  methods:{
    jump(){
    //this.$router.push("/cart")
    //传递的参数用{{ $route.query.goodsId }}获取
    this.$router.push({path:'/huoquweizhi'})
    //this.$router.go(-2)
    //后退两步
    },
    jumpa(){
      this.$router.push({path:'/shangpinsousu'})
    },
   
     jumpba(){
      this.$router.push({path:'/Shangjiaifo',query:{num:'tab-container2'}})
    },
     jumpbc(){
      this.$router.push({path:'/Shangjiaifo',query:{num:'tab-container3'}})
    },
    jumpc(){
      this.$router.push({path:'/miaoshashangpin'})
    },
    jumpd(){
      this.$router.push({path:'/tejiashangpin'})
    },
    jumpe(){
      this.$router.push({path:'/laingdanghuodong'})
    },
    jumpg(){
      this.$router.push({path:'/fenlei'})
    },
     jumpf(){
      this.$router.push({path:'/jifenshangcheng'})
    },
    fetchData(){
          this.dataApi.ajax('moveAppHome',{localPrecision:'120.231784',localDimension:'30.197081',},res=>{
            console.log(res)
           
            this.res=res
            this.Mshijian=res.vegetMsPromotionVos[0].promoEndTime
            this.storeCode=res.vegetStoreVo.storeCode
            this.promoCode=res.vegetMsPromotionVos[0].promoCode
            this.storeName=res.vegetStoreVo.storeName
            this.evaluateStar=res.vegetStoreVo.evaluateStar
            this.storeIcon=res.vegetStoreVo.storeIcon
            this.couponAmta=res.vegetStoreVo.vegetCouponVos[0].couponAmt
            this.couponAmtb=res.vegetStoreVo.vegetCouponVos[1].couponAmt
            this.miaoshao()
          })
        },
        // 
    miaoshao(){
          //  console.log(this.Mshijian)  
          
          var date2=new Date(this.Mshijian)
          setInterval(function(){
           var date1=new Date()	
          
          
          var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
       
          //计算出相差天数
          var days=Math.floor(date3/(24*3600*1000))
          //计算出小时数
          var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
          var hours=Math.floor(leave1/(3600*1000))
            // console.log(hours)
            
           //计算相差分钟数
           var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
           var minutes=Math.floor(leave2/(60*1000))
          //计算相差秒数
           var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
           var seconds=Math.round(leave3/1000)
            // console.log(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
            this.hours=hours
            this.minutes=minutes
           this.seconds=seconds
          //  console.log(this.seconds)
           },1000)
        
         
        this.dataApi.ajax('promotionGoods',{storeCode:this.storeCode,promoCode:this.promoCode,},res=>{
             console.log(res)

           
           })
    }    
   
},

mounted() {
 
  
},
created(){
   this.fetchData()
   
},
computed:{
      
}
}

</script>


<style scoped>
.lunbo{
  width: 100%;
  height: 2.88rem;
  margin:0.16rem 0;  
}
.lunboli img{
  width: 100%;
  height: 2.88rem;
}
.onese{
  overflow: hidden;
  background:url(../../assets/img/16.png) ;
  color: #ffffff;
  width:100vw ;
}
.fll{
  float: left;

}
.flr{
  float: right;
}
.dingwei{
  width: 2.6rem;
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.26rem;
  margin-left:0.1rem; 

}
.ser{
  height: 0.4rem;
  margin-top:-0.44rem;
  margin-right:0.1rem; 
  color: #ffffff;

}
.ser input{
width: 3.06rem;
height: 0.5rem;
border-radius:0.2rem;
 background:#83c878;
 text-indent: 0.2rem;
 color: #ffffff;
 font-size:0.24rem; 
 line-height: 0.5rem;
 
}
.twose{
  
   width: 100vw;
   height:0.7rem;
   line-height: 0.7rem;
   color: #ffffff;
   overflow: hidden;
   font-size: 0.24rem;
   text-indent: 0.1rem;
 
}
input::-webkit-input-placeholder {
  
 
     color: #ffffff;
 }
.twosela{
  font-size: 0.38rem;
}
.twoser{
  text-indent: -0.5rem;
}
 /* 卡片 */
.card{
  width: 95vw;
  height: 1.4rem;
  margin: 0 auto;
  box-shadow: 0px 0px 8px  #c8c8cd;
  overflow: hidden;
}
.card_hea{
  font-size: 0.32rem;
  line-height:0.76rem;
   text-indent:0.14rem;
  
}
.card_hea span{
 font-weight: 600;

}
.card_se{
  line-height: 0.5rem;
  font-size:0.24rem;
  text-indent:0.14rem;
}
.card_se img{
  display: inline-block;
  width: 0.25rem;
  height: 0.4rem;
 line-height: 0.33rem;
 vertical-align: middle;
 
}
.card_se span{
  word-spacing:0.12rem;;
   vertical-align: middle;

}
.cspan{
  color:#65ad57;
}
.cardjuan{
  display: inline-block;
  background: #f9a51f;
  color: #ffffff;
  line-height: 0.4rem;
  font-size: 0.1rem;
  width: 0.4rem;
  height: 0.4rem;
  text-indent:0.08rem;
  
}
.card_rimg{
  position: relative;
}
.card_rimg img{
  width: 1rem;
  height: 1rem;
  margin-top: 0.24rem;
  margin-right: 0.14rem;
  border-radius :0.1rem;
  background: #5ab54c; 
}
.card_rimg span{
  position: absolute;
  font-size: 0.16rem;
  width: 1rem;
  height: 1rem;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 1rem;
  top: 0.23rem;
  color: #ffffff;
  border-radius:0.1rem; 
}

/* 分类 */
.fenlie ul{
  display: flex;
  width: 100vw;
  height: 1.84rem;
  font-size:0.26rem;
  justify-content:space-around;
  margin-top: 0.08rem;
  overflow: hidden;
  text-align: center;

   
}
.fenlie ul li div{
  width: 0.82rem;
  height: 0.82rem;
  margin:0.18rem;
  border-radius: 0.41rem;
  background: #5ab54c;
  color: #ffffff;
 
  text-align: center;
 
}
.fenlie ul li div i{
 font-size: 0.52rem;
 line-height: 0.82rem;
 
}
.fenlie ul li span{
  line-height: 0.64rem;
}
/* <!-- 运营位 --> */
.lunbo_two{
  width: 100vw;
  height: 1.64rem;
  margin-bottom:0.2rem; 
  
}
.lunboli_two img{
  width: 48%;
  height: 1.64rem;
  margin-left:0.1rem;
  margin-right:-0.2rem;  
}
/* 秒杀 */
.miaosha{
  width: 95vw;
  height:3.8rem ;
  overflow: hidden;

  font-size:0.26rem; 
  margin: 0 auto;
}
.miaosha_hea{
line-height: 0.5rem;
padding-top:0.15rem;
padding-bottom:0.34rem;
overflow: hidden;
}
.miaosha_hea_l{
  background: #f8b936;
  border-radius:0.3rem;
  color: #ffffff;
  overflow: hidden;
  padding-right:0.22rem;
  padding-left:0.2rem;
 box-shadow: 0 0 4px #c8c8cd;
}


.miaosha_hea_b{
  display: inline-block;
  width: 0.52rem;
  height: 0.36rem;
  background: #ffffff;
  color:#f8b936 ;
  font-size:0.2rem;
  line-height: 0.36rem;
  text-align:center;
  border-radius: 0.1rem;
 
}
.miaosha_hea_r{
  color: #999999;
  font-size:0.24rem ;
}
.miaosha_pro ul li div img{
  display: inline-block;
  text-align: center;
  width: 1.78rem;
  height:1.62rem;
}
.slide-box{
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling:touch;
           
}
.slide-box::-webkit-scrollbar{
  display:none;
}
.slide-box-oli{
  width: 32vw;
 
  text-align: center;
}
.slide-box-na{
  line-height:0.66rem; 
  font-size: 0.24rem;
}
.slide-box-sho{
  overflow: hidden;
}
.slide-box-sho span{
  color: #f6302f;
  font-weight: 600;
   font-size: 0.24rem;

  text-indent: 0.16rem;
}
.slide-box-sho i{
  margin-right:0.16rem;
  color:#ffa550; 

}
/* 特价 */
.tejia_hea_l span{
  width: 1.8rem;
  height:0.58rem ;
  background:#f5eadf; 
  color: #f9a449;
  border-radius:0.5rem;
  padding:0.04rem 0.22rem; 
  box-shadow:0 0 spx #c8c8cd; 
}
.tejia_hea_l i{ 
    background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(235, 235, 24)), to(rgb(235, 103, 24)));
    -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
    -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
 
}
.xianshimiaosha img{
 width: 100vw;
 height: 4.5rem;

}
.xianshimiaosha{
  position: relative;
}
.xianshi_dingwei{
  height: 3rem;
  width: 96vw;
  position: absolute;
  top: 1.52rem;
  right:0;
  left: 0;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 10px #888888;
  padding-top:0.4rem; 
  
}
.neiyinying{
  padding-bottom:0.8rem;
  box-shadow:0px -5px 10px #99999975 inset;;  
}
.xiaoshi{
  display: none;
}
.chuxian{
 display: block;
}
</style>