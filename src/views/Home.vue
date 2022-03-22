<template>
  <div class="home">
    <van-tabs v-model="activeName">
      <van-tab title="关注" name="attention">
        <div class="row">
          <div class="column_one column">
            <div
              class="box"
              v-for="i in imgs"
              :key="i.id"
              @click="handleClickBox(i)"
            >
              <img :src="i.url" />
              <div>项目：{{ i.type }} 区域：{{ i.area }}</div>
            </div>
          </div>
          <div class="column_two column">
            <div class="box" v-for="i in imgs" :key="i.id">
              <img :src="i.url" />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="发现" name="observe">发现</van-tab>
    </van-tabs>
  </div>
</template>s

<script>
// @ is an alias to /src

export default {
  data: function () {
    return {
      a: 1,
      active: "home",
      activeName: "attention",
      imgs: [
        {
          url: "https://fc1tn.baidu.com/it/u=1854775792,344415369&fm=202&src=758&fc=tdmatt&mola=new&crop=v1",
          type: "swimming",
          area: "深圳",
          id: Math.random(),
        },
        {
          url: "https://fc1tn.baidu.com/it/u=1854775792,344415369&fm=202&src=758&fc=tdmatt&mola=new&crop=v1",
          type: "swimming",
          area: "深圳",
          id: Math.random(),
        },
      ],
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
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .column {
    display: flex;
    flex-direction: column;
    .box {
      border: 1px solid #ccc;
      padding: 50px;
      img {
        width: 30vw;
      }
    }
  }
  .column_one {
    .box {
      transform: translateX(1px);
    }
    // margin-right: 80px;
  }
}
</style> 
