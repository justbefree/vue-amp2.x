/*
* @Author: Just be free
* @Date:   2020-08-07 11:26:09
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-04 14:35:51
* @E-mail: justbefree@126.com
*/
import { loadMap } from '../load';
export default {
  name: 'VueAmap2x',
  props: {
    width: String,
    height: String,
    mapKey: {
      type: String,
      require: true
    },
    center: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      zoom: null
    };
  },
  methods: {
    getCurrentZoom() {
      return this.zoom;
    },
    setZoom(zoom) {
      this.zoom = zoom;
    },
    notify(type, message) {
      this.$emit(type, message);
    },
    mapZoomStart(e, map) {
      this.notify(e.type, { map });
    },
    mapZoom(e, map) {
      this.notify(e.type, { map });
    },
    mapZoomEnd(e, map) {
      this.notify(e.type, { map, vueInstance: this });
    },
    mapMoveStart(e, map) {
      this.notify(e.type, { map });
    },
    mapMove(e, map) {
      this.notify(e.type, { map });
    },
    mapMoveEnd(e, map) {
      this.notify(e.type, { map, vueInstance: this });
    },
    mapDragStart(e, map) {
      this.notify(e.type, { map });
    },
    mapDragging(e, map) {
      this.notify(e.type, { map });
    },
    mapDragEnd(e, map) {
      this.notify(e.type, { map });
    },
    mapLoaded(e, map) {
      this.notify(e.type, { map, vueInstance: this });
    },
    load(options = {}) {
      loadMap(options).then((AMap) => {
        const { center } = this;
        const map = new AMap.Map('vue-amp2-container', {
          zoom: 13,
          zooms: [10, 19],
          center,
          touchZoomCenter: 1
        });
        this.zoom = map.getZoom();
        map.on("zoomstart", (e) => { this.mapZoomStart(e, map); });
        map.on("zoomchange", (e) => { this.mapZoom(e, map); });
        map.on("zoomend", (e) => { this.mapZoomEnd(e, map); });
        map.on("movestart", (e) => { this.mapMoveStart(e, map); });
        map.on("mapmove", (e) => { this.mapMove(e, map); });
        map.on("moveend", (e) => { this.mapMoveEnd(e, map); });
        map.on("dragstart", (e) => { this.mapDragStart(e, map); })
        map.on("dragging", (e) => { this.mapDragging(e, map); })
        map.on("dragend", (e) => { this.mapDragEnd(e, map); });
        map.on("complete", (e) => { this.mapLoaded(e, map); });
      }).catch((err) => {
        console.log('catch', err);
      });
    }
  },
  created() {
    const { mapKey } = this.$props;
    this.load({ key: mapKey });
  },
  render(h) {
    const defaultWidth = this.width || `${document.documentElement.clientWidth}px`;
    const defaultHeight = this.height || `${document.documentElement.clientHeight}px`;
    return h('div', { style: { width: defaultWidth, height: defaultHeight } }, [
      h('div', { attrs: { id: 'vue-amp2-container' }, style: { width: defaultWidth, height: defaultHeight } }, [])
    ]);
  },
};
