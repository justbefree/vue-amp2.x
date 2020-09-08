/*
* @Author: Just be free
* @Date:   2020-09-08 15:15:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-08 19:00:03
* @E-mail: justbefree@126.com
*/
export const jscode =
`// 参数说明
...
data() {
  return {
    center: [116.397428, 39.90923]
  }
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
...
`;
export const markupcode =
`<VueAmap2x
  width="320px"
  height="568px"
  :center="center"
  v-on:dragend="handleDragend"
  v-on:dragging="handleDragging"
  v-on:dragstart="handleDragStart"
  v-on:moveend="handleMoveEnd"
  v-on:mapmove="handleMapMove"
  v-on:movestart="handleMoveStart"
  v-on:zoomchange="handleZoomChange"
  v-on:zoomstart="handleZoomStart"
  v-on:zoomend="handleZoomEnd"
  v-on:complete="handleMapLoaded"
  mapKey="your key">
</VueAmap2x>
`;