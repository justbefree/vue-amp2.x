<template>
  <div class="examples-container">
    <h1 class="map"><a target="_blank" href="https://www.npmjs.com/package/vue-amap2.x">vue-amap2.x<sup><img width="50" :src="npmLogo"></sup></a></h1>
    <div class="install">
      <pre><code class="lang-js">{{ jscode }}</code></pre>
    </div>
    <ul>
      <!-- <li @click="jump('demo')">demo</li> -->
      <li @click="jump('quickStart')">快速上手</li>
      <li @click="jump('plugins')">插件的使用 - 定位插件</li>
      <li @click="jump('marker')">覆盖物 - Marker</li>
      <li @click="jump('events')">地图的交互与事件</li>
      <li @click="jump('convert')">其它坐标转换高德坐标</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import { prismjsMixins } from "../../mixins/prismjs";
  import { jscode } from "./code";
  const npmLogo = require("../../assets/npm.svg");
  export default {
    name: "menus",
    mixins: [prismjsMixins],
    data() {
      return {
        npmLogo,
        jscode
      }
    },
    methods: {
      jump(name) {
        this.$router.push({ name });
      }
    }
  }
</script>
<style type="text/css" scoped="scoped">
  ul {
    z-index: 10;
    position: relative;
    width: 200px;
    margin: 0 auto;
    list-style: none;
  }
  ul li{ margin: 10px auto;cursor: pointer; }
  .install {
    width: 340px;
    margin: auto;
  }
  .map {
    width: 250px;
    height: 250px;
    line-height: 100px;
    text-align: center;
    border-radius: 50%;
    background-image: url('../../assets/map.png');
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: center center;
    margin: 0 auto;
  }
</style>