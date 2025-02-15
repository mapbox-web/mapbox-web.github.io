import{d as b,p as r,B as s,o as k,c as v,G as t,w as a,j as p,a4 as C}from"./framework.BRu0xxKU.js";const _={style:{height:"400px"},class:"vw-full vh-full"},g=b({__name:"demo",setup(M){const u={setup(){return()=>C("div",{innerHTML:"Vue Comp",style:{color:"red",fontSize:"20px",fontWeight:"bolder"}})}},m=r([116.38745,39.91266]),i=r([116.40123,39.91266]),d=r([116.39123,39.91266]),l=r([116.38123,39.91266]);return(x,o)=>{const c=s("mb-tianditu-layer"),n=s("mb-map-marker"),f=s("mb-map");return k(),v("div",_,[t(f,{zoom:14},{default:a(()=>[t(c),t(n,{coordinates:m.value,"onUpdate:coordinates":o[0]||(o[0]=e=>m.value=e),color:"red"},null,8,["coordinates"]),t(n,{coordinates:i.value,"onUpdate:coordinates":o[1]||(o[1]=e=>i.value=e)},{default:a(()=>o[4]||(o[4]=[p("button",{class:"primary"},"按钮",-1)])),_:1},8,["coordinates"]),t(n,{coordinates:d.value,"onUpdate:coordinates":o[2]||(o[2]=e=>d.value=e)},{default:a(()=>o[5]||(o[5]=[p("img",{src:"https://cdn.pixabay.com/animation/2022/10/11/23/03/23-03-06-809_512.gif",style:{width:"64px",height:"64px"}},null,-1)])),_:1},8,["coordinates"]),t(n,{coordinates:l.value,"onUpdate:coordinates":o[3]||(o[3]=e=>l.value=e)},{default:a(()=>[t(u)]),_:1},8,["coordinates"])]),_:1})])}}}),h=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="14">
      <mb-tianditu-layer />
      <mb-map-marker
        v-model:coordinates="defaultMarkerCoordinates"
        color="red"
      />
      <mb-map-marker v-model:coordinates="customMarkerCoordinates">
        <button class="primary">按钮</button>
      </mb-map-marker>
      <mb-map-marker v-model:coordinates="customMarkerCoordinates2">
        <img
          src="https://cdn.pixabay.com/animation/2022/10/11/23/03/23-03-06-809_512.gif"
          style="width: 64px; height: 64px"
        />
      </mb-map-marker>
      <mb-map-marker v-model:coordinates="customMarkerCoordinates3">
        <Test1 />
      </mb-map-marker>
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'

const Test1 = {
  setup() {
    return () =>
      h('div', {
        innerHTML: 'Vue Comp',
        style: { color: 'red', fontSize: '20px', fontWeight: 'bolder' },
      })
  },
}

const defaultMarkerCoordinates = ref([116.38745, 39.91266])
const customMarkerCoordinates = ref([116.40123, 39.91266])
const customMarkerCoordinates2 = ref([116.39123, 39.91266])
const customMarkerCoordinates3 = ref([116.38123, 39.91266])
<\/script>
`;export{h as D,g as _};
