import{d as _,p as d,B as e,o as n,c as b,G as s,w as v,b as a,e as r}from"./framework.BRu0xxKU.js";const f={style:{height:"400px"},class:"vw-full vh-full"},g=11,C=_({__name:"demo",setup(x){const c=[120.30782359643746,31.49292271319491],o=d(!1),m={type:"geojson",data:"/mapbox-vue3/json/source-example.geojson"};return(h,t)=>{const l=e("mb-tianditu-layer"),p=e("mb-polygon-layer"),u=e("mb-polyline-layer"),i=e("mb-source"),y=e("mb-map");return n(),b("div",f,[s(y,{zoom:g,center:c},{default:v(()=>[s(l),o.value?(n(),a(p,{key:0,"source-id":"sourceExample",opacity:.1,color:"blue"})):r("",!0),o.value?(n(),a(u,{key:1,"source-id":"sourceExample",color:"blue"})):r("",!0),s(i,{id:"sourceExample","geo-json-source":m,onSourceAdded:t[0]||(t[0]=w=>o.value=!0)})]),_:1})])}}}),E=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="mapZoom" :center="mapCenter">
      <mb-tianditu-layer />
      <mb-polygon-layer
        v-if="showLayer"
        source-id="sourceExample"
        :opacity="0.1"
        color="blue"
      />
      <mb-polyline-layer
        v-if="showLayer"
        source-id="sourceExample"
        color="blue"
      />
      <mb-source
        id="sourceExample"
        :geo-json-source="geoJsonSource"
        @source-added="showLayer = true"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const mapCenter = [120.30782359643746, 31.49292271319491]
const mapZoom = 11
const showLayer = ref(false)
const geoJsonSource = {
  type: 'geojson',
  data: \`\${'/mapbox-vue3/'}json/source-example.geojson\`,
}
<\/script>
`;export{E as D,C as _};
