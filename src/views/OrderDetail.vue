<template>
  <div class="wrap">
    <div class="image">
      <!-- <img :src="detail.url" alt=""> -->
      <img
        :src="detail.pic_urls"
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
          <span>{{detail.description}}</span>
          <span><van-icon size="20" name="user-o" />{{detail.location}}</span>
        </div>
        <div class="option">
          <span class="label">时间</span>
          <span>{{new Date(detail.create_time).toLocaleString() +' - ' + new Date(detail.create_time).toLocaleString() }}</span>
        </div>
        <div class="option">
          <span class="label">性别</span>
          <span>性别不限</span>
        </div>
        <div class="option">
          <span class="label">人数</span>
          <span>{{detail.total_number}}人</span>
        </div>
        <div class="option">
          <span class="label">剩余</span>
          <span>{{detail.rest_number}}人</span>
        </div>
        <div class="option">
          <span class="label">地点</span>
          <span>{{detail.location}}</span>
        </div>
        <van-button class="btn" @click="handleClick" type="warning"
          >参加</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/http";
import { Toast } from "vant";

export default {
  mounted() {
    this.detail = this.$route.params;
    console.log(this.detail);
  },
  methods: {
    handleClick() {
      request
        .post("/order/grab_order", {
          order_id: this.detail.order_id,
        })
        .then(() => {
          Toast.success("拼团成功");
        });
    },
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
      .btn {
        margin-top: 40px;
        width: 300px;
        height: 80px;
        border-radius: 10px;
      }
    }
  }
}
</style>