import{d as c,p as l,B as s,o as h,c as f,G as t,w as a,j as u,a as w}from"./framework.BRu0xxKU.js";const b={style:{height:"400px"},class:"vw-full vh-full"},x=c({__name:"demo",setup(v){const p=l(!0),e=l(!0);return(_,o)=>{const r=s("mb-tianditu-layer"),m=s("mb-map-popup"),i=s("mb-map-marker"),d=s("mb-map");return h(),f("div",b,[t(d,{zoom:14,pitch:40},{default:a(()=>[u("button",{class:"primary",style:{position:"absolute",top:"5px",left:"5px"},onClick:o[0]||(o[0]=n=>{p.value=!p.value,e.value=!e.value})}," Show/Hide Popup "),t(r,{types:["img"]}),t(m,{show:p.value,"onUpdate:show":o[1]||(o[1]=n=>p.value=n),coordinates:[116.388,39.91266],offset:[0,-44],"show-tip":!1,anchor:"bottom"},{default:a(()=>o[3]||(o[3]=[u("div",{style:{width:"100px",height:"100px",background:"#81adb0d9"}},[u("p",null,"Custom Popup")],-1)])),_:1},8,["show"]),t(i,{coordinates:[116.388,39.91266],color:"red"}),t(m,{show:e.value,"onUpdate:show":o[2]||(o[2]=n=>e.value=n),coordinates:[116.4,39.91266],"hide-on-click":!1},{content:a(()=>o[4]||(o[4]=[w(" Default Popup ")])),_:1},8,["show"])]),_:1})])}}}),y=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :zoom="14" :pitch="40">
      <button
        class="primary"
        style="position: absolute; top: 5px; left: 5px"
        @click="
          ;(showCustomPopup = !showCustomPopup),
            (showDefaultPopup = !showDefaultPopup)
        "
      >
        Show/Hide Popup
      </button>
      <mb-tianditu-layer :types="['img']" />
      <mb-map-popup
        v-model:show="showCustomPopup"
        :coordinates="[116.388, 39.91266]"
        :offset="[0, -44]"
        :show-tip="false"
        anchor="bottom"
      >
        <div style="width: 100px; height: 100px; background: #81adb0d9">
          <p>Custom Popup</p>
        </div>
      </mb-map-popup>
      <mb-map-marker :coordinates="[116.388, 39.91266]" color="red" />

      <mb-map-popup
        v-model:show="showDefaultPopup"
        :coordinates="[116.4, 39.91266]"
        :hide-on-click="false"
      >
        <template #content> Default Popup </template>
      </mb-map-popup>
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCustomPopup = ref(true)
const showDefaultPopup = ref(true)
<\/script>
`;export{y as D,x as _};
