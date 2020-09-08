/*
* @Author: Just be free
* @Date:   2020-09-04 11:11:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 09:54:21
* @E-mail: justbefree@126.com
*/
process.env.VUE_APP_VERSION = require('./package.json').version;
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