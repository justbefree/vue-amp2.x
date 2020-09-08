<template>
  <div id="app" :style='{ minHeight: `${height}px`, width: `${width}px` }'>
    <div class="header">
      <div class="back-icon" title="go back" @click="back">
        <yn-iconfont name="iconback-black"></yn-iconfont>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped="scoped">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
  width: 100%;
}
.back-icon {
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
