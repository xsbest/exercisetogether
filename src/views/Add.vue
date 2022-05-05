<template>
  <div class="wrap">
    <van-form @submit="onSubmit" class="form">
      <van-field
        name="sport"
        v-model="sport"
        label="运动类型"
          maxlength="5"
        clear
        placeholder="请输入"
      />

      <van-field
        readonly
        clickable
        name="create_time"
        :value="startTime"
        label="开始时间"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker :minDate="new Date()" type="datetime"
        @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>

      <van-field
        readonly
        clickable
        name="end_time"
        :value="endTime"
        label="结束时间"
        placeholder="点击选择时间"
        @click="showEndPicker = true"
      />
      <van-popup v-model="showEndPicker" position="bottom">
        <van-datetime-picker :minDate="new Date()" type="datetime"
        @confirm="onEndConfirm" @cancel="showEndPicker = false" />
      </van-popup>

      <van-field
        type="number"
        name="total_number"
        v-model="peopleNums"
        label="拼单人数"
        maxlength="2"
        clear
        placeholder="请输入"
      />

      <van-field label="上传图片" name="file" style="height: 100px">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button
          :loading="loading"
          loading-text="提交中"
          round
          block
          type="info"
          native-type="submit"
          class="btn"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import request from "@/http";
import { Notify } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      uploader: [],
      sport: "",
      startTime: "",
      endTime: "",
      type: "",
      showPicker: false,
      showEndPicker: false,
      peopleNums: "",
      loading: false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      if (
        !values.sport ||
        !values.total_number ||
        !values.create_time ||
        !values.end_time ||
        !values.file
      ) {
        return Notify({ type: "warning", message: "请填完拼单内容" });
      }
      var formdata = new FormData();
      formdata.append("file", values.file[0].file, "项目.png");
      formdata.append("creater_id", "1");
      formdata.append("description", "描述");
      formdata.append("sport_type", values.sport);
      formdata.append("total_number", values.total_number);
      formdata.append("create_time", new Date(values.create_time).valueOf());
      formdata.append("end_time", new Date(values.end_time).valueOf());
      formdata.append("longitude", 1);
      formdata.append("latitude", 2);
      formdata.append("order_location", 3);
      const options = {
        url: "/order/create_order",
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      this.loading = true;
      request(options)
        .then(() => {
          this.loading = false;
          Notify({ type: "success", message: "提交成功" });
          this.$router.push("/order");
        })
        .catch(() => {
          Notify({ background: "#eee", type: "danger", message: "服务器异常" });
        });
    },
    onConfirm(value) {
      this.startTime = new Date(value).toLocaleString();
      this.showPicker = false;
    },
    onEndConfirm(value) {
      this.endTime = new Date(value).toLocaleString();
      this.showEndPicker = false;
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  position: relative;
  height: 100%;
  background-color: rgb(185, 233, 230);
  overflow: hidden;
}
.form {
  padding: 20px;
  margin-top: 300px;
}
.btn {
  height: 85px;
  margin-top: 150px;
}
</style>
