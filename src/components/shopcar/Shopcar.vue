<template>
  <div>
      <div class="tabheader">
          <span class="tabheader_con">购物车</span>
          <div class="tabheader_del">
              <span>删除</span>
          </div>
      </div>
      <div class="one_se">
          <div class="one">
              <div>
                  <ul class="warp">
                      <li class="tit"> 
                          <i class="iconfont icon-dianpu1 "></i> <span>水天成生鲜店</span>
                           <div class="dingweiwe">
                            <div class="radio" > 
                                    <label>
                                        <input type="checkbox" name="sex" value="" />
                                        <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                    </label>
                                </div>
                            </div> 
                      </li>
                      <li class="con">
                          <div class="lefta">
                              <div class="lefta_t">
                                  <img src="../../assets/logo.png" alt="">
                              </div>
                              <div class="lefta_y">
                                 <p>有机玉米</p>
                                 <p>¥10.00(已优惠5.00元)</p>
                              </div>
                          </div>
                          <div class="rughtb">
                              <i class="iconfont icon-jian zita" @click="add"></i>
                              <span>{{pronum}}</span>
                               <i class="iconfont icon-jia zitb" @click="jian"></i>
                          </div>
                           <div class="dingweiwe">
                            <div class="radio" > 
                                    <label>
                                        <input type="checkbox" name="sex" value="" />
                                        <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                    
                                    </label>
                                </div>
                            </div> 
                      </li>
                  </ul>
              </div>
          </div>
        <!--  -->
         <div class="one">
              <div>
                  <ul class="warp">
                      <li class="tit"> 
                          <i class="iconfont icon-dianpu1 "></i> <span>水天成生鲜店</span>
                           <div class="dingweiwe">
                            <div class="radio" > 
                                    <label>
                                        <input type="checkbox" name="sex" value="" />
                                        <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                    
                                    </label>
                                </div>
                            </div> 
                      </li>
                      <li class="con">
                          <div class="lefta">
                              <div class="lefta_t">
                                  <img src="../../assets/logo.png" alt="">
                              </div>
                              <div class="lefta_y">
                                 <p>有机玉米</p>
                                 <p>¥10.00(已优惠5.00元)</p>
                              </div>
                          </div>
                          <div class="rughtb">
                              <i class="iconfont icon-jian zita"></i>
                              <span>0</span>
                               <i class="iconfont icon-jia zitb"></i>
                          </div>
                           <div class="dingweiwe">
                            <div class="radio" > 
                                    <label>
                                        <input type="checkbox" name="sex" value="" />
                                        <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                    
                                    </label>
                                </div>
                            </div> 
                      </li>
                      <li class="con">
                          <div class="lefta">
                              <div class="lefta_t">
                                  <img src="../../assets/logo.png" alt="">
                              </div>
                              <div class="lefta_y">
                                 <p>有机玉米</p>
                                 <p>¥10.00(已优惠5.00元)</p>
                              </div>
                          </div>
                          <div class="rughtb">
                              <i class="iconfont icon-jian zita"></i>
                              <span>{{pronum}}</span>
                               <i class="iconfont icon-jia zitb"></i>
                          </div>
                           <div class="dingweiwe">
                            <div class="radio" > 
                                    <label>
                                        <input type="checkbox" name="sex" value="" />
                                        <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                    
                                    </label>
                                </div>
                            </div> 
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="two_se">
          <div class="two_sa">
              <span>因库存原因而导致失效的商品</span>
              <span>一键清除</span>
          </div>
                    <div class="one">
              <div>
                  <ul class="warp">
                     
                      <li class="con">
                          <div class="lefta">
                              <div class="lefta_t">
                                  <img src="../../assets/logo.png" alt="">
                              </div>
                              <div class="lefta_y">
                                 <p>有机玉米</p>
                                 <p>¥10.00(已优惠5.00元)</p>
                              </div>
                          </div>
                         <div class="dw">
                             <span>失效</span>
                           
                         </div>
                           
                      </li>
                  </ul>
              </div>
            </div>
      </div>
      <div class="thre_se">
          <div class="thre_sea">
              <img src="../../assets/img/c.png" alt="">
          </div>
          <div class="item">
            <ul>
                <li>
                    <div class="liea">
                        <ul class="lieb">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥8.80</span>  <span><i class="iconfont icon-gouwuche1 "></i></span></li>
                        </ul>
                        <ul class="liec">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥855.80</span>  <span><i class="iconfont icon-gouwuche1 "></i></span></li>
                        </ul>
                    </div>
                    <div class="liea">
                        <ul class="lieb">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥8.80</span>  <span><i class="iconfont icon-gouwuche1 "></i></span></li>
                        </ul>
                        <ul class="liec">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥8.80</span>  <span><i class="iconfont icon-gouwuche1 "></i></span></li>
                        </ul>
                    </div>
                    <div class="liea">
                        <ul class="lieb">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥8.80</span>  <span><i class="iconfont icon-gouwuche1 "></i></span></li>
                        </ul>
                        <ul class="liec">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥8.80</span>  <span><i class="iconfont icon-gouwuche1 "></i></span></li>
                        </ul>
                    </div>
                    <div class="liea">
                        <ul class="lieb">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥8.80</span>  <span><i class="iconfont icon-jian "></i></span></li>
                        </ul>
                        <ul class="liec">
                            <li class="proimg"><img src="../../assets/logo.png" alt=""></li>
                            <li class="proname"><p>赣南高级脐橙2个</p></li>
                            <li class="projia"><span>¥8.80</span>  <span><i class="iconfont icon-jian "></i></span></li>
                        </ul>
                    </div>
                   
                   
                   
                   
                    
                </li>
            </ul>
          </div>
          
      </div>
      <div class="four_se">
              <ul class="four_se_oul ">
                  <li class="four_se_oli olia"><p>全选</p></li>
                  <li class="four_se_oli olib">
                    <p>合计：¥49.00</p>
                    <p>（需要配送费5元，支持自提）</p>
                  </li >
                  <li class="four_se_oli olic"><router-link to='querendingdan' tag="p">选好了</router-link></li>
              </ul>
              <div class="dingweiweb">
                            <div class="radio" > 
                                    <label>
                                        <input type="checkbox" name="sex" value="" />
                                        <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                                       
                                    </label>
                                </div>
                            </div> 
          </div>
  </div>
</template>
<script>
export default {
  name: 'Shopcar',
      data () {
    return {
      msg: 'moban',
      pronum:1,
    }
  },
  methods: {
      add() {
          this.pronum++
      },
      jian(){
          this.pronum--
      }
  },
  
}
</script>
<style  scoped>
@import "Shopcar.css";
</style>