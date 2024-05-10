<script setup>
// import { BMap, BZoom } from 'vue3-baidu-map-gl'
import { ref } from 'vue'
import { BMap } from 'vue3-baidu-map-gl'
import { useIpLocation, BLocation } from 'vue3-baidu-map-gl'
const map = ref()
// const mapCenter = ref({
//   lng: 0,
//   lat: 0
// })
const { get, location, isLoading } = useIpLocation(() => {
  map.value.resetCenter()
  // mapCenter.value.lat = location.point?.lat
  // mapCenter.value.lng = location.point?.lng
})
const mapSetting = ref({
  enableDragging: true,
  enableInertialDragging: true,
  enableScrollWheelZoom: false,
  enableContinuousZoom: true,
  enableResizeOnCenter: true,
  enableDoubleClickZoom: false,
  enableKeyboard: true,
  enablePinchToZoom: true,
  enableAutoResize: true,
  enableTraffic: false
})
// import { ref } from 'vue';

// const location = ref(null)

// const getLocation = async () => {
//   if (!navigator.geolocation) {
//     alert('Geolocation is not supported by this browser.')
//     return
//   }

//   try {
//     const position = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject)
//     })

//     location.value = position
//     mapCenter.value.lng = position.coords.longitude
//     mapCenter.value.lat = position.coords.latitude
//   } catch (error) {
//     console.error('Error occurred while getting location:', error)
//     alert('Error occurred while getting location.')
//   }
// }

// const mapCenter=ref
const getLocation = () => {
  alert('Geolocation is not supported by this browser')
  console.log('Geolocation is not supported by this browser')
}
</script>

<template>
  <!-- <button @click="getLoction">获取位置信息</button> -->
  <div>
    <button @click="get">获取位置信息</button>
    <div class="state" v-if="!isLoading">
      <h5>定位结果:</h5>
      <span>城市 - {{ location.name }}</span>
      <span>纬度 - {{ location.point?.lat }}</span>
      <span>经度 - {{ location.point?.lng }}</span>
    </div>
  </div>
  <div>
    <label>
      <input type="checkbox" v-model="mapSetting.enableScrollWheelZoom" />
      鼠标缩放
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="mapSetting.enableDragging" />
      拖拽
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="mapSetting.enableInertialDragging" />
      惯性拖拽
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="mapSetting.enablePinchToZoom" />
      双指缩放地图
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="mapSetting.enableKeyboard" />
      键盘操作
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="mapSetting.enableDoubleClickZoom" />
      双击缩放，左键双击放大、右键双击缩小
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="mapSetting.enableContinuousZoom" />
      双击平滑缩放效果
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="mapSetting.enableTraffic" />
      显示交通路况
    </label>
    <br />
    <br />
    地图类型：
    <select name="" id="" v-model="BMAP_SATELLITE_MAP">
      <option value="BMAP_NORMAL_MAP">常规地图 BMAP_NORMAL_MAP</option>
      <option value="BMAP_EARTH_MAP">地球模式 BMAP_EARTH_MAP</option>
      <option value="BMAP_SATELLITE_MAP">卫星图 BMAP_EARTH_MAP</option>
    </select>
    <br />
    <br />
    <BMap
      :heading="0"
      :tilt="0"
      :center="{
        lng: 116.28019,
        lat: 40.049191
      }"
      :zoom="19"
      :minZoom="3"
      mapType="BMAP_SATELLITE_MABMAP_NORMAL_MAP"
      :enableDragging="mapSetting.enableDragging"
      :enableInertialDragging="mapSetting.enableInertialDragging"
      :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom"
      :enableContinuousZoom="mapSetting.enableContinuousZoom"
      :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom"
      :enableKeyboard="mapSetting.enableKeyboard"
      :enablePinchToZoom="mapSetting.enablePinchToZoom"
      :enableTraffic="mapSetting.enableTraffic"
    >
      <BLocation @click="getLocation()" />
      <BMarker
        :zIndex="99"
        :position="{
          lng: 114.89257223,
          lat: 40.7732372
        }"
        icon="start"
      />
      <template #loading>
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </template>
    </BMap>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  width: 60px;
  height: 60px;

  position: relative;
  margin: 100px auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #42b883;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
