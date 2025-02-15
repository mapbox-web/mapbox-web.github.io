import{d as c,B as e,o as s,c as l,G as r,w as u}from"./framework.BRu0xxKU.js";const b={style:{height:"400px"},class:"vw-full vh-full"},d=10,f=c({__name:"demo",setup(m){const t=[116.17381,39.92155464];return(p,i)=>{const n=e("mb-tianditu-layer"),o=e("mb-buffer-sector-layer"),a=e("mb-map");return s(),l("div",b,[r(a,{zoom:10,center:t,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:u(()=>[r(n),r(o,{center:t,radius:d,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"start-angle":315,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0})]),_:1})])}}}),g=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="10"
      :center="center"
      :glyphs="'/mapbox-vue3/' + 'fonts/{fontstack}/{range}.pbf'"
    >
      <mb-tianditu-layer />
      <mb-buffer-sector-layer
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        :start-angle="315"
        :closable="true"
        :countable="true"
        :draggable="true"
        :resizable="true"
        :rotatable="true"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts">
const center = [116.17381, 39.92155464]
const radius = 10
<\/script>
`;export{g as D,f as _};
