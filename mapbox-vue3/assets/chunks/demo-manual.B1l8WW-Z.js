import{d as c,B as e,o as s,c as u,G as n,w as i}from"./framework.BRu0xxKU.js";const d={style:{height:"400px"},class:"vw-full vh-full"},g=c({__name:"demo",setup(b){const r=[116.17381,39.92155464],a=[[116.17381,39.92155464],[116.25105956968257,40.02398993628292],[116.31591012802686,39.96769599504311],[116.3234327392287,39.892836286211754]];return(m,l)=>{const t=e("mb-tianditu-layer"),o=e("mb-buffer-line-layer"),p=e("mb-map");return s(),u("div",d,[n(p,{zoom:10,center:r,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:i(()=>[n(t),n(o,{"line-string":a,radius:2,"border-color":"red","border-opacity":.5,"background-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1})])}}}),_={style:{height:"400px"},class:"vw-full vh-full"},y=c({__name:"demo-manual",setup(b){const r=[116.17381,39.92155464];return(a,m)=>{const l=e("mb-tianditu-layer"),t=e("mb-buffer-line-layer"),o=e("mb-map");return s(),u("div",_,[n(o,{zoom:10,center:r,glyphs:"/mapbox-vue3/fonts/{fontstack}/{range}.pbf"},{default:i(()=>[n(l),n(t,{radius:2,"line-string":[],manual:!0,"border-color":"red","border-opacity":.5,"background-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1})])}}}),h=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="10"
      :center="center"
      :glyphs="'/mapbox-vue3/' + 'fonts/{fontstack}/{range}.pbf'"
    >
      <mb-tianditu-layer />
      <mb-buffer-line-layer
        :line-string="lineString"
        :radius="2"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
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
const lineString = [
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
      <mb-buffer-line-layer
        :radius="2"
        :line-string="[]"
        :manual="true"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
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
`;export{h as D,g as _,v as a,y as b};
