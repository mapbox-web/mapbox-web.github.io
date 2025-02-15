import{d as l,p as m,a3 as u,B as o,o as d,c as _,G as t,w as b}from"./framework.BRu0xxKU.js";const f={style:{height:"400px"},class:"vw-full vh-full"},v=l({__name:"demo",setup(g){const r=m([]),a=["scalerank",1,"rgb(178,24,43)",2,"rgb(239,138,98)",4,"rgb(253,219,199)",6,"rgb(209,229,240)",8,"rgb(103,169,207)",10,"rgba(33,102,172,0)"],s=["scalerank",1,10,10,1];return u(()=>{fetch("/mapbox-vue3/json/ne_10m_airports.geojson").then(e=>e.json()).then(e=>{r.value=e.features.map(n=>({coordinates:n.geometry.coordinates.slice(),properties:n.properties}))})}),(e,n)=>{const c=o("mb-tianditu-layer"),i=o("mb-circle-layer"),p=o("mb-map");return d(),_("div",f,[t(p,{zoom:1.5,pitch:20},{default:b(()=>[t(c),t(i,{data:r.value,color:a,radius:s,"stroke-width":1,"stroke-opacity":1},null,8,["data"])]),_:1})])}}}),y=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="1.5" :pitch="20">
      <mb-tianditu-layer />
      <mb-circle-layer
        :data="airpotDataSource"
        :color="color"
        :radius="radius"
        :stroke-width="1"
        :stroke-opacity="1"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const airpotDataSource = ref([])
const color = [
  'scalerank',
  1,
  'rgb(178,24,43)',
  2,
  'rgb(239,138,98)',
  4,
  'rgb(253,219,199)',
  6,
  'rgb(209,229,240)',
  8,
  'rgb(103,169,207)',
  10,
  'rgba(33,102,172,0)',
]
const radius = ['scalerank', 1, 10, 10, 1]

onBeforeMount(() => {
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
