<template>
  <div>
    <div class="dingwei">
     <div class="serash">
       <input type="text" placeholder="输入商品名称">
     </div>
     </div>
     <div class="liebiao">
       <ul>
         <li v-for="(list,index) in navLists" class="nav" :class="{ red:changeRed == index}" @click.stop="reds(index)" :key='index'>{{list.text}}</li>
         
       </ul>
     </div>
     <div class="shju">
       <div class="shjutu">
         <img src="../../../assets/logo.png">
       </div>
      <div class="slide-box">
           <div v-for="(list,index) in navListsa" class="slide-item" :class="{ red:changeReda == index}" @click.stop="redsa(index)" :key='index'>{{list.text}}</div>
       
    </div>
     <div>
        <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="proa">
        <ul class="proaoul">
            <!-- style="border:1px solid black" -->
            <li class="proaoula"><img src="../../../assets/logo.png" alt="" class="proaomg"></li>
            <li class="proaoulb">
                <ul>
                    <li class="proatit"><span >赣南高级脐橙2个</span></li>
                    <li class="proayishou"><span >商品简介-----</span></li>
                    <li class="proaqian"><span >¥8.80/份</span><i class="iconfont icon-gouwuche ziti"></i></li>
                </ul>
            </li>
        </ul>
    </div>
  </div>
  </div>
   </div>
</template>
<script>
export default {
  name: 'Fenlei',
      data () {
    return {
      msg: 'Fenlei',
        navLists:[
                    {
                        "text":"新鲜蔬菜"                     
                    },
                    {
                        "text":"安心水果"                     
                    },
                    {
                        "text":"海鲜水产"                        
                    },
                    {
                        "text":"豆制品"                     
                    },
                     {
                        "text":"肉禽蛋"                     
                    },
                     {
                        "text":"时令新品"                     
                    },
                     {
                        "text":"营养早餐"                     
                    },
                     {
                        "text":"冰淇淋"                     
                    },
                    {
                        "text":"酒水饮料"                     
                    },
                    {
                        "text":"米面粮油"                     
                    },
                ],
                changeRed:0,
                navListsa:[
                    {
                        "text":"特价"                     
                    },
                    {
                        "text":"根茎类"                     
                    },
                    {
                        "text":"叶菜类"                        
                    },
                    {
                        "text":"葱蒜类"                     
                    },
                     {
                        "text":"茄果类"                     
                    },
                     {
                        "text":"根茎类"                     
                    },
                     {
                        "text":"叶菜类"                     
                    },
                     {
                        "text":"葱蒜类"                     
                    },
                    {
                        "text":"茄果类"                     
                    },
                    {
                        "text":"葱蒜类"                     
                    },
                ],
                changeReda:0,
            
    }
  },
  methods:{
      chaundi(e){
          console.log(e.target)
      },
      reds:function(index){
                    this.changeRed = index;
        },
         redsa:function(index){
                    this.changeReda = index;
        }


  }
  
}
</script>
<style  scoped>
@import "Fenlei.css";
</style>