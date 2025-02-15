import{d as c,B as e,o as s,c as u,G as n,w as b}from"./framework.BRu0xxKU.js";const i={style:{height:"400px"},class:"vw-full vh-full"},f=c({__name:"demo",setup(p){const o=[116.17381,39.92155464],a=[[116.17381,39.92155464],[116.25105956968257,40.02398993628292],[116.31591012802686,39.96769599504311],[116.3234327392287,39.892836286211754]];return(m,l)=>{const r=e("mb-tianditu-layer"),t=e("mb-buffer-polygon-layer"),d=e("mb-map");return s(),u("div",i,[n(d,{zoom:10,center:o,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[n(r),n(t,{polygon:a,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1})])}}}),_={style:{height:"400px"},class:"vw-full vh-full"},y=c({__name:"demo-manual",setup(p){const o=[116.17381,39.92155464];return(a,m)=>{const l=e("mb-tianditu-layer"),r=e("mb-buffer-polygon-layer"),t=e("mb-map");return s(),u("div",_,[n(t,{zoom:10,center:o,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[n(l),n(r,{manual:!0,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1})])}}}),h=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="10"
      :center="center"
      :glyphs="'/mapbox-vue3/' + 'fonts/{fontstack}/{range}.pbf'"
    >
      <mb-tianditu-layer />
      <mb-buffer-polygon-layer
        :polygon="polygon"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        :closable="true"
        :countable="true"
        :draggable="true"
        :resizable="true"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts">
const center = [116.17381, 39.92155464]
const polygon = [
  [116.17381, 39.92155464],
  [116.25105956968257, 40.02398993628292],
  [116.31591012802686, 39.96769599504311],
  [116.3234327392287, 39.892836286211754],
]
<\/script>
`,v=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="10"
      :center="center"
      :glyphs="'/mapbox-vue3/' + 'fonts/{fontstack}/{range}.pbf'"
    >
      <mb-tianditu-layer />
      <mb-buffer-polygon-layer
        :manual="true"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        :closable="true"
        :countable="true"
        :draggable="true"
        :resizable="true"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts">
const center = [116.17381, 39.92155464]
<\/script>
`;export{h as D,f as _,v as a,y as b};
