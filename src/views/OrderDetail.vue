<template>
  <div class="wrap">
    <div class="image">
      <!-- <img :src="detail.url" alt=""> -->
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-683dfc7f64c6c5686f724c0ce2ca0173_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654269005&t=9172993410985f166e5635fa512bb48b"
        alt=""
      />
    </div>
    <div class="desc">
      <div class="descbox">
        <!-- <div>运动：{{detail.type}}</div>
        <div>区域：{{detail.area}}</div>
        <div>运动：{{detail.type}}</div>
        <div>区域：{{detail.area}}</div> -->
        <div class="title">
          <span>深圳文体中心游泳了喂~~~~~~~~~~</span>
          <span><van-icon size="20" name="user-o" />12人</span>
        </div>
        <div class="option">
          <span class="label">时间</span>
          <span>2022.05.01 14:00pm - 2022.05.01 16:00pm</span>
        </div>
        <div class="option">
          <span class="label">性别</span>
          <span>性别不限</span>
        </div>
        <div class="option">
          <span class="label">人数</span>
          <span>12人</span>
        </div>
        <div class="option">
          <span class="label">剩余</span>
          <span>6个名额</span>
        </div>
        <div class="option">
          <span class="label">地点</span>
          <span>深圳市南山区文体中心</span>
        </div>
        <van-button class="btn" type="warning">发起拼团</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.detail = this.$route.params;
    console.log(this.detail);
  },
  data() {
    return {
      detail: {},
    };
  },
};
</script>

<style lang="less" >
.wrap {
  display: flex;
  flex-direction: column;
  height: 100%;

  .image {
    padding: 20px;
    min-height: 500px;
    border-bottom: 1px solid #eee;
    img {
      width: 90vw;
    }
  }
  .desc {
    flex: 1;
    background: #f7f5f5;

    .descbox {
      padding: 20px;
      height: 650px;
      background-color: #fff;
      border-radius: 20px;
      margin: 20px;
      .title {
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
        span:nth-of-type(1) {
          font-size: 30px;
          font-weight: 700;
        }
        span:nth-of-type(2) {
          font-size: 20px;
          color: #ccc;
        }
      }
      .option {
        margin-bottom: 30px;
        text-align: left;
        font-size: 26px;
        .label {
          color: #ccc;
          margin-right: 50px;
        }
      }
      .btn{
          margin-top: 40px;
          width: 300px;
          height: 80px;
          border-radius: 10px;
      }
    }
  }
}
</style>