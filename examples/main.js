/*
* @Author: Just be free
* @Date:   2020-09-04 14:26:33
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 14:23:09
* @E-mail: justbefree@126.com
*/
import Vue from "vue";
import App from "./App.vue";
import VueAmap2x from "../src";
import YnComponents from "yn-components";
import Prism from "prismjs";
Prism.highlightAll();
import router from "./routes";

Vue.config.productionTip = false;
Vue.use(VueAmap2x);
Vue.use(YnComponents);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
