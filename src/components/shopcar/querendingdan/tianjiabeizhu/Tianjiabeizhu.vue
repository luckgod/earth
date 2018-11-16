<template>
  <div>
      <div class="warp">
          <textarea class="kuadu" placeholder="请输入备注信息">

        </textarea>
      </div>
      
  </div>
</template>
<script>
export default {
  name: 'Tianjiabeizhun',
      data () {
    return {
      msg: 'moban'
    }
  }
  
}
</script>
<style  scoped>
.warp{
  width: 89vw;
  margin: 0.4rem auto;
}

.kuadu{
    width: 89vw;
    height: 3.22rem;
    text-indent: 0.6rem;
    font-size:0.32rem;
    line-height: 0.4rem;
    border-radius:0.1rem; 
    letter-spacing: 0.01rem;
}
.kuadu::placeholder{
    color: #cccccc;
}
</style>