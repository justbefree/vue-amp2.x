/*
* @Author: Just be free
* @Date:   2020-09-08 15:15:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 15:38:51
* @E-mail: justbefree@126.com
*/
export const jscode =
`// 参数说明
...
data() {
  return {
    plugins: ["AMap.Geolocation"]
  }
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
...
`;
export const markupcode =
`<VueAmap2x
  width="320px"
  height="568px"
  plugins="plugins"
  v-on:pluginInstalled="handlePluginInstalled"
  mapKey="your key">
</VueAmap2x>
`;