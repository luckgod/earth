<template>
  <div>
      <div class="warp">
           <ul class="biao">
              <li class="itema" >
                  <div class="itemb"  >
                      <span>{{msga}}</span>
                       <mt-popup
                        v-model="popupVisiblea"
                        position="bottom">
                       <mt-picker :slots="slotsa" @change="onValuesChangea" style='width:100vw;'></mt-picker>
                      </mt-popup>
                  </div>
                  <div class="itemc" @click.stop="popupVisiblea=!popupVisiblea">
                       <span></span>
                       <span><i class="iconfont icon-right ziti"></i></span> 
                  </div>
              </li>
                <li class="itema">
                  <div class="itemb">
                      <span>{{msg}}</span>
                  </div>
                  <div class="itemc">
                       <span class="zitia" @click="popupVisible=!popupVisible">点击可进行修改</span>
                       <mt-popup
                        v-model="popupVisible"
                        position="bottom">
                       <mt-picker :slots="slots" @change="onValuesChange" style='width:100vw;'></mt-picker>
                      </mt-popup>
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
import { DatetimePicker } from 'mint-ui';
import { Popup } from 'mint-ui';


export default {
  name: 'Fanghaogenggai',
      data () {
    return {
      msg: '1幢3单元102室',
      msga: '名义花园',
      popupVisible:false,
      popupVisiblea:false,
      slots: [
        {
          flex: 1,
          values: ['一幢', '二幢', '三幢', '四幢', '五幢', '六幢'],
          className: 'slot1',
          textAlign: 'center'
        },  {
          flex: 1,
          values: ['一单元', '二单元', '三单元', '四单元', '五单元', '六单元'],
          className: 'slot2',
          textAlign: 'center'
        } ,{
          flex: 1,
          values: ['101室', '102室', '103室', '104室', '105室', '106室'],
          className: 'slot3',
          textAlign: 'center'
        }

      ],  
      slotsa: [
        {
          flex: 1,
          values: ['名义花园', '宁一花园', '宁二花园', '宁四花园', '宁五花园', '宁六花园','宁五花园', '宁六花园'],
          className: 'slot1',
          textAlign: 'center'
        }, 

      ],
    }
  },
  methods: {
    onValuesChange(picker, values) {
        let a=picker.getValues().join(' ') 
        this.msg=a     
    },
    onValuesChangea(picker, values){
       let a=picker.getValues().join(' ') 
        this.msga=a  
    }
  },
  
}

</script>
<style  scoped>
@import "Fanghaogenggai.css";
</style>