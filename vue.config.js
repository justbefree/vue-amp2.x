/*
* @Author: Just be free
* @Date:   2020-09-04 11:11:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-04 14:26:15
* @E-mail: justbefree@126.com
*/
module.exports = {
  devServer: {
    proxy: {
      "/Hotel": {
        target: "https://testtripm.51ykb.com",
        changeOrigin: true
      }
    }
  },
  pages: {
    examples: {
      entry: "examples/main.js",
      template: "examples/example.html",
      filename: "example.html",
      title: "Vue AMap2.x"
    }
  }
}