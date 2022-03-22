<template>
  <div class="navbar">
    <van-tabbar @change="onChange" v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="chat" icon="chat-o">聊天</van-tabbar-item>
      <van-tabbar-item name="add" icon="add-o">发起拼单</van-tabbar-item>
      <van-tabbar-item name="order" icon="description">订单</van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'NavBar',
  data: function () {
    return {
      active: 'home',
    };
  },
  methods:{
    onChange(key){
      console.log(key);
      this.$router.push(key)
    }
  }
}
</script>
<style scoped>
  .home img{
    width: 40px;
  }
</style>
