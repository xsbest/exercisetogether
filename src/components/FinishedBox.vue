<template>
  <div class="box">
    <div class="intro">
      <img class="image" :src="url" alt="" />
      <div class="time-title">
        <span class="name">{{ name }}</span>
        <span class="time">{{ time }}</span>
      </div>
    </div>
    <div class="btns">
      <van-button @click="mark" round block type="info" native-type="submit" class="btn1"
        ><van-icon name="more-o" /> 评价
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "time", "url"],
  data: function () {
    return {};
  },
  methods:{
    mark(){
      this.$router.push('/mark')
    }
  }
};
</script>

<style lang="less">
.box {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  .intro{
    display: flex;
    .time-title{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .name{
      font-size: 36px;
    }
    .time{
      font-size: 24px;
      color: #bbb;
    }
  }
  .image {
    width: 300px;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn1{
      margin-top: 20px;
      // width: 0px;
      height: 50px;
}
 .btn1{
      background: rgb(181, 182, 184);
      border: 1px solid rgb(202, 201, 201);
    }
 
  }
}
</style>