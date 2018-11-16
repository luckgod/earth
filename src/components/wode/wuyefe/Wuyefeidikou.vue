<template>
  <div>
      <div class="warp">
          <ul class="biao">
              <li class="itema" @click="juma">
                  <div class="itemb">
                      <span>小区房号</span>
                  </div>
                  <div class="itemc">
                       <span>凯瑞物业管理有限公司</span>
                       <span><i class="iconfont icon-right"></i></span> 
                  </div>
              </li>
              <li class="itema">
                  <div class="itemb">
                      <span>本年应缴物业费</span>
                  </div>
                  <div class="itemc">
                       <span>¥98.00</span>
                       <span></span> 
                  </div>
              </li>
              <li class="itema">
                  <div class="itemb">
                      <span>本年应缴物业费</span>
                  </div>
                  <div class="itemc">
                       <span>¥98.00</span>
                       <span></span> 
                  </div>
              </li>
              <li class="itema">
                  <div class="itemb">
                      <span>本年未缴物业费</span>
                  </div>
                  <div class="itemc">
                       <span>¥00.00</span>
                       <span></span> 
                  </div>
              </li>
              <li class="itema">
                  <div class="itemb">
                      <span>已使用积分抵扣</span>
                  </div>
                  <div class="itemc">
                       <span>¥00.00</span>
                       <span></span> 
                  </div>
              </li>
              <li class="itema">
                  <div class="itemb">
                      <span>缴纳/抵扣详情</span>
                  </div>
                  <div class="itemc">
                       <span>查看</span>
                       <span><i class="iconfont icon-right"></i></span> 
                  </div>
              </li>
              <li class="itema">
                  <div class="itemb">
                      <span>物业费缴纳说明</span>
                  </div>
                  <div class="itemc">
                       <span>查看</span>
                       <span><i class="iconfont icon-right"></i></span> 
                  </div>
              </li>
            
          </ul>
      </div>
    <router-link class="btn" to="Wuyejiaona" tag="div">
        <p >缴纳/抵扣物业费</p>
    </router-link> 
  </div>
</template>
<script>
export default {
  name: 'Wuyefeidikou',
      data () {
    return {
      msg: 'moban'
    }
  },
  methods:{
      juma(){
          this.$router.push({path:'/fanghaogenggai'})
      }
  }
  
}
</script>
<style  scoped>
@import "Wuyefeidikou.css";
</style>