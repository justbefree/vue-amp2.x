<template>
  <div class="examples-container" style="text-align: center;">
    <h1>vue-amap2.x</h1>
    <ul>
      <!-- <li @click="jump('demo')">demo</li> -->
      <li @click="jump('quickStart')">快速上手</li>
      <li @click="jump('plugins')">插件的使用</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "menus",
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