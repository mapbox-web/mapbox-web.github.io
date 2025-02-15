import{d as r,B as n,o as l,c as p,G as e,w as d}from"./framework.BRu0xxKU.js";const u={style:{height:"400px"},class:"vw-full vh-full"},h=r({__name:"demo",setup(_){const o=["vec","cia"],i=[{name:"child",url:"/mapbox-vue3/images/child.gif"},{name:"run",url:"/mapbox-vue3/images/run.gif"}],t=[{coordinates:[115.124368,29.216049],properties:{icon:"child"}},{coordinates:[115.124368,29.246049],properties:{icon:"child"}},{coordinates:[115.124368,29.186049],properties:{icon:"child"}},{coordinates:[115.324368,29.216049],properties:{icon:"run"}}];return(b,g)=>{const a=n("mb-tianditu-layer"),s=n("mb-image-gif-loader"),c=n("mb-symbol-layer"),m=n("mb-map");return l(),p("div",u,[e(m,{center:[115.124368,29.216049],zoom:10},{default:d(()=>[e(a,{types:o}),e(s,{images:i}),e(c,{id:"symbol",data:t,"icon-size":.2,"icon-image-field":"icon","icon-rotation-alignment":"map"})]),_:1})])}}}),f=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[115.124368, 29.216049]" :zoom="10">
      <mb-tianditu-layer :types="tiandituTypes" />
      <mb-image-gif-loader :images="images" />
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
    name: 'child',
    url: \`\${'/mapbox-vue3/'}images/child.gif\`,
  },
  {
    name: 'run',
    url: \`\${'/mapbox-vue3/'}images/run.gif\`,
  },
]
const symbolDataSource = [
  {
    coordinates: [115.124368, 29.216049],
    properties: {
      icon: 'child',
    },
  },
  {
    coordinates: [115.124368, 29.246049],
    properties: {
      icon: 'child',
    },
  },
  {
    coordinates: [115.124368, 29.186049],
    properties: {
      icon: 'child',
    },
  },
  {
    coordinates: [115.324368, 29.216049],
    properties: {
      icon: 'run',
    },
  },
]
<\/script>
`;export{f as D,h as _};
