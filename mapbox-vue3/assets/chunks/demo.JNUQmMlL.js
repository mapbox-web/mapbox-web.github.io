import{d as r,B as n,o as p,c as l,G as e,w as d}from"./framework.BRu0xxKU.js";const u={style:{height:"400px"},class:"vw-full vh-full"},h=r({__name:"demo",setup(_){const o=["vec","cia"],t=[{name:"hIcon",dir:"h",steps:7,duration:150,url:"/mapbox-vue3/images/h-steps.jpeg"},{name:"vIcon",dir:"v",steps:3,duration:300,url:"/mapbox-vue3/images/v-steps.png"}],a=[{coordinates:[115.124368,29.216049],properties:{icon:"hIcon"}},{coordinates:[115.124368,29.246049],properties:{icon:"hIcon"}},{coordinates:[115.124368,29.186049],properties:{icon:"hIcon"}},{coordinates:[115.324368,29.216049],properties:{icon:"vIcon"}}];return(b,g)=>{const s=n("mb-tianditu-layer"),i=n("mb-image-frame-loader"),c=n("mb-symbol-layer"),m=n("mb-map");return p(),l("div",u,[e(m,{center:[115.124368,29.216049],zoom:10},{default:d(()=>[e(s,{types:o}),e(i,{images:t}),e(c,{id:"symbol",data:a,"icon-size":.2,"icon-image-field":"icon","icon-rotation-alignment":"map"})]),_:1})])}}}),y=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[115.124368, 29.216049]" :zoom="10">
      <mb-tianditu-layer :types="tiandituTypes" />
      <mb-image-frame-loader :images="images" />
      <mb-symbol-layer
        id="symbol"
        :data="symbolDataSource"
        :icon-size="0.2"
        icon-image-field="icon"
        icon-rotation-alignment="map"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
const tiandituTypes = ['vec', 'cia']
const images = [
  {
    name: 'hIcon',
    dir: 'h',
    steps: 7,
    duration: 150,
    url: \`\${'/mapbox-vue3/'}images/h-steps.jpeg\`,
  },
  {
    name: 'vIcon',
    dir: 'v',
    steps: 3,
    duration: 300,
    url: \`\${'/mapbox-vue3/'}images/v-steps.png\`,
  },
]
const symbolDataSource = [
  {
    coordinates: [115.124368, 29.216049],
    properties: {
      icon: 'hIcon',
    },
  },
  {
    coordinates: [115.124368, 29.246049],
    properties: {
      icon: 'hIcon',
    },
  },
  {
    coordinates: [115.124368, 29.186049],
    properties: {
      icon: 'hIcon',
    },
  },
  {
    coordinates: [115.324368, 29.216049],
    properties: {
      icon: 'vIcon',
    },
  },
]
<\/script>
`;export{y as D,h as _};
