<template>
  <div class="examples-container">
    <yn-flex justifyContent="spaceAround">
      <yn-flex-item flex="2">
        <div class="code-container">
          <h3>地图的交互与事件</h3>
          <pre><code class="lang-markup">{{ markupcode }}</code></pre>
          <pre><code class="lang-js">{{ jscode }}</code></pre>
        </div>
      </yn-flex-item>
      <yn-flex-item flex="1">
        <div class="map-container">
          <VueAmap2x class="amap" :center="center" v-on:dragend="handleDragend" v-on:dragging="handleDragging" v-on:dragstart="handleDragStart" v-on:moveend="handleMoveEnd" v-on:mapmove="handleMapMove" v-on:movestart="handleMoveStart" v-on:zoomchange="handleZoomChange" v-on:zoomstart="handleZoomStart" v-on:zoomend="handleZoomEnd" v-on:complete="handleMapLoaded" width="320px" height="568px" mapKey="ccd1e3a84dd69c646c53abd884db7141"></VueAmap2x>
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
        center: [116.397428, 39.90923],
        jscode,
        markupcode
      };
    },
    methods: {
      handleMapLoaded() {
        this.Toast("map loaded");
      },
      handleZoomStart() {
        this.Toast("zoomstart");
      },
      handleZoomChange() {
        this.Toast("zoomchange");
      },
      handleZoomEnd() {
        this.Toast("zoomend");
      },
      handleMoveStart() {
        this.Toast("movestart");
      },
      handleMapMove() {
        this.Toast("mapmove");
      },
      handleMoveEnd() {
        this.Toast("moveend");
      },
      handleDragStart() {
        this.Toast("dragstart");
      },
      handleDragging() {
        this.Toast("dragging");
      },
      handleDragend() {
        this.Toast("dragend");
      }
    }
  }
</script>
