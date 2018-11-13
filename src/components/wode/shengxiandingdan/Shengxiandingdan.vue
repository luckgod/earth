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
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" >
          
            <mt-tab-container-item id="tab1">
                <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待付款</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                          <p>待付款</p>
                      </div>
                      <div>
                          <p>取消订单</p>
                      </div>
                  </div>
              </div>

                </div>
<!-- // 222222 -->
              <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待发货</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  
              </div>
                 </div> 
<!-- // -333   -->
                <div>
                    <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待收货</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                          
                      </div>
                      <div >
                          <p >退款</p>
                      </div>
                  </div>
              </div>
                </div>           
<!-- // -444    -->
             <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待评价</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                          <p>去评价</p>
                      </div>
                      <div>
                         
                      </div>
                  </div>
              </div>    
                  </div>     
<!-- // -555                                 -->
                <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p class="yanse">已完成</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69545.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                        
                      </div>
                      <div>
                         <p>删除订单</p>
                      </div>
                  </div>
              </div>    
                  </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="tab2">
              <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待付款</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                          <p>待付款</p>
                      </div>
                      <div>
                          <p>取消订单</p>
                      </div>
                  </div>
              </div>
              <!-- sesesesesesesesesesesesesesesesesese -->
               <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待付款</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                          <p>待付款</p>
                      </div>
                      <div>
                          <p>取消订单</p>
                      </div>
                  </div>
              </div>
            </mt-tab-container-item>

             <mt-tab-container-item id="tab3">
                 <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待发货</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  
              </div>
                 </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="tab4">
                <div>
                    <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待收货</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                          
                      </div>
                      <div >
                          <p >退款</p>
                      </div>
                  </div>
              </div>
                </div>
            </mt-tab-container-item>

             <mt-tab-container-item id="tab5">
                  <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               <p>待评价</p>
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                  <div class="btn_a">
                      <div>
                          <p>去评价</p>
                      </div>
                      <div>
                         
                      </div>
                  </div>
              </div>    
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
       active: 'tab2',
       selected:'tab1',
    }
  }
  
}
</script>
<style  scoped>
@import "Shengxiandingdan.css";
</style>