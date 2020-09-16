/*
* @Author: Just be free
* @Date:   2020-08-07 11:14:15
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-16 18:31:26
* @E-mail: justbefree@126.com
*/
import AMapLoader from '@amap/amap-jsapi-loader';

export const loadMap = (options = {}) => new Promise((resolve, reject) => {
  const { key, version } = options;
  AMapLoader.load({
    key,
    // version: '2.0',
    version,
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    AMapUI: { // 是否加载 AMapUI，缺省不加载
      version: '1.1', // AMapUI 缺省 1.1
      plugins: ['overlay/SimpleMarker'], // 需要加载的 AMapUI ui插件
    },
    // Loca: { // 是否加载 Loca， 缺省不加载
    //   version: '1.3.2', // Loca 版本，缺省 1.3.2
    // },
  }).then((AMap) => {
    resolve(AMap);
  }).catch((e) => {
    reject(e);
  });
});
