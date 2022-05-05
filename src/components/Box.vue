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
      <van-button round block type="info" native-type="submit" class="btn"
        >
        <van-icon name="edit" /> 修改
      </van-button>
      <van-button round block type="info" native-type="submit" class="btn"
        ><van-icon name="delete-o" /> 删除
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
    .btn{
      margin-top: 20px;
      // width: 0px;
      height: 50px;
}
 .btn:nth-of-type(1){
      background: rgb(54, 116, 233);
      border: 1px solid rgb(202, 201, 201);
    }
    .btn:nth-of-type(2){
      background: rgb(236, 79, 79);
      border: 1px solid rgb(202, 201, 201);
    }
  }
}
</style>