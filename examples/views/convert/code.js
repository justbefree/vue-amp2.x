/*
* @Author: Just be free
* @Date:   2020-09-08 15:15:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-09 14:26:31
* @E-mail: justbefree@126.com
*/
export const jscode =
`// 参数说明
...
data() {
  return {
    center: [116.362365, 39.907561],
    mapLoaded: false,
    map: null,
    markers: []
  }
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
...
`;
export const markupcode =
`<VueAmap2x
  width="320px"
  height="568px"
  :center="center"
  v-on:complete="handleMapLoaded"
  mapKey="your key">
</VueAmap2x>
`;