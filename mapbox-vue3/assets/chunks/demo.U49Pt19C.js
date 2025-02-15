import{d,p as u,B as s,o as c,c as w,j as t,a as _,a5 as v,a6 as g,a2 as m,G as b,F as x}from"./framework.BRu0xxKU.js";import{$ as A}from"./mapbox-web-draw.BO1nkz54.js";const M={class:"actions"},f={class:"map-container black"},D=d({__name:"demo",setup(C){const o=u("");let a;const r=n=>{a=new A(n,{userProperties:!0})},p=()=>{o.value==="draw_text"?a.changeMode(o.value,{text:"Text","text-color":"white","text-size":20}):o.value==="draw_image"?a.changeMode(o.value,{imageId:"logo",imageUrl:"/logo.png"}):a.changeMode(o.value)};return(n,e)=>{const i=s("mb-map");return c(),w(x,null,[t("div",M,[e[2]||(e[2]=_(" Choose Mode： ")),v(t("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),style:{width:"250px"},onChange:p},e[1]||(e[1]=[m('<optgroup label="文本(Text)"><option value="draw_text">文本(Text)</option></optgroup><optgroup label="线状(Line)"><option value="draw_line_string">折线(Line)</option><option value="draw_curve">曲线(Curve)</option><option value="draw_arc">弧线(Arc)</option></optgroup><optgroup label="面状(Area)"><option value="draw_polygon">多边形(Polygon)</option><option value="draw_circle">圆(Circle)</option><option value="draw_ellipse">椭圆(Ellipse)</option><option value="draw_rectangle">矩形(Rectange)</option><option value="draw_sector">扇形(Sector)</option><option value="draw_lune">弓形(Lune)</option><option value="draw_closed_curve">闭合曲面(Closed Curve)</option></optgroup><optgroup label="箭头(Arrow)"><option value="draw_fine_arrow">细直箭头(Fine Arrow)</option><option value="draw_assault_direction"> 突击方向(Assault Direction) </option><option value="draw_double_arrow">钳击(Double Arrow)</option><option value="draw_attack_arrow">进攻箭头(Attack Arrow)</option><option value="draw_tailed_attack_arrow"> 燕尾进攻箭头(Tailed Attack Arrow) </option><option value="draw_squad_combat">战斗小队(Squad Combat)</option></optgroup><optgroup label="图片(Image)"><option value="draw_image">图片(Image)</option></optgroup>',5)]),544),[[g,o.value]])]),t("div",f,[b(i,{zoom:8,center:[116.3466,39.8704],onCreated:r})])],64)}}}),y=`<template>
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
      </optgroup>
    </select>
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

let draw: MapboxDraw

const createdHandler = (map: Map) => {
  draw = new MapboxDraw(map, {
    userProperties: true,
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
<\/script>
<style>
.actions {
  margin-bottom: 5px;
}
</style>
`;export{y as D,D as _};
