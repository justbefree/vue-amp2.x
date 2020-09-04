<template>
  <div id="app">
    <VueAmap2x mapKey="ccd1e3a84dd69c646c53abd884db7141" v-on:moveend="handleMoveEnd" v-on:complete="handleMapLoaded" :center="center" v-on:zoomend="handleZoomEnd"></VueAmap2x>
  </div>
</template>

<script>
import http from "./lib/http";
export default {
  name: 'App',
  data() {
    return {
      markers: [],
      map: null,
      vueInstance: null,
      center: [121.472644, 31.231706],
      hotelMarkers: []
    };
  },
  methods: {
    removeMarkers() {
      this.map.remove(this.hotelMarkers);
      this.hotelMarkers = [];
    },
    addMarker(target) {
      const content = `
        <div class="marker-route marker-marker-bus-from">
          <img src="https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png" />
        </div>
      `;
      const marker = new window.AMap.Marker({
        content,
        position: target.coordinate,
        anchor: 'bottom-center',
      });
      return marker;
    },
    processHotelMarker(hotelData = []) {
      // const hotelMarkers = [];
      hotelData.forEach((hotel) => {
        const marker = this.addMarker({
          coordinate: [hotel.Longitude, hotel.Latitude],
          mark: hotel.HotelName,
          price: hotel.LowRate,
        });
        this.hotelMarkers.push(marker);
      });
      this.map.add(this.hotelMarkers);
    },
    handleZoomEnd({ map, vueInstance }) {
      if (vueInstance.getCurrentZoom() !== map.getZoom()) {
        // this.zoom = map.getZoom();
        vueInstance.setZoom(map.getZoom());
        map.setCenter(this.center);
        this.Toast("缩放发生移动并校正");
      }
    },
    handleMoveEnd({ map, vueInstance }) {
      if (vueInstance.getCurrentZoom() === map.getZoom() && window.AMap.GeometryUtil.distance(this.center, map.getCenter()) >= 500) {
        // console.log("两点之间的距离", AMap.GeometryUtil.distance(this.center, map.getCenter()));
        const center = map.getCenter();
        // this.center = map.getCenter();
        this.center = [center.lng, center.lat];
        const Position = {
          Latitude: center.lat,
          Longitude: center.lng,
          Name: "",
          Radius: 1000
        };
        this.requestHotels({ Position });
        this.Toast("发生移动准备请求新数据");
      }
    },
    requestHotels(args = {}) {
      const params = {
        GeoId: "L00509",
        ArrivalDate: "2020-09-08",
        DepartureDate: "2020-09-09",
        PageIndex: 1,
        PayType: "all",
        InvoiceType: "all",
        StarRate: "0,1,2,3,4,5",
        LowRate: 0,
        HighRate: 500,
        Sort: "0",
        Platform: "schedule",
        Position: {
          Latitude: 31.231706,
          Longitude: 121.472644,
          Name: "",
          Radius: 1000
        },
        CityName: "上海",
        QueryText: "",
        lang: "zh-CN",
        QueryType: 0,
        authenticate: "NkNCNnltUVQzcFpHMFpUVTRCZ1FaR2hpa1BiYy9rTkhPWVd4TU9sSDJwL3VHVzV2SldWQzNtOHVjZzloZlBXUXcvMG9aYjE2MkhQaFZqR1RFNitZZlE9PQ==",
        ...args
      };
      this.Indicator.open({
        spinType: "rotate",
        background: "transparent",
        lockScreen: true,
        transparent: true
      });
      http.postJSON("/Hotel/Hotels", params).then(res => {
        this.removeMarkers();
        this.processHotelMarker(res.Result);
        this.Indicator.close();
      }).catch(err => {
        this.Indicator.close();
        console.log(err);
      })
    },
    handleMapLoaded({ map, vueInstance }) {
      this.map = map;
      this.vueInstance = vueInstance;
      this.requestHotels();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
