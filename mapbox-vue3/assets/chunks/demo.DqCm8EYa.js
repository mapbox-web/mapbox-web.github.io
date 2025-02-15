import{d as m,B as n,o as l,c as p,G as t,w as r}from"./framework.BRu0xxKU.js";const i={style:{height:"400px"},class:"vw-full vh-full"},h=m({__name:"demo",setup(_){const e=["https://vjs.zencdn.net/v/oceans.mp4"],o=[[116.3594627380371,39.93632920085673],[116.4228057861328,39.93632920085673],[116.4228057861328,39.89735776851477],[116.3594627380371,39.89735776851477]];return(d,u)=>{const s=n("mb-tianditu-layer"),a=n("mb-video-layer"),c=n("mb-map");return l(),p("div",i,[t(c,{zoom:12,pitch:40},{default:r(()=>[t(s),t(a,{urls:e,coordinates:o})]),_:1})])}}}),b=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="12" :pitch="40">
      <mb-tianditu-layer />
      <mb-video-layer :urls="urls" :coordinates="coordinates" />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
const urls = ['https://vjs.zencdn.net/v/oceans.mp4']
const coordinates = [
  [116.3594627380371, 39.93632920085673],
  [116.4228057861328, 39.93632920085673],
  [116.4228057861328, 39.89735776851477],
  [116.3594627380371, 39.89735776851477],
]
<\/script>
`;export{b as D,h as _};
