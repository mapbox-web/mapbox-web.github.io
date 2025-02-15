import{d as m,B as n,o as p,c as l,G as o,w as d}from"./framework.BRu0xxKU.js";const _={style:{height:"400px"},class:"vw-full vh-full"},f=m({__name:"demo",setup(b){const e=["vec","cia"],i=[{name:"rain",url:"/mapbox-vue3/videos/rains-s.mp4",size:[54,96]}],t=[{coordinates:[115.124368,29.216049],properties:{icon:"rain"}},{coordinates:[115.124368,29.246049],properties:{icon:"rain"}},{coordinates:[115.124368,29.186049],properties:{icon:"rain"}},{coordinates:[115.324368,29.216049],properties:{icon:"rain"}}];return(u,v)=>{const a=n("mb-tianditu-layer"),s=n("mb-video-mp4-loader"),r=n("mb-symbol-layer"),c=n("mb-map");return p(),l("div",_,[o(c,{center:[115.124368,29.216049],zoom:10},{default:d(()=>[o(a,{types:e}),o(s,{videos:i}),o(r,{id:"symbol",data:t,"icon-size":1.5,"icon-image-field":"icon","icon-rotation-alignment":"map"})]),_:1})])}}}),h=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[115.124368, 29.216049]" :zoom="10">
      <mb-tianditu-layer :types="tiandituTypes" />
      <mb-video-mp4-loader :videos="videos" />
      <mb-symbol-layer
        id="symbol"
        :data="symbolDataSource"
        :icon-size="1.5"
        icon-image-field="icon"
        icon-rotation-alignment="map"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
const tiandituTypes = ['vec', 'cia']
const videos = [
  {
    name: 'rain',
    url: \`\${'/mapbox-vue3/'}videos/rains-s.mp4\`,
    size: [54, 96],
  },
]
const symbolDataSource = [
  {
    coordinates: [115.124368, 29.216049],
    properties: {
      icon: 'rain',
    },
  },
  {
    coordinates: [115.124368, 29.246049],
    properties: {
      icon: 'rain',
    },
  },
  {
    coordinates: [115.124368, 29.186049],
    properties: {
      icon: 'rain',
    },
  },
  {
    coordinates: [115.324368, 29.216049],
    properties: {
      icon: 'rain',
    },
  },
]
<\/script>
`;export{h as D,f as _};
