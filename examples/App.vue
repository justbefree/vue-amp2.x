<template>
  <div id="app">
    <VueAmap2x :mapOptions="mapOptions" :plugins="plugins" v-on:pluginInstalled="handleGeolocation" mapKey="ccd1e3a84dd69c646c53abd884db7141" v-on:moveend="handleMoveEnd" v-on:complete="handleMapLoaded" :center="center" v-on:zoomend="handleZoomEnd"></VueAmap2x>
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
      hotelMarkers: [],
      plugins: ["AMap.Geolocation"],
      mapOptions: {
        mapStyle: "amap://styles/light",
      }
    };
  },
  methods: {
    removeMarkers() {
      this.map.remove(this.hotelMarkers);
      this.hotelMarkers = [];
    },
    handleGeolocation({ AMap, map }) {
      console.log("handleGeolocation", AMap, map);
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
      geolocation.getCurrentPosition(function(status, result) {
        if (status === "complete") {
          console.log(result);
          const { position } = result;
          map.setCenter(position);
          this.center = [position.lng, position.lat];
        } else {
          console.log(result);
        }
      });
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
        authenticate: "cWd2djlQYVE2TDhkbG5JeE5zKzlEVWpHZTlkV1o4VmlmWG1ESFR3OTAyY2NHUnlEMU83akdOeUNxTmJrbjJHSXdoak9RNWI3aGRHTWxBL09hQkpsMEE9PQ==",
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
      console.log("-------------", map.setCity);
      this.map = map;
      // console.log("handleMapLoaded", map.getStatus());
      this.vueInstance = vueInstance;
    }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
