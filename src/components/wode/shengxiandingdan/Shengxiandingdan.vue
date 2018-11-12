<template>
  <div>
      <div class="warp">

       <div class="bg">
      <div class="tabh">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1" @click.native.prevent="active = 'tab1'" >全部</mt-tab-item>
                    <mt-tab-item id="2" @click.native.prevent="active = 'tab2'">待付款</mt-tab-item>
                    <mt-tab-item id="3" @click.native.prevent="active = 'tab3'" >待发货</mt-tab-item>
                    <mt-tab-item id="4" @click.native.prevent="active = 'tab4'">待收货</mt-tab-item>      
                    <mt-tab-item id="5" @click.native.prevent="active = 'tab5'">待评价</mt-tab-item>       
                </mt-navbar>
            </div>
         </div>


           <!-- tab-container -->
      <div class="tabcon">
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          
            <mt-tab-container-item id="tab1">
                <div>
                111

                </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="tab2">
              <div>
                 <div>
                     
                 </div>
              </div>
            </mt-tab-container-item>

             <mt-tab-container-item id="tab3">
                 <div>
                     333
                 </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="tab4">
                <div>
                    444
                </div>
            </mt-tab-container-item>

             <mt-tab-container-item id="tab5">
                  <div>
                      555
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
  name: 'Shengxiandingdan',
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
@import "Shengxiandingdan.css";
</style>