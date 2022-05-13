<template>
  <div class="wrap">
    <van-form class="form" @submit="onSubmit">
      <van-field
        class="input1"
        v-model="message"
        rows="2"
        autosize
        label="评价内容"
        type="textarea"
        maxlength="50"
        placeholder="请输入您的评价~"
        show-word-limit
      />
      <van-field class="rate" name="rate" label="评分">
        <template #input>
          <van-rate color="#ffd21e" class="rate-btn" v-model="score" />
        </template>
      </van-field>

      <van-button class="btn" round block type="warning" native-type="submit"
        >提交</van-button
      >
    </van-form>
  </div>
</template>

<script>
import request from "@/http";

export default {
  mounted(){
    this.params = this.$route.params.all
    console.log(this.params);
  },
  data() {
    return {
      message: "",
      score: "",
      params: {},
    };
  },
  methods: {
    onSubmit(value) {
      console.log(value);
      request
        .post("/evaluate/create_evaluation", {
          evaluator_id: this.params.user_id,
          content: this.message,
          star:value.rate,
          order_id:this.params.order_id
        })
        .then((res) => {
          this.list = res.data.data;
          this.$router.push("/home");
        });
    },
  },
};
</script>

<style lang="less">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
  .rate {
    border: 0;
    .van-rate__icon {
      font-size: 40px;
      width: 50px;
    }
    .van-field__control {
      border: 0;
      padding: 10px;
    }
  }
}
.wrap {
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
}
.input1 {
  height: 300px;
  display: flex;
  align-items: flex-start;
  font-size: 22px !important;
}
.van-field__control {
  border: 1px solid #eee;
  padding: 10px;
}
.btn {
  position: absolute;
  bottom: 200px;
  height: 60px;
  width: 500px;
}
</style>