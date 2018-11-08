<template>
  <div>

    <div class="tab">

   
        <mt-navbar v-model="selected">
            <mt-tab-item id="1"  @click.native.prevent="active = 'tab-container1'" >商家</mt-tab-item>
            <mt-tab-item id="2"  @click.native.prevent="active = 'tab-container2'">评价</mt-tab-item>
            <mt-tab-item id="3"  @click.native.prevent="active = 'tab-container3'">领券</mt-tab-item>
        </mt-navbar>
     </div>    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        	<ul class="shajia" style="font-size:0.26rem;margin-left:0.4rem; line-height: 0.9rem; color: #666666;">
                <li> <i style=" margin-right: 0.16rem" class="iconfont icon-Group- "></i><span style=" text-indent:0.16rem;">萧山区钱江世纪城广场路</span></li>
                <li> <i style=" margin-right: 0.16rem" class="iconfont icon-shijian "></i><span style=" text-indent:0.16rem; ">营业时间：8:20-22:30</span></li>
                <li> <i style=" margin-right: 0.16rem" class="iconfont icon-weibiaoti- "></i><span style=" text-indent:0.16rem; ">联系方式：18838495796</span></li>
                <li> <i style=" margin-right: 0.16rem" class="iconfont icon-gouwudai201 "></i><span style=" text-indent:0.16rem; ">已售：628</span></li>
                <li> <i style=" margin-right: 0.16rem" class="iconfont icon-wodeyouhuijuan "></i><span style=" text-indent:0.16rem; ">起送：¥10  配送：¥10</span></li>
                
            </ul>   
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
        	<!-- cell组件 -->
         <div v-bind:class="{ pingjun: isActive }">
             <div v-bind:class="{pingfen:true}">
                 <span>4.8</span>
             </div>
             <div  v-bind:class="{fll:true}">
             <div>
                <img v-for="(star,index) in stars" v-bind:src="star.src" :key="index" v-bind:class="{pingfen_tu:true}"/>
                {{reversedMessage}}
                  
             </div>
             <div  v-bind:class="{pingfen_h:true}">
                 <span v-bind:class="{pingfen_t:true}">真实评价</span>    
             </div>
             </div>

         </div>
         <!-- pinglu -->
         <div :class="{renping:true}">
             <ul :class="{renping_oul:true}"  >
                 <li >
                     <ul  :class="{renping_oul:true}" >
                         <li  :class="{fll:true}"><img src="../../../assets/logo.png" :class="{renping_touxing:true}"></li>
                        <li :class="{flr:true}">
                            <ul  >
                                <li>
                                    <ul :class="{fll:true}"  style="width:4.7rem;height:0.44rem">
                                        <li :class="{renping_yonghuming:true,fll:true}">租田种菜</li>
                                        <li>
                                            <div>
                                                <img v-for="(star,index) in stars" v-bind:src="star.src" :key="index" v-bind:class="{pingfen_tu:true,flr:true}"/>
                                                {{reversedMessage}}
                                                
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li><span v-bind:class="{pingfen_shijian:true,fll:true}">2018-06-21 15:30</span></li>
                            </ul>
                        </li>
                     </ul>
                 </li>
                  <li :class="{pl:true}"  >菜很好，很新鲜，味道很不错！</li>
                 
                 <li>
                     <ul>
                         <li ><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                         <li><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                         <li><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                         <li><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                     </ul>
                 </li> 
             </ul>
         </div>
         <!-- pinglu -->
          <div :class="{renping:true}">
             <ul :class="{renping_oul:true}"  >
                 <li >
                     <ul  :class="{renping_oul:true}" >
                         <li  :class="{fll:true}"><img src="../../../assets/logo.png" :class="{renping_touxing:true}"></li>
                        <li :class="{flr:true}">
                            <ul  >
                                <li>
                                    <ul :class="{fll:true}"  style="width:4.7rem;height:0.44rem">
                                        <li :class="{renping_yonghuming:true,fll:true}">租田种菜</li>
                                        <li>
                                            <div>
                                                <img v-for="(star,index) in stars" v-bind:src="star.src" :key="index" v-bind:class="{pingfen_tu:true,flr:true}"/>
                                                {{reversedMessage}}
                                                
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li><span v-bind:class="{pingfen_shijian:true,fll:true}">2018-06-21 15:30</span></li>
                            </ul>
                        </li>
                     </ul>
                 </li>
                  <li :class="{pl:true}"  >菜很好，很新鲜，味道很不错！</li>
                 
                 <li>
                     <ul>
                         <li ><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                         <li><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                         <li><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                         <li><img :class="{fll:true,zhenshizhaopian:true}" src="../../../assets/logo.png" ></li>
                     </ul>
                 </li> 
             </ul>
         </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
        	<!-- juan -->
            <div class="youhuijuan">
                <div class="banyuana"></div>
                <div class="banyuanb"></div>
                <div class="youhuijuannei"  >
                    <div class="youhuijuanneifenge">
                        <div class="youhuijuanmianzhi">￥10</div>
                        <div class="youhuijuanbtn" >领取</div>
                        
                    </div>
                    <div class="flra">
                        <p class="youhuijuanmainshua">太阳公社10元新人红包</p>
                        <p class="youhuijuanmainshub">可与积分同时使用</p>
                        <p class="youhuijuanmainshub">有效期至2018.9.10</p>
                    </div>
                </div>
            </div>
            
            
        </mt-tab-container-item>
      </mt-tab-container>
    </div>


</div>
</template>
<script>
import bo from "../../../assets/bolunan.png"
import boa from "../../../assets/boluu.png"
var starOffImg = bo;
var starOnImg = boa;
export default {
  name: 'Huoquweizhi',
      data () {
    return {
      msg: 'moban',
        active: 'tab-container1',
        selected:1,
        isActive:true,
       stars: [{
                            src: starOffImg,
                            active: false
                        }, {
                            src: starOffImg,
                            active: false
                        }, {
                            src: starOffImg,
                            active: false
                        },
                        {
                            src: starOffImg,
                            active: false
                        }, {
                            src: starOffImg,
                            active: false
                        }
                    ],
                    starNum: 5,

    }
    
  },
  computed: {
    
    reversedMessage: function () {
      
       
        for(var i = 0; i < this.starNum; i++) {
            this.stars[i].src = starOnImg;
            this.stars[i].active = true;
    }
                            
    }
  }           
 
  
}
</script>
<style  scoped>
@import "Shangjiaifo.css";
</style>