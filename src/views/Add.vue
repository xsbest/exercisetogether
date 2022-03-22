<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        readonly
        clickable
        name="picker"
        :value="sport"
        label="选择运动"
        placeholder="点击选择运动"
        @click="showPicker = true"
      />

      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="time"
        label="时间选择"
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

      <van-field name="uploader" label="">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
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
    };
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

<style>
</style>