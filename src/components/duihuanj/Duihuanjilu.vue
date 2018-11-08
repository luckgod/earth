<template>
  <div>
      <div class="warp">
          <ul class="woul">
              <li class="itmh">
                    <span  class="itmht">兑换时间：2018-09-20 16:12:30</span>
                    <span class="itmhz itimepro"  :class=" peo =='未提货'  ? 'yansea' : '' ">{{peo}}</span>
                </li>
              <li  class="woula">
                  <ul class="woulb">
                      <li class="woulimg"><img src="../../assets/logo.png" alt=""></li>
                      <li>
                          <ul>
                              <li class="wouldain">水天成2号店</li>
                              <li class="wouliname">赣南高级脐橙2个</li>
                              <li class="woulibianhao">订单编号：2873648972672</li>
                          </ul>
                      </li>
                      <li class="woulifen">2000积分</li>
                  </ul>
              </li>
          </ul>
      </div>
       <div class="warp">
          <ul class="woul">
              <li class="itmh">
                    <span  class="itmht">兑换时间：2018-09-20 16:12:30</span>
                    <span class="itmhz">已提货</span>
                </li>
              <li  class="woula">
                  <ul class="woulb">
                      <li class="woulimg"><img src="../../assets/logo.png" alt=""></li>
                      <li>
                          <ul>
                              <li class="wouldain">水天成2号店</li>
                              <li class="wouliname">赣南高级脐橙2个</li>
                              <li class="woulibianhao">订单编号：2873648972672</li>
                          </ul>
                      </li>
                      <li class="woulifen">2000积分</li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Duihuanjilu',
      data () {
    return {
      msg: 'moban',
      peo:'未提货',
    }
  }
  
}
</script>
<style  scoped>
@import "Duihuanjilu.css";
</style>