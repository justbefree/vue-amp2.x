/*
* @Author: Just be free
* @Date:   2020-09-08 11:10:10
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 18:44:33
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
import events from "../views/events";
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
    },
    {
      path: "/events",
      name: "events",
      component: events
    }
  ]
});
export default router;