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
        name="startTime"
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
        name="endTime"
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
        type="digit"
        name="peopleNums"
        v-model="peopleNums"
        label="拼单人数"
        clear
        placeholder="请输入"
      />

      <van-field label="上传图片" name="uploader" style="height: 100px">
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
      console.log("submit", values);
      request.post("/order/create_order", {
        creater_id: "gag22",
        sport_type: "swim",
        description: "在福田区游泳馆",
        total_number: 10,
        order_location: "福田区",
        longitude: 1,
        latitude: 2,
        create_time: 1,
        end_time: 11,
      });
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
