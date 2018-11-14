<template>
  <div>
    <div class="dangqianjinfen">
      <div class="dangqianjinfenl">
        <span class="dangqianjinfenls">688</span>
        <span class="dangqianjinfenla">当前积分</span>
      </div>
      
      <div class="dangqianjinfenr">
        <router-link class="dangqianjinfenrz" tag="span" to="/duihuanjilu">兑换记录</router-link> 
      </div>
    </div>
    <div>
      <div class="xiaoqut"> 
        <span class="xiaoqu">水天成小区</span>
      </div>
    </div>
    <div>
      <div class="duihua">
        <ul>
          <router-link tag="li" class="kau" :to="{path:'/jfenduihuan'}">
         
            <img  class="jiimg" src="../../../assets/logo.png" alt="">
            <p class="jiname">水果拼盘</p>
            <p class="jinaf">100积分</p>
          </router-link>
          <router-link tag="li" class="kau" :to="{path:'/jfenduihuan'}">
         
            <img  class="jiimg" src="../../../assets/logo.png" alt="">
            <p class="jiname">水果拼盘</p>
            <p class="jinaf">100积分</p>
          </router-link>
          <router-link tag="li" class="kau" :to="{path:'/jfenduihuan'}">
         
            <img  class="jiimg" src="../../../assets/logo.png" alt="">
            <p class="jiname">水果拼盘</p>
            <p class="jinaf">100积分</p>
          </router-link>
          <router-link tag="li" class="kau" :to="{path:'/jfenduihuan'}">
         
            <img  class="jiimg" src="../../../assets/logo.png" alt="">
            <p class="jiname">水果拼盘</p>
            <p class="jinaf">100积分</p>
          </router-link>
          <router-link tag="li" class="kau" :to="{path:'/jfenduihuan'}">
         
            <img  class="jiimg" src="../../../assets/logo.png" alt="">
            <p class="jiname">水果拼盘</p>
            <p class="jinaf">100积分</p>
          </router-link>
          <router-link tag="li" class="kau" :to="{path:'/fenlei'}">
         
            <img  class="jiimg" src="../../../assets/logo.png" alt="">
            <p class="jiname">水果拼盘</p>
            <p class="jinaf">100积分</p>
          </router-link>
                  
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Jifenshangcheng',
      data () {
    return {
      msg: 'moban'
    }
  }
  
}
</script>
<style  scoped>
@import "Jifenshangcheng.css";
</style>