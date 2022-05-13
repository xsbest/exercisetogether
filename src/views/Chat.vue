<template>
  <div class="wrap">
    <div class="header">
      <h3>联系人</h3>
    </div>
    <div class="body">
      <div class="box" @click="handleClick(item)" v-for="item in list" :key="item.user_id">
        <img :src="item.chat_head" alt="" />
        <span>{{item.user_name}}</span>
      </div>
      <div class="box" @click="handleClick(item)" v-for="item in groupList" :key="item.group_id">
        <img :src="item.chat_head" alt="" />
        <span>{{item.group_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/http";

export default {
  data: function () {
    return {
      list: [],
      groupList:[]
    };
  },
  methods:{
    handleClick(item){
        this.$router.push({ name: "Talk", params: item});
    }
  },
  created() {
    request.post("/friend/list_friends", {
      user_id: "db074386-c942-11ec-b30e-5254009b4695",
    }).then(res=>{
      this.list = res.data.data
    })
      request.post("/group/get_groups_by_user_id", {
      user_id: "db074386-c942-11ec-b30e-5254009b4695",
    }).then(res=>{
      this.groupList = res.data.data
    })
  },
};
</script>

<style lang="less" scoped>
.wrap {
}
.header {
  h3 {
    padding: 0;
    margin: 0;
    padding: 20px;
  }
  border-bottom: 1px solid #eee;
}
.body {
  padding: 50px;
}

.box {
  border-bottom: 1px solid #eee;
  padding: 20px;
  display: flex;
  img {
    width: 120px;
    height: 120px;
    border-radius: 20px;
    border: 1px solid #eee;
    padding: 6px;
  }
  span {
    margin-left: 20px;
    font-size: 12px;
  }
}

.box:first-of-type {
  padding-top: 0;
}
</style>

