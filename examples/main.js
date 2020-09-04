/*
* @Author: Just be free
* @Date:   2020-09-04 14:26:33
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-04 14:29:15
* @E-mail: justbefree@126.com
*/
import Vue from 'vue';
import App from './App.vue';
import VueAmap2x from '../src/amap';
import YnComponents from "yn-components";

Vue.config.productionTip = false;
// Vue.use(VueAmap2x);
Vue.component(VueAmap2x.name, VueAmap2x);
Vue.use(YnComponents);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
