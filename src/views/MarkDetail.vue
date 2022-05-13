<template>
  <div class="order">
    <van-search
      v-model="searchKeyword"
      input-align="center"
      placeholder="请输入搜索关键词"
    />
        <div class="boxes">
          <div
          class="box"
            v-for="item in list"
            :key ="item.Evaluation.create_time"
          >
            <div class="intro">
                <div class="name">{{item.User.user_name}}评论：</div>
                <div class="time">{{new Date(item.Evaluation.create_time).toLocaleString()}}</div>
            </div>
            <div class="content">{{item.Evaluation.content}}</div>
               <van-rate color="#ffd21e" class="rate-btn" :value="item.Evaluation.star" />
          </div>
        </div>
  </div>
</template>
<script>
import request from "@/http";

export default {
  data() {
    return {
      searchKeyword: "",
      activeName: "",
      username: "",
      password: "",
      uploader: [{ url: "https://img01.yzcdn.cn/vant/leaf.jpg" }],
      sport: "",
      type: "",
      showPicker: false,
      score:"",
      list: [],
    };
  },
  mounted() {
    request.post("evaluate/get_evaluation_by_user_id", this.query).then((res) => {
      this.list = res.data.data;
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
  .box{
      padding: 20px;
      margin-bottom: 1px solid #ddd;
      display:flex;
      align-items: center;
      justify-content: spa;
    .intro{
        display: flex;
        flex-direction: column;
            text-align: left;

        .time{
            font-size: 12px;
            color:#ddd;
        }
        .name{
            width: 300px;
            font-size: 18px;
        }

}
.rate-btn{

.van-rate__icon{
    width: 60px!important;
}
    }
.content{
    font-size: 18px;
}
  }
  
</style>