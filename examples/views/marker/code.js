/*
* @Author: Just be free
* @Date:   2020-09-08 15:15:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 18:33:25
* @E-mail: justbefree@126.com
*/
export const jscode =
`// 参数说明
...
data() {
  return {
    center: [116.397428, 39.90923],
    mapLoaded: false,
    map: null,
    markers: []
  }
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