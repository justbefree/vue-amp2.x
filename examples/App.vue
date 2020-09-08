<template>
  <div id="app" :style='{ minHeight: `${height}px`, width: `${width}px` }'>
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
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
