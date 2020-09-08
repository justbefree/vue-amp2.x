/*
* @Author: Just be free
* @Date:   2020-09-08 11:10:10
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 17:58:02
* @E-mail: justbefree@126.com
*/
import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
import menu from "../views/menu";
import demo from "../views/demo";
import quickStart from "../views/quickstart";
import plugins from "../views/plugins";
import marker from "../views/marker";
const router = new Router({
  routes: [
    {
      path: "/",
      name: "menu",
      component: menu
    },
    {
      path: "/demo",
      name: "demo",
      component: demo
    },
    {
      path: "/quickstart",
      name: "quickStart",
      component: quickStart
    },
    {
      path: "/plugins",
      name: "plugins",
      component: plugins
    },
    {
      path: "/marker",
      name: "marker",
      component: marker
    }
  ]
});
export default router;