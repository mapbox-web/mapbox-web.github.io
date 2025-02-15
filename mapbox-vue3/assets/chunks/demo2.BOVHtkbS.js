import{d as l,B as e,o as u,c as s,G as r,w as b}from"./framework.BRu0xxKU.js";const _={style:{height:"400px"},class:"vw-full vh-full"},f=10,v=l({__name:"demo",setup(d){const o=[116.17381,39.92155464];return(i,p)=>{const n=e("mb-tianditu-layer"),t=e("mb-buffer-circle-layer"),c=e("mb-map");return u(),s("div",_,[r(c,{zoom:10,center:o,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[r(n),r(t,{center:o,radius:f,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"text-color":"blue",closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1})])}}}),h=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="10"
      :center="center"
      :glyphs="'/mapbox-vue3/' + 'fonts/{fontstack}/{range}.pbf'"
    >
      <mb-tianditu-layer />
      <mb-buffer-circle-layer
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        text-color="blue"
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
const radius = 10
<\/script>
`,g={style:{height:"400px"},class:"vw-full vh-full"},a=10,k=l({__name:"demo2",setup(d){const o=[116.17381,39.92155464];return(i,p)=>{const n=e("mb-tianditu-layer"),t=e("mb-buffer-circle-layer"),c=e("mb-buffer-circle-layer-v2"),m=e("mb-map");return u(),s("div",g,[r(m,{crs:"EPSG:4490",zoom:10,center:o,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[r(n),r(t,{center:o,radius:a,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"text-color":"blue",closable:!0,countable:!0,draggable:!0,resizable:!0}),r(c,{center:o,radius:a,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"text-color":"blue",closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1})])}}}),x=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      crs="EPSG:4490"
      :zoom="10"
      :center="center"
      :glyphs="'/mapbox-vue3/' + 'fonts/{fontstack}/{range}.pbf'"
    >
      <mb-tianditu-layer />
      <mb-buffer-circle-layer
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        text-color="blue"
        :closable="true"
        :countable="true"
        :draggable="true"
        :resizable="true"
      />
      <mb-buffer-circle-layer-v2
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        text-color="blue"
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
const radius = 10
<\/script>
`;export{h as D,v as _,x as a,k as b};
