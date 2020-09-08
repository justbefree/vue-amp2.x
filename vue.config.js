/*
* @Author: Just be free
* @Date:   2020-09-04 11:11:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 16:19:21
* @E-mail: justbefree@126.com
*/
process.env.VUE_APP_VERSION = require('./package.json').version;
const publicPath = process.env.NODE_ENV === 'production' ? "/vue-amp2.x/" : "/";
module.exports = {
  publicPath,
  outputDir: "docs",
  css: {
    extract: false
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    devtool: "source-map"
  },
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
      filename: "index.html",
      title: "Vue AMap2.x"
    }
  }
}