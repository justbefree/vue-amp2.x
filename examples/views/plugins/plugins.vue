<template>
  <div class="examples-container">
    <yn-flex justifyContent="spaceAround">
      <yn-flex-item flex="2">
        <div class="code-container">
          <h3>插件的使用 - 定位当前位置</h3>
          <pre><code class="lang-markup">{{ markupcode }}</code></pre>
          <pre><code class="lang-js">{{ jscode }}</code></pre>
          <p>查看「<a target="_blank" href="https://lbs.amap.com/api/jsapi-v2/guide/abc/plugins#plugins">插件列表</a>」</p>
        </div>
      </yn-flex-item>
      <yn-flex-item flex="1">
        <p style="text-align: center;color: red;">地图状态：{{mapStatus}}</p>
        <div class="map-container">
          <VueAmap2x class="amap" :plugins="plugins" v-on:pluginInstalled="handlePluginInstalled" width="320px" height="568px" mapKey="ccd1e3a84dd69c646c53abd884db7141"></VueAmap2x>
        </div>
      </yn-flex-item>
    </yn-flex>
  </div>
</template>
<script type="text/javascript">
  import { jscode, markupcode } from "./code";
  export default {
    name: "quickStart",
    data() {
      return {
        jscode,
        markupcode,
        plugins: ["AMap.Geolocation"],
        mapStatus: ""
      };
    },
    methods: {
      handlePluginInstalled({ AMap, map }) {
        this.mapStatus = "定位插件安装成功";
        const geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          // timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,     
          // 定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });
        this.mapStatus = "正在定位当前位置";
        this.Indicator.open();
        geolocation.getCurrentPosition((status, result) => {
          if (status === "complete") {
            const { position } = result;
            // 把地图中心点坐标重置到当前位置
            this.mapStatus = "位置更新成功";
            this.Indicator.close();
            map.setZoomAndCenter(18, position);
          } else {
            this.mapStatus = "定位失败";
            this.Indicator.close();
          }
        });
      }
    }
  }
</script>
<style type="text/css">
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