<template>
  <div class="home">
    <van-tabs v-model="activeName">
      <van-tab title="关注" name="attention">
        <div class="row">
          <div
            class="box"
            v-for="i in orderData"
            :key="i.order_id"
            @click="handleClickBox(i)"
          >
            <img :src="i.pic_urls" />
            <div>{{ i.sport_type }}</div>
            <div>{{ i.location }}</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="发现" name="observe">发现</van-tab>
    </van-tabs>
  </div>
</template>s

<script>
// @ is an alias to /src
import request from "@/http";

export default {
  mounted() {
    request.post("order/list_orders", this.query).then((res) => {
      this.orderData = res.data.data.Value;
    });
  },
  data: function () {
    return {
      orderData: [],
      a: 1,
      active: "home",
      activeName: "attention",
      query: {
        page_size: 1000,
        page_no: 1,
      },
    };
  },
  methods: {
    handleClickBox(i) {
      this.$router.push({ name: "OrderDetail", params: i });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  overflow: hidden;
}
.row {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  .box {
    margin: 0;
    margin-top: -1px;
    width: 350px;
    margin-right: -1px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding: 50px;
    img {
      width: 30vw;
    }
  }
}
</style> 
