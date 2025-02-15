import{d,p as m,h as u,B as o,o as _,c as y,G as n,w as b,j as s}from"./framework.BRu0xxKU.js";const v={style:{height:"400px"},class:"vw-full vh-full"},f={style:{position:"absolute",top:"5px",left:"5px"}},w=d({__name:"demo",setup(g){const t=["rgba(255,125,0,0.5)","#ec71a9","red"],e=m(0),c=[{coordinates:[[110.56640625,39.639537564366684],[107.22656249999999,36.527294814546245],[107.57812499999999,32.39851580247402],[112.5,30.600093873550072],[117.42187500000001,32.02670629333614],[117.24609374999999,36.94989178681327],[114.697265625,39.70718665682654],[110.56640625,39.639537564366684]]},{coordinates:[[82.08984375,32.47269502206151],[90.966796875,32.47269502206151],[90.966796875,38.685509760012],[82.08984375,38.685509760012],[82.08984375,32.47269502206151]]}],a=u(()=>t[e.value%t.length]);return(h,l)=>{const r=o("mb-tianditu-layer"),p=o("mb-polygon-layer"),i=o("mb-map");return _(),y("div",v,[n(i,null,{default:b(()=>[s("div",f,[s("button",{class:"primary",onClick:l[0]||(l[0]=x=>e.value++)},"Switch Color")]),n(r),n(p,{data:c,color:a.value,"outline-color":"yellow"},null,8,["color"])]),_:1})])}}}),k=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map>
      <div style="position: absolute; top: 5px; left: 5px">
        <button class="primary" @click="colorIndex++">Switch Color</button>
      </div>
      <mb-tianditu-layer />
      <mb-polygon-layer
        :data="polygonCoordinates"
        :color="color"
        outline-color="yellow"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const colors = ['rgba(255,125,0,0.5)', '#ec71a9', 'red']
const colorIndex = ref(0)
const polygonCoordinates = [
  {
    coordinates: [
      [110.56640625, 39.639537564366684],
      [107.22656249999999, 36.527294814546245],
      [107.57812499999999, 32.39851580247402],
      [112.5, 30.600093873550072],
      [117.42187500000001, 32.02670629333614],
      [117.24609374999999, 36.94989178681327],
      [114.697265625, 39.70718665682654],
      [110.56640625, 39.639537564366684],
    ],
  },
  {
    coordinates: [
      [82.08984375, 32.47269502206151],
      [90.966796875, 32.47269502206151],
      [90.966796875, 38.685509760012],
      [82.08984375, 38.685509760012],
      [82.08984375, 32.47269502206151],
    ],
  },
]

const color = computed(() => colors[colorIndex.value % colors.length])
<\/script>
`;export{k as D,w as _};
