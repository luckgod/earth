<template>
  <div>
      <div class="warp">
           <ul class="biao">
              <li class="itema">
                  <div class="itemb">
                      <span>名义花园</span>
                  </div>
                  <div class="itemc">
                       <span></span>
                       <span><i class="iconfont icon-right ziti"></i></span> 
                  </div>
              </li>
                <li class="itema">
                  <div class="itemb">
                      <span>1幢3单元102室</span>
                  </div>
                  <div class="itemc">
                       <span class="zitia">点击可进行修改</span>
                       <span></span> 
                  </div>
              </li>
              <li class="itema"> <p class="zitib">提醒：绑定房号后，积分可以抵扣业务费哦～</p></li>
              
          </ul>
          
      </div>
      <div class="btn">
        <p >提交</p>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'Fanghaogenggai',
      data () {
    return {
      msg: 'moban'
    }
  }
  
}
</script>
<style  scoped>
@import "Fanghaogenggai.css";
</style>