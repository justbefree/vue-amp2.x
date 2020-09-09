<template>
  <div class="examples-container">
    <yn-flex justifyContent="spaceAround">
      <yn-flex-item flex="2">
        <div class="code-container">
          <h3>其它坐标转换高德坐标</h3>
          <pre><code class="lang-markup">{{ markupcode }}</code></pre>
          <pre><code class="lang-js">{{ jscode }}</code></pre>
        </div>
      </yn-flex-item>
      <yn-flex-item flex="1">
        <div class="map-container">
          <VueAmap2x class="amap" :center="center" v-on:complete="handleMapLoaded" width="320px" height="568px" mapKey="ccd1e3a84dd69c646c53abd884db7141"></VueAmap2x>
        </div>
      </yn-flex-item>
    </yn-flex>
  </div>
</template>
<script type="text/javascript">
  import "../../css/map.css";
  import { jscode, markupcode } from "./code";
  import { prismjsMixins } from "../../mixins/prismjs";
  export default {
    name: "quickStart",
    mixins: [prismjsMixins],
    data() {
      return {
        center: [116.362365, 39.907561],
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
        const position = [116.368904, 39.913423];
        this.addMarker(position, "百度坐标");
        this.convert(position, "baidu");
      },
      addMarker(position, text) {
        const marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position
        });
        const oText = new window.AMap.Text({
          position: new window.AMap.LngLat(position[0], position[1]),
          text,
          offset: new window.AMap.Pixel(-25, -30)
        });
        this.map.add(marker);
        this.map.add(oText);
      },
      convert(position, mapType) {
        // mapType 可选值
        // gps: GPS 坐标; mapbar: 图吧坐标; baidu: 百度坐标
        window.AMap.convertFrom(position, mapType, (status, result) => {
          if (result.info === "ok") {
            this.addMarker([result.locations[0].lng, result.locations[0].lat], "高德坐标");
          }
        });
      }
    }
  }
</script>
