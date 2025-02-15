import{d as i,p as l,v as u,B as t,o as d,c as _,G as o,w as b}from"./framework.BRu0xxKU.js";const h={style:{height:"400px"},class:"vw-full vh-full"},v=i({__name:"demo",setup(g){const a=l([]),r=[0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",1,"rgb(178,24,43)"],s=[0,5,1,10,14,80];return u(()=>{fetch("/mapbox-vue3/json/ne_10m_airports.geojson").then(n=>n.json()).then(n=>{a.value=n.features.map(e=>({coordinates:e.geometry.coordinates.slice(),properties:e.properties}))})}),(n,e)=>{const c=t("mb-tianditu-layer"),p=t("mb-heatmap-layer"),m=t("mb-map");return d(),_("div",h,[o(m,{zoom:1.5,pitch:20},{default:b(()=>[o(c),o(p,{data:a.value,color:r,radius:s},null,8,["data"])]),_:1})])}}}),y=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="1.5" :pitch="20">
      <mb-tianditu-layer />
      <mb-heatmap-layer
        :data="airpotDataSource"
        :color="color"
        :radius="radius"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const airpotDataSource = ref([])
const color = [
  0,
  'rgba(33,102,172,0)',
  0.2,
  'rgb(103,169,207)',
  0.4,
  'rgb(209,229,240)',
  0.6,
  'rgb(253,219,199)',
  0.8,
  'rgb(239,138,98)',
  1,
  'rgb(178,24,43)',
]
const radius = [0, 5, 1, 10, 14, 80]

onMounted(() => {
  fetch(\`\${'/mapbox-vue3/'}json/ne_10m_airports.geojson\`)
    .then((res) => res.json())
    .then((data) => {
      airpotDataSource.value = data.features.map((feature) => {
        return {
          coordinates: feature.geometry.coordinates.slice(),
          properties: feature.properties,
        }
      })
    })
})
<\/script>
`;export{y as D,v as _};
