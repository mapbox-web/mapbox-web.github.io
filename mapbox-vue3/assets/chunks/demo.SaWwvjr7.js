import{d as l,B as e,o as c,c as s,G as n,w as b}from"./framework.BRu0xxKU.js";const i={style:{height:"400px"},class:"vw-full vh-full"},_=l({__name:"demo",setup(m){const r=[116.17381,39.92155464];return(u,p)=>{const t=e("mb-tianditu-layer"),o=e("mb-buffer-ellipse-layer"),a=e("mb-map");return c(),s("div",i,[n(a,{zoom:10,center:r,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[n(t),n(o,{center:r,"x-semi-axis":10,"y-semi-axis":5,angle:0,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0})]),_:1})])}}}),f=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="10"
      :center="center"
      :glyphs="'/mapbox-vue3/' + 'fonts/{fontstack}/{range}.pbf'"
    >
      <mb-tianditu-layer />
      <mb-buffer-ellipse-layer
        :center="center"
        :x-semi-axis="10"
        :y-semi-axis="5"
        :angle="0"
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
        :rotatable="true"
      />
    </mb-map>
  </div>
</template>
<script setup lang="ts">
const center = [116.17381, 39.92155464]
<\/script>
`;export{f as D,_};
