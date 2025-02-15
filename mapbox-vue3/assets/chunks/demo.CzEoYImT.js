import{_ as a,B as t,o as c,c as i,G as o,w as m}from"./framework.BRu0xxKU.js";const r={},l={style:{height:"400px"},class:"vw-full vh-full"};function p(_,u){const n=t("mb-tianditu-layer"),e=t("mb-navigation-control"),s=t("mb-map");return c(),i("div",l,[o(s,{bearing:30},{default:m(()=>[o(n),o(e,{"show-compass":!0,"show-zoom":!0,position:"top-right"})]),_:1})])}const b=a(r,[["render",p]]),d=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :bearing="30">
      <mb-tianditu-layer />
      <mb-navigation-control
        :show-compass="true"
        :show-zoom="true"
        position="top-right"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts"><\/script>
`;export{d as D,b as a};
