import{d as u,p as v,B as i,o as a,c as t,G as y,w as b,j as s,a5 as T,F as p,C as c,a6 as _}from"./framework.BRu0xxKU.js";const x={style:{height:"400px"},class:"vw-full vh-full"},f={style:{position:"absolute",top:"5px",left:"5px"}},h=["label","value"],V=u({__name:"demo",setup(g){const o=[{label:"矢量底图(Vector)",layerTypes:["vec"]},{label:"矢量底图+注记(Vector + Annotations)",layerTypes:["vec","cva"]},{label:"影像底图(Imagery)",layerTypes:["img"]},{label:"影像底图+注记(Imagery + Annotations)",layerTypes:["img","cia"]},{label:"地形晕渲(Terrain)",layerTypes:["ter"]},{label:"地形晕渲+注记(Terrain + Annotations)",layerTypes:["ter","cta"]}],l=v(1);return(w,r)=>{const m=i("mb-tianditu-layer"),d=i("mb-map");return a(),t("div",x,[y(d,null,{default:b(()=>[s("div",f,[T(s("select",{"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),placeholder:"请选择"},[(a(),t(p,null,c(o,(e,n)=>s("option",{key:e.layerTypes[0]+n,label:e.label,value:n},null,8,h)),64))],512),[[_,l.value]])]),(a(),t(p,null,c(o,(e,n)=>y(m,{key:e.layerTypes[0]+n,types:e.layerTypes,show:l.value===n},null,8,["types","show"])),64))]),_:1})])}}}),k=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map>
      <div style="position: absolute; top: 5px; left: 5px">
        <select v-model="layerIndex" placeholder="请选择">
          <option
            v-for="(item, index) in layerOptions"
            :key="item.layerTypes[0] + index"
            :label="item.label"
            :value="index"
          />
        </select>
      </div>
      <mb-tianditu-layer
        v-for="(item, index) in layerOptions"
        :key="item.layerTypes[0] + index"
        :types="item.layerTypes"
        :show="layerIndex === index"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const layerOptions = [
  {
    label: '矢量底图(Vector)',
    layerTypes: ['vec'],
  },
  {
    label: '矢量底图+注记(Vector + Annotations)',
    layerTypes: ['vec', 'cva'],
  },
  {
    label: '影像底图(Imagery)',
    layerTypes: ['img'],
  },
  {
    label: '影像底图+注记(Imagery + Annotations)',
    layerTypes: ['img', 'cia'],
  },
  {
    label: '地形晕渲(Terrain)',
    layerTypes: ['ter'],
  },
  {
    label: '地形晕渲+注记(Terrain + Annotations)',
    layerTypes: ['ter', 'cta'],
  },
]
const layerIndex = ref(1)
<\/script>
`;export{k as D,V as _};
