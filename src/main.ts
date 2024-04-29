import { createApp } from "vue";
import "amfe-flexible";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "./common/vantui";
import VueWechatTitle from 'vue-wechat-title'

createApp(App).use(store).use(router).use(Vant).use(VueWechatTitle).mount("#app");
