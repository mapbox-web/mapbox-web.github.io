import{_ as r,B as o,o as n,c as a,G as e,w as l,t as i,e as d}from"./framework.BRu0xxKU.js";const _={},u={style:{height:"400px"},class:"vw-full vh-full"},b={key:0,style:{padding:"4px","background-color":"black",color:"white"}};function f(h,v){const s=o("mb-tianditu-layer"),c=o("mb-map-tooltip"),p=o("mb-map");return n(),a("div",u,[e(p,{zoom:14},{default:l(()=>[e(s),e(c,null,{default:l(({coordinates:m,pixel:t})=>[t.x&&t.y?(n(),a("div",b," position: "+i(m)+" / "+i(t),1)):d("",!0)]),_:1})]),_:1})])}const y=r(_,[["render",f]]),g=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="14">
      <mb-tianditu-layer />
      <mb-map-tooltip>
        <template #default="{ coordinates, pixel }">
          <div
            v-if="pixel.x && pixel.y"
            style="padding: 4px; background-color: black; color: white"
          >
            position: {{ coordinates }} / {{ pixel }}
          </div>
        </template>
      </mb-map-tooltip>
    </mb-map>
  </div>
</template>
<script setup lang="ts"><\/script>
`;export{g as D,y as a};
