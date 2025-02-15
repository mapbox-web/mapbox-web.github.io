import{d as m,p as g,B as _,o as b,c as f,j as n,a as r,a5 as x,a6 as D,a2 as C,G as k,F as A}from"./framework.BRu0xxKU.js";import{$ as M}from"./mapbox-web-draw.BO1nkz54.js";const h={class:"actions"},y={class:"map-container black"},T=m({__name:"demo",setup(j){const a=g(""),p={};let i="",t;const l=e=>{t=new M(e,{userProperties:!0}),e.on("draw.create",o=>{p[o.features[0].id]=o.features[0]})},d=()=>{a.value==="draw_text"?t.changeMode(a.value,{text:"Text","text-color":"white","text-size":20}):a.value==="draw_image"?t.changeMode(a.value,{imageId:"logo",imageUrl:"/logo.png"}):t.changeMode(a.value)},s=()=>{t.changeMode("simple_select");for(const e of Object.keys(p))t.delete([e])},u=()=>{const e=JSON.stringify(Object.values(p));i=e,window.alert(e)},c=()=>{JSON.parse(i).forEach(e=>t.add(e))};return(e,o)=>{const w=_("mb-map");return b(),f(A,null,[n("div",h,[o[2]||(o[2]=r(" Choose Mode： ")),x(n("select",{"onUpdate:modelValue":o[0]||(o[0]=v=>a.value=v),style:{width:"250px"},onChange:d},o[1]||(o[1]=[C('<optgroup label="文本(Text)"><option value="draw_text">文本(Text)</option></optgroup><optgroup label="线状(Line)"><option value="draw_line_string">折线(Line)</option><option value="draw_curve">曲线(Curve)</option><option value="draw_arc">弧线(Arc)</option></optgroup><optgroup label="面状(Area)"><option value="draw_polygon">多边形(Polygon)</option><option value="draw_circle">圆(Circle)</option><option value="draw_ellipse">椭圆(Ellipse)</option><option value="draw_rectangle">矩形(Rectange)</option><option value="draw_sector">扇形(Sector)</option><option value="draw_lune">弓形(Lune)</option><option value="draw_closed_curve">闭合曲面(Closed Curve)</option></optgroup><optgroup label="箭头(Arrow)"><option value="draw_fine_arrow">细直箭头(Fine Arrow)</option><option value="draw_assault_direction"> 突击方向(Assault Direction) </option><option value="draw_double_arrow">钳击(Double Arrow)</option><option value="draw_attack_arrow">进攻箭头(Attack Arrow)</option><option value="draw_tailed_attack_arrow"> 燕尾进攻箭头(Tailed Attack Arrow) </option><option value="draw_squad_combat">战斗小队(Squad Combat)</option></optgroup><optgroup label="图片(Image)"><option value="draw_image">图片(Image)</option></optgroup>',5)]),544),[[D,a.value]]),o[3]||(o[3]=r("   ")),n("a",{href:"javascript:;",onClick:s},"Clear"),o[4]||(o[4]=r("   ")),n("a",{href:"javascript:;",onClick:u},"Export Data"),o[5]||(o[5]=r("   ")),n("a",{href:"javascript:;",onClick:c},"Import Data"),o[6]||(o[6]=r("   "))]),n("div",y,[k(w,{zoom:8,center:[116.3466,39.8704],onCreated:l})])],64)}}}),N=`<template>
  <div class="actions">
    Choose Mode：
    <select v-model="mode" style="width: 250px" @change="changeMode">
      <optgroup label="文本(Text)">
        <option value="draw_text">文本(Text)</option>
      </optgroup>
      <optgroup label="线状(Line)">
        <option value="draw_line_string">折线(Line)</option>
        <option value="draw_curve">曲线(Curve)</option>
        <option value="draw_arc">弧线(Arc)</option>
      </optgroup>
      <optgroup label="面状(Area)">
        <option value="draw_polygon">多边形(Polygon)</option>
        <option value="draw_circle">圆(Circle)</option>
        <option value="draw_ellipse">椭圆(Ellipse)</option>
        <option value="draw_rectangle">矩形(Rectange)</option>
        <option value="draw_sector">扇形(Sector)</option>
        <option value="draw_lune">弓形(Lune)</option>
        <option value="draw_closed_curve">闭合曲面(Closed Curve)</option>
      </optgroup>
      <optgroup label="箭头(Arrow)">
        <option value="draw_fine_arrow">细直箭头(Fine Arrow)</option>
        <option value="draw_assault_direction">
          突击方向(Assault Direction)
        </option>
        <option value="draw_double_arrow">钳击(Double Arrow)</option>
        <option value="draw_attack_arrow">进攻箭头(Attack Arrow)</option>
        <option value="draw_tailed_attack_arrow">
          燕尾进攻箭头(Tailed Attack Arrow)
        </option>
        <option value="draw_squad_combat">战斗小队(Squad Combat)</option>
      </optgroup>
      <optgroup label="图片(Image)">
        <option value="draw_image">图片(Image)</option>
      </optgroup></select
    >&nbsp;&nbsp;
    <a href="javascript:;" @click="clearData">Clear</a>&nbsp;&nbsp;
    <a href="javascript:;" @click="exportData">Export Data</a>&nbsp;&nbsp;
    <a href="javascript:;" @click="importData">Import Data</a>&nbsp;&nbsp;
  </div>
  <div class="map-container black">
    <mb-map :zoom="8" :center="[116.3466, 39.8704]" @created="createdHandler" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MapboxDraw from '@mapbox-web/draw'
import type { Map } from 'mapbox-gl'

const mode = ref('')
const features: Record<string, any> = {}
let savedData = ''
let draw: MapboxDraw

const createdHandler = (map: Map) => {
  draw = new MapboxDraw(map, {
    userProperties: true,
  })
  map.on('draw.create', (e) => {
    features[e.features[0].id] = e.features[0]
  })
}
const changeMode = () => {
  if (mode.value === 'draw_text') {
    draw.changeMode(mode.value, {
      text: 'Text',
      'text-color': 'white',
      'text-size': 20,
    })
  } else if (mode.value === 'draw_image') {
    draw.changeMode(mode.value, { imageId: 'logo', imageUrl: '/logo.png' })
  } else {
    draw.changeMode(mode.value)
  }
}
const clearData = () => {
  draw.changeMode('simple_select')
  for (const featureId of Object.keys(features)) {
    draw.delete([featureId])
  }
}
const exportData = () => {
  const data = JSON.stringify(Object.values(features))
  savedData = data
  // eslint-disable-next-line no-alert
  window.alert(data)
}
const importData = () => {
  JSON.parse(savedData).forEach((d) => draw.add(d))
}
<\/script>
<style>
.actions {
  margin-bottom: 5px;
}
</style>
`;export{N as D,T as _};
