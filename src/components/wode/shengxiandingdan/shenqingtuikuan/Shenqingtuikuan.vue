<template>
  <div>
    <!-- <i class="iconfont icon-right"></i> -->
      <div>
                     <div class="daifukuan">
                  <div  class="daifukuan_h">
                      <ul>
                          <li class="daifukuan_tit">
                               <i class="iconfont icon-dianpu1"></i>
                                <span>河马生鲜专营店</span>
                               <i class="iconfont icon-right"></i>
                               
                          </li>
                          <li  class="daifukuan_im">
                              <ul>
                                  <li><img  class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                                  <li><img class="daifukuan_ima" src="../../../../assets/logo.png" alt=""></li>
                              </ul>
                          </li>
                          <li class="daifukuan_jieshuan"><span>共6件商品 邮费¥20 合计：<em>¥69.80</em></span></li>
                      </ul>
                  </div>
                 
              </div>

                </div>
                <div class="warp">
                    <div class="warpa">
                        <label for="jine">退款金额：</label>
                       
                        <input type="text" id="jine" placeholder="¥69.90">
                        
                    </div>
                    <div class="warpb">
                        <label for="yuanyin">退款原因：</label>
                        <input type="text" id="yuanyin " placeholder="选填">
                    </div>
                </div>
                 <div class="btn" >
                        <p >提交</p>
                </div>
  </div>
</template>
<script>
export default {
  name: 'Shenqingtuikuan',
      data () {
    return {
      msg: 'moban'
    }
  }
  
}
</script>
<style  scoped>
@import "Shenqingtuikuan.css";
</style>