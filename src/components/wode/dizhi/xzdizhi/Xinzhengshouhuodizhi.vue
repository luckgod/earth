<template>
  <div>
      <div class="warp">
            <div class="biaodan">
                <ul>
                    <li class="item teshu">
                        <label for="a">收货人 </label>
                        <input type="text" placeholder="须与身份证一致" id="a">
                    </li>
                      <li class="item">
                        <label for="a">手机号码</label>
                        <input type="text" placeholder="请填写收件人手机号" id="a">
                    </li>
                      <li class="item">
                        <label for="a">所在地区</label>
                        <input type="text" placeholder="省市区" id="a">
                    </li>
                      <li class="item">
                        <label for="a">选择小区</label>
                        <input type="text" placeholder="该地区暂无小区" id="a">
                    </li>
                      <li class="item">
                        <label for="a">详细地址</label>
                        <input type="text" placeholder="请输入详细地址" id="a">
                    </li>
                      <li class="itema">
                          <span>设为默认地址</span>
                          <div class="dingwei">
                         <input class="switch switch-anim" type="checkbox" checked>
                          </div>
                      </li>
                </ul>
            </div> 
             <div class="btn">
                <p >保存</p>
              </div> 
      </div>
  </div>
</template>
<script>
export default {
  name: 'Xinzhengshouhuodizhi',
      data () {
    return {
        msg: true,
        phone:'',
        diqu:'',
        xiaoqu:'',
        xidizhi:'',
        username:'',
    }
  }
  
}
</script>
<style  scoped>
@import "Xinzhengshouhuodizhi.css";
</style>