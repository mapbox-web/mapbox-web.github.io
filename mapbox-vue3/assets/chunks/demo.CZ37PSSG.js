import{d as m,B as e,o as c,c as i,G as n,w as l}from"./framework.BRu0xxKU.js";const p={style:{height:"400px"},class:"vw-full vh-full"},r="/mapbox-vue3/images/haizi.jpg",b=m({__name:"demo",setup(_){const t=[[116.3594627380371,39.93632920085673],[116.4228057861328,39.93632920085673],[116.4228057861328,39.89735776851477],[116.3594627380371,39.89735776851477]];return(u,d)=>{const o=e("mb-tianditu-layer"),a=e("mb-image-layer"),s=e("mb-map");return c(),i("div",p,[n(s,{zoom:12,pitch:40},{default:l(()=>[n(o),n(a,{url:r,coordinates:t})]),_:1})])}}}),g=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="12" :pitch="40">
      <mb-tianditu-layer />
      <mb-image-layer :url="url" :coordinates="coordinates" />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
const url = \`\${'/mapbox-vue3/'}images/haizi.jpg\`
const coordinates = [
  [116.3594627380371, 39.93632920085673],
  [116.4228057861328, 39.93632920085673],
  [116.4228057861328, 39.89735776851477],
  [116.3594627380371, 39.89735776851477],
]
<\/script>
`;export{g as D,b as _};
