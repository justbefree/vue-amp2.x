<template>
  <div class="examples-container" style="text-align: center;">
    <h1><a target="_blank" href="https://www.npmjs.com/package/vue-amap2.x">vue-amap2.x<sup><img width="40" :src="npmLogo"></sup></a></h1>
    <ul>
      <!-- <li @click="jump('demo')">demo</li> -->
      <li @click="jump('quickStart')">快速上手</li>
      <li @click="jump('plugins')">插件的使用</li>
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
<style type="text/css">
  ul li{ margin: 10px auto;cursor: pointer; }
</style>