import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Cell, Icon, Notify, Popover, Rate, Search, Tabbar, TabbarItem } from "vant";
import { Tab, Tabs } from "vant";
import { Form, Field, Uploader, Picker, Popup,Button,DatetimePicker  } from "vant";
Vue.use(Form);
Vue.use(Field);
import "./reset.less";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Uploader);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Button);
Vue.use(DatetimePicker );
Vue.use(Search);
Vue.use(Notify);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(Popover);
Vue.use(Rate);





Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
