import{_ as s,B as t,o as m,c as l,G as e,w as o}from"./framework.BRu0xxKU.js";const c={},i={style:{height:"400px"},class:"vw-full vh-full"};function r(_,p){const a=t("mb-wmts-layer"),n=t("mb-map");return m(),l("div",i,[e(n,null,{default:o(()=>[e(a,{url:"http://t{s}.tianditu.gov.cn/img_w/wmts?tk=b8ed92ff9b64aebcb0110acca15e478f","layer-name":"img","layer-style":"default","tile-matrimb-set-i-d":"w",subdomains:"01234567",maxzoom:18})]),_:1})])}const d=s(c,[["render",r]]),f=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map>
      <mb-wmts-layer
        url="http://t{s}.tianditu.gov.cn/img_w/wmts?tk=b8ed92ff9b64aebcb0110acca15e478f"
        layer-name="img"
        layer-style="default"
        tile-matrimb-set-i-d="w"
        subdomains="01234567"
        :maxzoom="18"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts"><\/script>
`;export{f as D,d as a};
