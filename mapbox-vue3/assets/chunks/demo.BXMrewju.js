import{d as o,B as e,o as n,c as r,G as t,w as m}from"./framework.BRu0xxKU.js";const p={style:{height:"400px"},class:"vw-full vh-full"},v=o({__name:"demo",setup(c){return(l,_)=>{const s=e("mb-wms-layer"),a=e("mb-map");return n(),r("div",p,[t(a,{center:[-96.8005,38.5111],zoom:3},{default:m(()=>[t(s,{url:"https://ahocevar.com/geoserver/wms",layers:"topp:states",version:"1.3.0","extra-params":"CRS=EPSG:3857&TILED=true"})]),_:1})])}}}),E=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[-96.8005, 38.5111]" :zoom="3">
      <mb-wms-layer
        url="https://ahocevar.com/geoserver/wms"
        layers="topp:states"
        version="1.3.0"
        extra-params="CRS=EPSG:3857&TILED=true"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
// https://ahocevar.com/geoserver/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&FORMAT=image%2Fpng&STYLES=&TRANSPARENT=true&LAYERS=topp%3Astates&TILED=true&WIDTH=256&HEIGHT=256&CRS=EPSG%3A3857&BBOX=-7514065.628545966%2C5009377.085697312%2C-6261721.357121638%2C6261721.35712164
<\/script>
`;export{E as D,v as _};
