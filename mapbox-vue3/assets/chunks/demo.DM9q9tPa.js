import{d as f,p as v,B as n,o as r,c as x,j as h,G as s,w as C,b as l,e as c}from"./framework.BRu0xxKU.js";const k={style:{height:"400px"},class:"vw-full vh-full"},w=11,L=f({__name:"demo",setup(j){let o=null;const m=[120.30782359643746,31.49292271319491],a=v(!1),p={type:"geojson",data:"/mapbox-vue3/json/source-example.geojson"},u=t=>{o=t},i=()=>{const t=o==null?void 0:o.getCanvas().toDataURL("image/png"),e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download","test.png"),document.body.appendChild(e),e.click()};return(t,e)=>{const d=n("mb-tianditu-layer"),b=n("mb-polygon-layer"),y=n("mb-polyline-layer"),g=n("mb-source"),_=n("mb-map");return r(),x("div",k,[h("button",{class:"primary",onClick:i},"打印(Print)"),s(_,{zoom:w,center:m,"extend-props":{preserveDrawingBuffer:!0},onCreated:u},{default:C(()=>[s(d),a.value?(r(),l(b,{key:0,"source-id":"sourceExample",opacity:.1,color:"blue"})):c("",!0),a.value?(r(),l(y,{key:1,"source-id":"sourceExample",color:"blue"})):c("",!0),s(g,{id:"sourceExample","geo-json-source":p,onSourceAdded:e[0]||(e[0]=E=>a.value=!0)})]),_:1})])}}}),D=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <button class="primary" @click="print">打印(Print)</button>
    <mb-map
      :zoom="mapZoom"
      :center="mapCenter"
      :extend-props="{ preserveDrawingBuffer: true }"
      @created="mapCreatedHandler"
    >
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
import type { Map } from 'mapbox-gl'

let $map: Map | null = null

const mapCenter = [120.30782359643746, 31.49292271319491]
const mapZoom = 11
const showLayer = ref(false)
const geoJsonSource = {
  type: 'geojson',
  data: \`\${'/mapbox-vue3/'}json/source-example.geojson\`,
}

const mapCreatedHandler = (map: Map) => {
  $map = map
}
const print = () => {
  const img = $map?.getCanvas().toDataURL('image/png')
  const link = document.createElement('a')
  link.setAttribute('href', img)
  link.setAttribute('download', 'test.png')
  document.body.appendChild(link)
  link.click()
}
<\/script>
`;export{D,L as _};
