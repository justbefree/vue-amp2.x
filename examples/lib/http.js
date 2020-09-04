/*
* @Author: Just be free
* @Date:   2020-09-04 11:06:50
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-04 14:37:08
* @E-mail: justbefree@126.com
*/

import { formData, json } from "./axios";
const qs = require("qs");
/*
 more usage visit
 https://github.com/ljharb/qs
 可以参考https://segmentfault.com/q/1010000008698726/a-1020000008699952
 由于axios默认发送数据时是request payload，而并非我们常用的form data格式，所以发送之前需要使用qs模块对其进行处理
*/

const post = (url, params) => {
  return formData()
    .post(url, qs.stringify(params))
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      if (e && e.message === "路由跳转取消请求") {
        console.log(e);
      } else {
        console.log("错误", e);
      }
    });
};
const get = (url, params) => {
  return formData()
    .get(url + "?" + qs.stringify(params))
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      if (e && e.message === "路由跳转取消请求") {
        console.log(e);
      } else {
        console.log("错误", e);
      }
    });
};
const postJSON = (url, params) => {
  return json()
    .post(url, params)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      if (e && e.message === "路由跳转取消请求") {
        console.log(e);
      } else {
        console.log("错误", e);
      }
    });
};
export default {
  post,
  get,
  postJSON
};
