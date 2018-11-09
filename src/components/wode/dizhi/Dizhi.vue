<template>
  <div>
      <div class="warp">
          <div>
            <ul class="lcard">
                <li class="itema"><span>小爸爸</span><span>18868802830</span></li>
                <li class="itemb"><span>浙江省 杭州市 滨江区 秋溢路288号</span></li>
                <li class="itemc">
                    <div class="dingwei">
                    <div class="radio" > 
                            <label>
                                <input type="radio" name="sex" value="" />
                                <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                            
                            </label>
                        </div>
                    </div> 
                    <span>默认地址</span>
                    <span>编辑</span>
                    <span>删除</span>
                </li>
            </ul>
        </div>
        <div>
            <ul class="lcard">
                <li class="itema"><span>老哈哈</span><span>18868802830</span></li>
                <li class="itemb"><span>浙江省 杭州市 西湖区 阿里巴巴园区</span></li>
                <li class="itemc">
                    <div class="dingwei">
                    <div class="radio" > 
                            <label>
                                <input type="radio" name="sex" value="" />
                                <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                            
                            </label>
                        </div>
                    </div> 
                    <span>默认地址</span>
                    <span>编辑</span>
                    <span>删除</span>
                </li>
            </ul>
        </div>
         <div class="btn" @click="juam">
                <p >新增收货地址</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Dizhi',
      data () {
    return {
      msg: 'moban'
    }
  },
  methods:{
      juam(){
           this.$router.push({path:'/Xinzhengshouhuodizhi'})
      }
  }
  
}
</script>
<style  scoped>
@import "Dizhi.css";
</style>