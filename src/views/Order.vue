<template>
  <div class="about">
    <h1>Order</h1>
  </div>
</template>
<script>
import request from "@/http";
export default {
  data() {
    return {
      username: "",
      password: "",
      uploader: [{ url: "https://img01.yzcdn.cn/vant/leaf.jpg" }],
      sport: "",
      type: "",
      columns: ["游泳", "跑步", "攀岩"],
      showPicker: false,
      query: {
        page_size: 10,
        page_no: 2,
      },
    };
  },
  mounted() {
    request.post("order/list_orders",this.query);
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
