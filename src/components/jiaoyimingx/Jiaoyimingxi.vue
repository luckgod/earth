<template>
  <div>
      <div>
          <ul>
              <li class="item" >
                  <ul class="itema">
                      <li class="fll itemb">
                          <p class="iname " >租田套餐</p>
                          <span  class="itime ">2018-04-28 17:00:04</span>
                        </li>
                      <li  class="flr"><span class="itimepro">-2880积分</span></li>
                  </ul>
              </li>
              <li class="item" >
                  <ul class="itema">
                      <li class="fll itemb">
                          <p class="iname " >生鲜订单</p>
                          <span  class="itime ">2018-04-28 17:00:04</span>
                        </li>
                      <li  class="flr"><span class="itimepro" :class=" num > 0 ? 'yanse' : '' ">{{num}}积分</span></li>
                  </ul>
              </li>
              <li class="item" >
                  <ul class="itema">
                      <li class="fll itemb">
                          <p class="iname " >生鲜退款</p>
                          <span  class="itime ">2018-04-28 17:00:04</span>
                        </li>
                      <li  class="flr"><span class="itimepro">-50积分</span></li>
                  </ul>
              </li>
              <li class="item" >
                  <ul class="itema">
                      <li class="fll itemb">
                          <p class="iname " >农田订单</p>
                          <span  class="itime ">2018-04-28 17:00:04</span>
                        </li>
                      <li  class="flr"><span class="itimepro">-2880积分</span></li>
                  </ul>
              </li>
          </ul>
      </div>
      <div class="tip">
          <p class="quan">已显示全部</p>   
      </div>
  </div>
</template>
<script>
export default {
  name: 'Jiaoyimingxi',
      data () {
    return {
      msg: 'moban',
      num:50,
    }
  }
  
}
</script>
<style  scoped>
@import "Jiaoyimingxi.css";
</style>