<template>
  <div>
    <div class="bg">
      <div class="tabh">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1" @click.native.prevent="active = 'tab1'" >未使用</mt-tab-item>
          <mt-tab-item id="2" @click.native.prevent="active = 'tab2'">已使用</mt-tab-item>
          <mt-tab-item id="3" @click.native.prevent="active = 'tab3'">已过期</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <div class="tabcon">
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" >
          
            <mt-tab-container-item id="tab1">
               <div class="youhuijuan ynsea">
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

             <div class="youhuijuan ynsea">
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
            <mt-tab-container-item id="tab2">
              <!-- ----------------------------- -->
             <div class="youhuijuan ynseb">
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
                <div class="banyuanbc"><i class="iconfont icon-yishiyong "></i></div>
            </div>
            <!--111111111111 -->
             <div class="youhuijuan ynseb">
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
                <div class="banyuanbc"><i class="iconfont icon-yishiyong "></i></div>
            </div>  
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
               <!--111111111111 -->
              <div class="youhuijuan ynseb">
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
                 <div class="banyuanbd"><i class="iconfont icon-yiguoqi "></i></div>
            </div>
             <!--111111111111 -->
              <div class="youhuijuan ynseb">
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
                 <div class="banyuanbd"><i class="iconfont icon-yiguoqi "></i></div>
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
  name: 'Fukuanmaw',
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
@import "Fukuanmaw.css";
</style>