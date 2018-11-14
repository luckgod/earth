<template>
  <div>
    <div class="one_se"> 
        <div class="one_sele">
            <span>给我们打个分吧！</span>
        </div>
        <div  class="one_seri">
            
        <div id="app" class="row">
            <div class="form-group clearfix">
               
                <div class="col-md-8">
                    <div class="gradebox">
                        <img v-for="(star,index) in stars" v-bind:src="star.src" v-on:click="rating(index)" alt="星星图片" :key='index' />
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    </div>
     <div class="twose">
            <textarea name="" id="" cols="30" rows="10" placeholder="分享你的购买心得">

            </textarea>
    </div>
    <div class="twose">
        <div class="twose_a">
            <i class="iconfont icon-plus"></i>
        </div>
        <span  class="twose_b">注：最多只能上传5张图片哦～</span>
    </div>
    <div class="three_se">
        <div  class="three_sea">
              <div class="dingwei">
                    <div class="radio" > 
                            <label>
                                <input type="checkbox" name="sex" value="" />
                                <div class="option"></div><!--该div盛放的是优化后的按钮图片-->
                            
                            </label>
              </div>
                        </div>
        </div>
        <div  class="three_seb">
            <span>匿名</span>
        </div>
        <div  class="three_sec">
            <span>提交评价</span>
        </div>
    </div>
  </div>
</template>
<script>
import bo from "../../../../../assets/bolunan.png"
import boa from "../../../../../assets/boluu.png"
var starOffImg = bo;
var starOnImg = boa;


export default {
  name: 'Pingjia',
      data () {
    return {
      msg: 'moban',
      stars: [{
                            src: starOffImg,
                            active: true
                        }, {
                            src: starOffImg,
                            active: true
                        }, {
                            src: starOffImg,
                            active: true
                        },
                        {
                            src: starOffImg,
                            active: true
                        }, {
                            src: starOffImg,
                            active: true
                        }
                    ],
                    starNum: 0,
              
    
  }
},
        methods: {
                    //评分
                    rating: function(index) {
                        var total = this.stars.length; //星星总数
                        var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量

                        //进入if说明页面为初始状态
                        if(this.starNum == 0) {
                            this.starNum = idx;
                            for(var i = 0; i < idx; i++) {
                                this.stars[i].src = starOnImg;
                                this.stars[i].active = true;
                            }
                        } else {
                            //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                            if(idx == this.starNum) {
                                for(var i = index; i < total; i++) {
                                    this.stars[i].src = starOffImg;
                                    this.stars[i].active = false;
                                }
                            }
                            //如果小于当前最高星级，则直接保留当前星级
                            if(idx < this.starNum) {
                                for(var i = idx; i < this.starNum; i++) {
                                    this.stars[i].src = starOffImg;
                                    this.stars[i].active = false;
                                }
                            }
                            //如果大于当前星级，则直接选到该星级
                            if(idx > this.starNum) {
                                for(var i = 0; i < idx; i++) {
                                    this.stars[i].src = starOnImg;
                                    this.stars[i].active = true;
                                }
                            }

                            var count = 0; //计数器-统计当前有几颗星
                            for(var i = 0; i < total; i++) {
                                if(this.stars[i].active) {
                                    count++;
                                }
                            }
                            this.starNum = count;
                        }
                    },
                }
}
</script>
<style  scoped>
@import "Pingjia.css";
</style>