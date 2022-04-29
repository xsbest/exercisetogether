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
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        password:'',
        username:''
    };
  },
  methods: {
    onSubmit(value) {
      if(value.password && value.username){
          this.$router.push('/home')
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
  height: 60px;
}
</style>