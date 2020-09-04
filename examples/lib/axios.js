/*
* @Author: Just be free
* @Date:   2020-09-04 11:07:38
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-04 14:36:52
* @E-mail: justbefree@126.com
*/
import axios from "axios";

export const formData = () => {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  });
  return instance;
};

export const json = () => {
  const instance = axios.create({
    headers: { "Content-Type": "application/json;charset=utf-8" }
  });
  // 请求拦截器
  return instance;
};