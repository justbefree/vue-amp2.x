<template>
  <div class="examples-container">
    <yn-flex justifyContent="spaceAround">
      <yn-flex-item flex="2">
        <div class="code-container">
          <h3>覆盖物 - Marker</h3>
          <pre><code class="lang-markup">{{ markupcode }}</code></pre>
          <pre><code class="lang-js">{{ jscode }}</code></pre>
        </div>
      </yn-flex-item>
      <yn-flex-item flex="1">
        <div class="map-container">
          <VueAmap2x class="amap" :center="center" v-on:complete="handleMapLoaded" width="320px" height="568px" mapKey="ccd1e3a84dd69c646c53abd884db7141"></VueAmap2x>
        </div>
        <div style="text-align: center;margin: 5px 0;">
          <yn-button @click="addMarker">添加marker</yn-button>
          <yn-button @click="removeMarker">删除marker</yn-button>
        </div>
      </yn-flex-item>
    </yn-flex>
  </div>
</template>
<script type="text/javascript">
  import { jscode, markupcode } from "./code";
  import { prismjsMixins } from "../../mixins/prismjs";
  export default {
    name: "quickStart",
    mixins: [prismjsMixins],
    data() {
      return {
        center: [116.397428, 39.90923],
        jscode,
        markupcode,
        mapLoaded: false,
        map: null,
        markers: []
      };
    },
    methods: {
      handleMapLoaded({ map }) {
        this.map = map;
        this.mapLoaded = true;
      },
      addMarker() {
        if (!this.mapLoaded) {
          this.Toast("地图还在加载中...");
          return;
        }
        const marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [116.405467, 39.907761]
        });
        this.markers.push(marker);
        this.map.add(marker);
      },
      removeMarker() {
        this.markers.forEach(marker => {
          this.map.remove(marker);
        });
      }
    }
  }
</script>
<style type="text/css" scoped="scoped">
  .examples-container{
    position: absolute;
    top: 50%;
    width: 100%;
    height: 568px;
    margin-top: -284px;
  }
  .map-container{
    width: 320px;
    height: 568px;
    border: 2px solid #efefef;
    overflow: hidden;
    border-radius: 8px;
    margin:  0 auto;
  }
  .code-container {
    width: 94%;
    margin: 0 auto;
  }
</style>