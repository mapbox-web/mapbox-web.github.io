import{_ as o,B as e,o as s,c as m,G as t,w as n}from"./framework.BRu0xxKU.js";const p={},c={style:{height:"400px"},class:"vw-full vh-full"};function r(i,_){const l=e("mb-url-template-layer"),a=e("mb-map");return s(),m("div",c,[t(a,{zoom:2},{default:n(()=>[t(l,{url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=XjFmKoe10YKDATQf4ZYg"})]),_:1})])}const f=o(p,[["render",r]]),h=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="2">
      <mb-url-template-layer
        url="https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=XjFmKoe10YKDATQf4ZYg"
      />
    </mb-map>
  </div>
</template>

<script lang="ts" setup><\/script>
`;export{h as D,f as a};
