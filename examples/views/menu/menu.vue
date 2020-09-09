<template>
  <div class="examples-container" style="text-align: center;">
    <h1><a target="_blank" href="https://www.npmjs.com/package/vue-amap2.x">vue-amap2.x<sup><img width="40" :src="npmLogo"></sup></a></h1>
    <div class="map"></div>
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
  const npmLogo = require("../../assets/npm.svg");
  export default {
    name: "menus",
    data() {
      return {
        npmLogo
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
  }
  ul li{ margin: 10px auto;cursor: pointer; }
  .map {
    z-index: 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: url('../../assets/map.png');
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: center center;
    position: fixed;
    left: 20%;
  }
</style>