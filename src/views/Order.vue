<template>
  <div class="order">
    <van-search
      v-model="searchKeyword"
      input-align="center"
      placeholder="请输入搜索关键词"
    />
    <!-- tabs-area -->
    <!-- LockTime: ""
        ReviewId: ""
        create_time: 0
        creater_id: "2"
        description: "a"
        end_time: 0
        is_review: 0
        latitude: 0
        location: ""
        longitude: 0
        order_id: "e063fbf5-c887-11ec-a83d-5254009b4695"
        pic_urls: "https://sport-1305086242.cos.ap-guangzhou.myqcloud.com/2022-04-30/项目.png"
        rest_number: 0
        sport_type: ""
        total_number: 0 -->
    <van-tabs v-model="activeName">
      <van-tab title="进行中" name="attention">
        <div class="boxes">
          <Box
            v-for="item in orderData"
            :key = "item.creater_id"
            :name="item.sport_type"
            :time="new Date(item.create_time).toLocaleString()"
            :url="item.pic_urls"
          ></Box>
        </div>
      </van-tab>
      <van-tab title="已完成" name="observe">
        <div class="boxes">
          <FinishedBox
            v-for="item in orderData"
            :key = "item.creater_id"
            :name="item.sport_type"
            :time="new Date(item.create_time).toLocaleString()"
            :url="item.pic_urls"
            :id="item.order_id"
          ></FinishedBox>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import request from "@/http";
import Box from "@/components/Box.vue";
import FinishedBox from "@/components/FinishedBox.vue";

export default {
  components: { Box,FinishedBox },
  data() {
    return {
      searchKeyword: "",
      activeName: "",
      username: "",
      password: "",
      uploader: [{ url: "https://img01.yzcdn.cn/vant/leaf.jpg" }],
      sport: "",
      type: "",
      columns: ["游泳", "跑步", "攀岩"],
      showPicker: false,
      query: {
        page_size: 1000,
        page_no: 1,
      },
      orderData: [],
    };
  },
  mounted() {
    request.post("order/list_orders", this.query).then((res) => {
      this.orderData = res.data.data.Value;
    });
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
</script>
<style lang="less" scoped>
  .boxes{
    padding: 20px;
  }
</style>