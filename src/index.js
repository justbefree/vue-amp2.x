/*
* @Author: Just be free
* @Date:   2020-09-08 09:51:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 09:57:02
* @E-mail: justbefree@126.com
*/

import VueAMap2x from "./amap";
const version = process.env["VUE_APP_VERSION"];
const install = (Vue) => {
  if (install.installed) return;
  Vue.component(VueAMap2x.name, VueAMap2x);
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  install,
  version,
  VueAMap2x
};
export default {
  install,
  version,
  VueAMap2x
};