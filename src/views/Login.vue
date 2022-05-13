<template>
  <div class="wrap">
    <van-form class="form" @submit="onSubmit">
      <van-field
        class="input"
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        class="input"
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button class="btn" round block type="info" native-type="submit"
          >登录</van-button
        >
        <van-button
          class="btn"
          round
          block
          type="info"
          @click="onSubmit({ username, password }, 'r')"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import request from "@/http";
import { Toast } from "vant";
export default {
  data() {
    return {
      password: "",
      username: "",
    };
  },
  methods: {
    onSubmit(value, type) {
      if (value.password && value.username) {
        if (type === "r") {
          request
            .post("/register", {
              phone: value.username,
              password: value.password,
            })
            .then(() => {
              Toast.success("注册成功,请登录");
            });
          return;
        } else {
          request
            .post("/login", {
              phone: value.username,
              password: value.password,
            })
            .then((res) => {
              if (res.data.ret_code == 10013) {
                return Toast.fail("登录失败，请先注册");
              }
              localStorage.setItem("token", res.data.data);
              Toast.success("登录成功");
              this.$router.push("/home");
            });
        }
      }
    },
  },
};
</script>

<style>
.form {
  width: 100%;
}
.wrap {
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.input {
  height: 120px;
  font-size: 22px !important;
}
.btn {
  margin-top: 20px;
  height: 60px;
}
</style>