/*
* @Author: Just be free
* @Date:   2020-09-08 16:28:24
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 16:30:13
* @E-mail: justbefree@126.com
*/
import Vue from "vue";
import Prism from "prismjs";
export const prismjsMixins = Vue.extend({
  mounted() {
    process.browser && document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
  }
});