<template>
  <div>
            <div class="box">
                <input type="text" name="search" placeholder="请输入关键字">
               
                <router-link  class="search" tag="div" to="/shangpinseach">搜索</router-link>
            </div>
    <div>
        <div class="two">

        
            <div  class="two_re">
                热门搜索
            </div>
            <div>
                <ul  class="two_oul">
                
                    <li class="two_oli"><span>生鲜</span></li>
                    <li class="two_oli"><span>水果 </span></li>
                </ul>
            </div>
             <div  class="two_re mar">
                历史搜索
            </div>
            <div>
                <ul  class="two_oul ">
                
                    <li class="two_oli"><span>生鲜</span></li>
                    <li class="two_oli"><span>水果</span></li>
                    <li class="two_oli"><span>海鲜</span></li>
                </ul>
            </div>
        </div>
    </div>
    
  </div>
</template>
<script>

export default {
   name: 'Shangpinsousu',
      data () {
    return {
      msg: 'moban'
    }
  }
  
}
</script>
<style  scoped>
@import "Shangpinsousu.css";
</style>