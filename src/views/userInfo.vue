<template>
  <div class="wrap">
    <div class="head">
      <img src="@/assets/test.jpg" alt="" />
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          imargin-top: 20px;
        "
      >
        <span>{{ userData.user_name }}</span>
        <span>地区：{{ userData.city }}</span>
        <span>{{ userData.self_description }}</span>
      </div>
    </div>
    <van-cell title="昵称：" :value="userData.user_name" />
    <van-cell title="地区：" to="userInfo" :value="userData.city" />
    <van-cell title="性别：" :value="userData.sex" />
    <van-cell title="年龄：" :value="userData.age" />
    <van-cell title="爱好：" :value="userData.hobby" />
  </div>
</template>

<script>
import request from "@/http";

export default {
  data: function () {
    return {
      userData: {},
    };
  },
  created() {
    request
      .post("/user/get_user_info", {
        user_id: "8d5c3779-c94c-11ec-a032-5254009b4695",
      })
      .then((res) => {
        this.userData = res.data.data;
      });
  },
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
  span:nth-of-type(2) {
    font-size: 25px;
    font-weight: normal;
    color: rgb(194, 191, 191);
    margin-top: 20px;
  }
  span:nth-of-type(3) {
    font-size: 25px;
    font-weight: normal;
    color: rgb(194, 191, 191);
    margin-top: 5px;
  }
}
</style>