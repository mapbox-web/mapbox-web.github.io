import{_ as i,B as e,o as s,c as r,G as t,w as c}from"./framework.BRu0xxKU.js";const g="/mapbox-vue3/images/building-layer.png",l={},m={style:{height:"400px"},class:"vw-full vh-full"};function p(u,_){const n=e("mb-tianditu-layer"),o=e("mb-building-layer"),a=e("mb-map");return s(),r("div",m,[t(a,{center:[116.194322,39.925238],zoom:15,pitch:50},{default:c(()=>[t(n,{types:["vec","cva"]}),t(o,{"height-info-field":"Floor",magnification:5,"geo-json-data-source":"http://10.255.134.231:8088/geoserver/test/ows?service=WFS&maxFeatures=60000&version=1.0.0&request=GetFeature&typeName=test:beijing-building-4326&outputFormat=application/json"})]),_:1})])}const b=i(l,[["render",p]]),v=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[116.194322, 39.925238]" :zoom="15" :pitch="50">
      <mb-tianditu-layer :types="['vec', 'cva']" />
      <mb-building-layer
        height-info-field="Floor"
        :magnification="5"
        geo-json-data-source="http://10.255.134.231:8088/geoserver/test/ows?service=WFS&maxFeatures=60000&version=1.0.0&request=GetFeature&typeName=test:beijing-building-4326&outputFormat=application/json"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts"><\/script>
`;export{v as D,g as _,b as a};
