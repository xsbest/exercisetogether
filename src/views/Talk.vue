<template>
  <div class="wrap">
    <div class="header">
      <h3>{{ userMsg.user_name }}</h3>
    </div>

    <div class="body">
      <div v-for="item in mineArr" :key="item.showMsg + Math.random()">
        <div v-if="item.type === 'mine'" class="mine">
          <div class="msgbox">
            <div class="content">{{ item.showMsg }}</div>
            <div class="triangle"></div>
          </div>
          <img :src="userMsg.chat_head" alt="" />
        </div>
        <div v-if="item.type === 'others'" class="others">
          <img :src="userMsg.chat_head" alt="" />
          <div class="msgbox">
            <div class="content">{{ item.showMsg }}</div>
            <div class="triangle"></div>
          </div>
        </div>
      </div>

      <!-- <div v-for="item in mineArr" :key="item.showMsg + Math.random()">
      
      </div> -->
    </div>

    <div class="input">
      <van-field
        class="input-field"
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        placeholder="请输入"
      />
      <van-button
        @click="send"
        class="btn"
        round
        block
        type="primary"
        native-type="submit"
      >
        发送
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params);
    this.userMsg = this.$route.params;
    this.initWebSocket();
  },
  data() {
    return {
      userMsg: {},
      message: "",
      showMsg: "",
      gotMsg: "",
      mineArr: [],
      othersArr: [],
      queryParams: {
        group_id: "1c4d54e5-9ff3-4229-aa4a-a6d2ad4cc850",
        user_id: "db074386-c942-11ec-b30e-5254009b4695",
        type: "single", //group 或者
        content: this.message,
        accepter_id: "4320494f-ca2c-11ec-b64e-5254009b4695",
      },
    };
  },
  methods: {
    send() {
      this.ws.send(
        JSON.stringify({ ...this.queryParams, content: this.message })
      );
      this.mineArr.push({ showMsg: this.message, type: "mine" });
      this.message = "";
    },
    initWebSocket() {
      let _this = this;
      //判断页面有没有存在websocket连接
      if (window.WebSocket) {
        // 192.168.0.115 是我本地IP地址 此处的 :8181 端口号 要与后端配置的一致
        let ws = new WebSocket(
          `ws://175.178.45.226:8080/group/websocket?user_id=db074386-c942-11ec-b30e-5254009b4695`
        );
        _this.ws = ws;
        ws.onopen = function () {
          console.log("服务器连接成功");
        };
        ws.onclose = function () {
          console.log("服务器连接关闭");
        };
        ws.onerror = function () {
          console.log("服务器连接出错");
        };
        ws.onmessage = function (e) {
          //接收服务器返回的数据
          _this.mineArr.push({
            showMsg: JSON.parse(e.data).content,
            type: "others",
          });
          let resData = JSON.parse(e.data);
          if (resData.funName == "userCount") {
            _this.count = resData.users;
            _this.list = resData.chat;
            console.log(resData.chat);
          } else {
            _this.list = [
              ..._this.list,
              { userId: resData.userId, content: resData.msg },
            ];
          }
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  background-color: rgb(252, 249, 249);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.body {
  flex: 1;
  padding: 20px;
  .mine {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    .msgbox {
      margin-right: 10px;
      .triangle {
        display: inline-block;
        position: absolute;
        top: 20px;
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent transparent rgb(147, 231, 136);
      }
      .content {
        box-sizing: border-box;
        display: inline-flex;
        justify-content: flex-end;
        padding: 20px;
        overflow: hidden;
        align-items: center;
        background-color: rgb(147, 231, 136);
        // width: 550px;
        min-height: 100px;
        border-radius: 20px;
      }
    }
    img {
      height: 100px;
      width: 100px;
      border-radius: 10px;
    }
    text-align: right;
  }
  .others {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    .msgbox {
      margin-left: 15px;
      position: relative;
      .triangle {
        display: inline-block;
        position: absolute;
        top: 20px;
        left: -20px;
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent rgb(147, 231, 136) transparent transparent;
      }
      .content {
        box-sizing: border-box;
        display: inline-flex;
        justify-content: flex-start;
        padding: 20px;
        overflow: hidden;
        align-items: center;
        background-color: rgb(147, 231, 136);
        // width: 550px;
        min-height: 100px;
        border-radius: 20px;
      }
    }
    img {
      height: 100px;
      width: 100px;
      border-radius: 10px;
    }
  }
}
.header {
  background-color: #fff;
  h3 {
    padding: 0;
    margin: 0;
    padding: 20px;
  }
  border-bottom: 1px solid #eee;
}

.input {
  margin-bottom: 100px;

  .input-field {
    height: 200px;
  }
}
.btn {
  height: 100px;
  border-radius: 10px;
}
</style>