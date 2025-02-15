import{d as m,B as n,o as p,c as l,G as e,w as f}from"./framework.BRu0xxKU.js";const d={style:{height:"400px"},class:"vw-full vh-full"},y=m({__name:"demo",setup(_){const o=["vec","cia"],i=[{name:"firefox",url:"/mapbox-vue3/images/firefox.png"}],t=[{coordinates:[115.124368,29.216049],properties:{icon:"firefox"}},{coordinates:[115.124368,29.246049],properties:{icon:"firefox"}},{coordinates:[115.124368,29.186049],properties:{icon:"firefox"}},{coordinates:[115.324368,29.216049],properties:{icon:"firefox"}}];return(b,u)=>{const a=n("mb-tianditu-layer"),s=n("mb-image-apng-loader"),r=n("mb-symbol-layer"),c=n("mb-map");return p(),l("div",d,[e(c,{center:[115.124368,29.216049],zoom:10},{default:f(()=>[e(a,{types:o}),e(s,{images:i}),e(r,{id:"symbol",data:t,"icon-size":.2,"icon-image-field":"icon","icon-rotation-alignment":"map"})]),_:1})])}}}),x=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[115.124368, 29.216049]" :zoom="10">
      <mb-tianditu-layer :types="tiandituTypes" />
      <mb-image-apng-loader :images="images" />
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
    name: 'firefox',
    url: \`\${'/mapbox-vue3/'}images/firefox.png\`,
  },
]
const symbolDataSource = [
  {
    coordinates: [115.124368, 29.216049],
    properties: {
      icon: 'firefox',
    },
  },
  {
    coordinates: [115.124368, 29.246049],
    properties: {
      icon: 'firefox',
    },
  },
  {
    coordinates: [115.124368, 29.186049],
    properties: {
      icon: 'firefox',
    },
  },
  {
    coordinates: [115.324368, 29.216049],
    properties: {
      icon: 'firefox',
    },
  },
]
<\/script>
`;export{x as D,y as _};
