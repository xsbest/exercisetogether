<template>
  <div class="wrap">
    <div class="head">
      <img src="@/assets/test.jpg" alt="" />
      <div style="display:flex;flex-direction:column;align-items:flex-start;imargin-top:20px;">
        <span>{{userData.user_name}}</span>
        <span>地区：{{userData.city}}</span>
        <span>{{userData.self_description}}</span>
      </div>
    </div>
    <van-cell title="我收到的评价" is-link to="MarkDetail"/>
    <van-cell title="我的收藏" is-link />
    <van-cell title="我的爱好" is-link />
    <van-cell title="我的运动记录" is-link />
    <van-cell title="我的个人信息" is-link to="userInfo"/>
  </div>
</template>

<script>
import request from "@/http";

export default {
  data: function () {
    return {
      userData:{}
    };
  },
  created(){
    request.post('/user/get_user_info').then(res=>{
      this.userData = res.data.data
    })
  }
};
</script>

<style lang="less" scoped>
.wrap {
  overflow: hidden;
  // height: 100%;
  padding: 50px;
}
.head {
  display: flex;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
    border-radius: 100%;
  }
  span {
    font-size: 50px;
    font-weight: 600;
    margin-left: 100px;
  }
  span:nth-of-type(2){
    font-size: 25px;
    font-weight: normal;
    color: rgb(194, 191, 191);
    margin-top: 20px;
  }
  span:nth-of-type(3){
    font-size: 15px;
    font-weight: normal;
    color: rgb(15, 12, 12);

    margin-top: 15px;
  }
  
}
</style>