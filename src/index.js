/*
* @Author: Just be free
* @Date:   2020-09-08 09:51:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 10:18:12
* @E-mail: justbefree@126.com
*/

import VueAmap2x from "./amap";
const version = process.env["VUE_APP_VERSION"];
const install = (Vue) => {
  if (install.installed) return;
  Vue.component(VueAmap2x.name, VueAmap2x);
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  install,
  version,
  VueAmap2x
};
export default {
  install,
  version,
  VueAmap2x
};