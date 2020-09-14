/*
* @Author: Just be free
* @Date:   2020-08-07 11:26:09
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-14 17:31:54
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
        return [116.4,39.92];
      }
    },
    plugins: {
      type: Array,
      default: () => {
        return [];
      }
    },
    mapOptions: {
      type: Object,
      default: () => {
        return {};
      }
    },
    autoDestroy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      zoom: null,
      map: null
    };
  },
  methods: {
    getMapInstance() {
      return this.map;
    },
    getCurrentZoom() {
      return this.zoom;
    },
    setZoom(zoom) {
      this.zoom = zoom;
    },
    notify(type, message) {
      this.$emit(type, { vueInstance: this, ...message });
    },
    mapZoomStart(e, map) {
      this.notify(e.type, { map });
    },
    mapZoom(e, map) {
      this.notify(e.type, { map });
    },
    mapZoomEnd(e, map) {
      this.notify(e.type, { map });
    },
    mapMoveStart(e, map) {
      this.notify(e.type, { map });
    },
    mapMove(e, map) {
      this.notify(e.type, { map });
    },
    mapMoveEnd(e, map) {
      this.notify(e.type, { map });
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
      this.notify(e.type, { map });
    },
    installPlugin(options = {}) {
      const { AMap } = options;
      AMap.plugin(this.plugins, () => {
        this.$emit("pluginInstalled", { ...options });
      });
    },
    load(options = {}) {
      const { key, mapOptions } = options;
      loadMap({ key }).then((AMap) => {
        const { center } = this;
        const map = new AMap.Map('vue-amp2x-container', {
          zoom: 13,
          zooms: [10, 19],
          center,
          touchZoomCenter: 1,
          mapStyle: "amap://styles/light",
          ...mapOptions
        });
        this.map = map;
        this.zoom = map.getZoom();
        this.installPlugin({ AMap, map });
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
    const { mapKey, mapOptions } = this.$props;
    this.load({ key: mapKey, mapOptions });
  },
  destroyed() {
    const { autoDestroy } = this.$props;
    if (autoDestroy) {
      try {
        this.map.destroy();
        this.map = null;
        console.log("AMap has been destroyed");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("AMap should be destroyed, you can simply set autoDestroy prop as true.");
    }
  },
  render(h) {
    const defaultWidth = this.width || `${document.documentElement.clientWidth}px`;
    const defaultHeight = this.height || `${document.documentElement.clientHeight}px`;
    return h('div', { style: { width: defaultWidth, height: defaultHeight } }, [
      h('div', { attrs: { id: 'vue-amp2x-container' }, style: { width: defaultWidth, height: defaultHeight } }, [])
    ]);
  }
};
