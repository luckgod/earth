<template>
  <div>
      <div class="one_se">

      </div>
      <div>
          <ul class="warp">
              <li class="item">
                  <div class="one_left">
                      <ul class="one_img_oul">
                          <li class="one_img"><img src="../../../assets/logo.png" alt=""></li>
                          <li class="one_img"><img src="../../../assets/logo.png" alt=""></li>
                          <li class="one_img"><img src="../../../assets/logo.png" alt=""></li>
                          <li class="one_img"><img src="../../../assets/logo.png" alt=""></li>
                           
                      </ul>
                  </div>
                  <router-link class="one_right" to="Dingdanxiangqing" tag="div"> 
                      <span>共2件</span>
                      <i class="iconfont icon-right"></i>
                  </router-link>
              </li>
               <li class=" itema">
                  <div class="one_left">
                      <p  class="one_lefta">支付方式</p>
                  </div>
                  <div class="one_right">
                      <span  @click.stop="popupVisible=!popupVisible">支付宝</span>
                      <i class="iconfont icon-right"></i>
                      <mt-popup
                            v-model="popupVisible"
                            
                            >
                        <div class="warpa">
                            <div class="one_ssa">
                                 <span>选择支付方式</span>
                                <i class="iconfont icon-untitled94"></i>
                            </div>
                            <div class="one_ssb">
                                <div class="one_ssba">
                                     <i class="iconfont icon-weixinzhifu"></i>
                                     <span>微信支付</span>
                                        <div class="dingweiwe">
                                            <div class="radio" > 
                                                    <label>
                                                        <input type="radio" name="sex" value="" />
                                                        <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                                    
                                                    </label>
                                                </div>
                                            </div> 
                                </div>
                                <div class="one_ssbb">
                                      
                                      <i class="iconfont icon-big-Pay"></i>
                                       <span>支付宝</span> 
                                       <div class="dingweiwe">
                                    <div class="radio" > 
                                            <label>
                                                <input type="radio" name="sex" value="" />
                                                <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                            
                                            </label>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                            </mt-popup>
                  </div>
              </li>
              <li class=" itema">
                  <div class="one_left">
                      <p  class="one_lefta">优惠券</p>
                  </div>
                  <router-link class="one_right" to="fukuanyouhuijuan" tag="div">
                      <span><span class="one_rightb">0</span>张可用</span>
                      <i class="iconfont icon-right"></i>
                  </router-link>
              </li>
              <li class=" itema">
                  <div class="one_left">
                      <p  class="one_lefta">可用50积分抵用5元</p>
                  </div>
                  <div class="one_right">
                     
                  </div>
              </li>
               <li class=" itema">
                  <div class="one_left">
                      <p  class="one_lefta">商品金额</p>
                  </div>
                  <div class="one_right">
                      <span>¥98.00</span>
                     
                  </div>
              </li>
               <li class=" itema">
                  <div class="one_left">
                      <p  class="one_lefta">配送费</p>
                  </div>
                  <div class="one_right">
                      <span>¥0.00</span>
                      
                  </div>
              </li>
                <li class=" itema">
                  <div class="one_left">
                      <p  class="one_lefta">备注</p>
                  </div>
                  <router-link class="one_right" to="tianjiabeizhun">
                      <span><span class="one_rightb"></span>选填，告诉我们您的特殊需求</span>
                      <i class="iconfont icon-right"></i>
                  </router-link>
              </li>
          </ul>
      </div>
      <div class="three_bo">
          <div class="qison">
              <span>还差8.80元起送</span>
          </div>
          <div class="sfukuan">
              <span>
                  实付：
              </span>
              <span>
                  ¥0.00
              </span>
              <span class="btna yaseaa">
                  提交订单
              </span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Querendingdan',
      data () {
    return {
      msg: 'moban',
      popupVisible:false,
    }
  }
  
}
</script>
<style  scoped>
@import "Querendingdan.css";
</style>