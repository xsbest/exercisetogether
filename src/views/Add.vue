<template>
  <div class="wrap">
    <van-form @submit="onSubmit" class="form">
      <van-field
        name="picker"
        v-model="sport"
        label="运动类型"
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
        <van-datetime-picker
          type="time"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
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
        <van-datetime-picker
          type="time"
          @confirm="onEndConfirm"
          @cancel="showEndPicker = false"
        />
      </van-popup>

      <van-field
        type="number"
        name="total_number"
        v-model="peopleNums"
        label="拼单人数"
        clear
        placeholder="请输入"
      />

      <van-field label="上传图片" name="file" style="height: 100px">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="btn"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import request from "@/http";

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
      columns: ["游泳", "跑步", "攀岩"],
      showPicker: false,
      showEndPicker: false,
      peopleNums: 0,
    };
  },
  methods: {
    onSubmit(values) {
      // console.log("submit", values);
      // var formdata = new FormData();
      // formdata.append("file", values.file[0].file, "项目.png");
      var formdata = new FormData();
      formdata.append("file", values.file[0].file, "项目.png");
      formdata.append("creater_id", "1");
      formdata.append("description", "描述");
      const options = {
        url: "/order/create_order",
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      request(options);
    },
    onConfirm(value) {
      this.startTime = value;
      this.showPicker = false;
    },
    onEndConfirm(value) {
      this.endTime = value;
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
