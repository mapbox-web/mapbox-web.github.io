import{d as s,p as c,B as d,o as u,c as g,j as i,a as v,a5 as _,a6 as m,a2 as w,G as f,F as y}from"./framework.BRu0xxKU.js";import{$ as b}from"./mapbox-web-draw.BO1nkz54.js";const x=[{id:"gl-draw-symbol-inactive",type:"symbol",filter:["all",["!=","user_visible",!1],["==","user_display-type","symbol"],["==","active","false"],["==","$type","Point"],["==","meta","feature"],["!=","mode","static"]],paint:{"text-color":["get","user_text-color"]},layout:{"text-allow-overlap":!0,"icon-allow-overlap":!0,"text-size":["get","user_text-size"],"icon-image":["get","user_image-id"],"icon-size":["get","user_icon-size"],"text-field":["get","user_text"],"text-font":["Open Sans Regular"]}},{id:"gl-draw-symbol-active",type:"symbol",filter:["all",["!=","user_visible",!1],["==","user_display-type","symbol"],["==","$type","Point"],["==","active","true"],["==","meta","feature"]],paint:{"text-color":["get","user_text-color"]},layout:{"text-allow-overlap":!0,"icon-allow-overlap":!0,"text-size":["get","user_text-size"],"icon-image":["get","user_image-id"],"icon-size":["get","user_icon-size"],"text-field":["get","user_text"],"text-font":["Open Sans Regular"]}},{id:"gl-draw-polygon-fill-inactive",type:"fill",filter:["all",["!=","user_visible",!1],["==","active","false"],["==","$type","Polygon"],["!=","mode","static"]],paint:{"fill-color":["get","user_fill-color"],"fill-outline-color":["get","user_line-color"],"fill-opacity":["get","user_opacity"]}},{id:"gl-draw-polygon-fill-active",type:"fill",filter:["all",["!=","user_visible",!1],["==","active","true"],["==","$type","Polygon"]],paint:{"fill-color":["get","user_fill-color"],"fill-outline-color":["get","user_line-color"],"fill-opacity":["get","user_opacity"]}},{id:"gl-draw-polygon-midpoint",type:"circle",filter:["all",["!=","user_visible",!1],["==","$type","Point"],["==","meta","midpoint"]],paint:{"circle-radius":3,"circle-color":"#fbb03b"}},{id:"gl-draw-polygon-stroke-inactive",type:"line",filter:["all",["!=","user_visible",!1],["==","active","false"],["==","$type","Polygon"],["!=","mode","static"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":["get","user_line-color"],"line-width":2}},{id:"gl-draw-polygon-stroke-active",type:"line",filter:["all",["!=","user_visible",!1],["==","active","true"],["==","$type","Polygon"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":["get","user_line-color"],"line-dasharray":[.2,2],"line-width":2}},{id:"gl-draw-line-inactive",type:"line",filter:["all",["!=","user_visible",!1],["==","active","false"],["==","$type","LineString"],["!=","mode","static"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":["get","user_line-color"],"line-width":["get","user_line-width"],"line-opacity":["get","user_opacity"]}},{id:"gl-draw-line-active",type:"line",filter:["all",["!=","user_visible",!1],["==","$type","LineString"],["==","active","true"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-dasharray":[.2,2],"line-color":["get","user_line-color"],"line-width":5,"line-opacity":1}},{id:"gl-draw-polygon-and-line-vertex-stroke-inactive",type:"circle",filter:["all",["!=","user_visible",!1],["==","meta","vertex"],["==","$type","Point"],["!=","mode","static"]],paint:{"circle-radius":5,"circle-color":"#fff"}},{id:"gl-draw-polygon-and-line-vertex-inactive",type:"circle",filter:["all",["!=","user_visible",!1],["==","meta","vertex"],["==","$type","Point"],["!=","mode","static"]],paint:{"circle-radius":3,"circle-color":"#fbb03b"}},{id:"gl-draw-point-point-stroke-inactive",type:"circle",filter:["all",["!=","user_visible",!1],["!has","user_display-type"],["==","active","false"],["==","$type","Point"],["==","meta","feature"],["!=","mode","static"]],paint:{"circle-radius":5,"circle-opacity":1,"circle-color":"#fff"}},{id:"gl-draw-point-inactive",type:"circle",filter:["all",["!=","user_visible",!1],["!has","user_display-type"],["==","active","false"],["==","$type","Point"],["==","meta","feature"],["!=","mode","static"]],paint:{"circle-radius":3,"circle-color":"#3bb2d0"}},{id:"gl-draw-point-stroke-active",type:"circle",filter:["all",["!=","user_visible",!1],["==","$type","Point"],["==","active","true"],["!=","meta","midpoint"]],paint:{"circle-radius":7,"circle-color":"#fff"}},{id:"gl-draw-point-active",type:"circle",filter:["all",["!=","user_visible",!1],["==","$type","Point"],["!=","meta","midpoint"],["==","active","true"]],paint:{"circle-radius":5,"circle-color":"#fbb03b"}},{id:"gl-draw-polygon-fill-static",type:"fill",filter:["all",["!=","user_visible",!1],["==","mode","static"],["==","$type","Polygon"]],paint:{"fill-color":"#404040","fill-outline-color":"#404040","fill-opacity":.1}},{id:"gl-draw-polygon-stroke-static",type:"line",filter:["all",["!=","user_visible",!1],["==","mode","static"],["==","$type","Polygon"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#404040","line-width":2}},{id:"gl-draw-line-static",type:"line",filter:["all",["!=","user_visible",!1],["==","mode","static"],["==","$type","LineString"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#404040","line-width":2}},{id:"gl-draw-point-static",type:"circle",filter:["all",["!=","user_visible",!1],["==","mode","static"],["==","$type","Point"]],paint:{"circle-radius":5,"circle-color":"#404040"}}],h={class:"actions"},$={class:"map-container black"},M=s({__name:"demo",setup(A){const e=c("");let t;const a=l=>{t=new b(l,{userProperties:!0,styles:x})},r=()=>{e.value==="draw_text"?t.changeMode(e.value,{text:"Text","text-color":"white","text-size":20}):e.value==="draw_image"?t.changeMode(e.value,{imageId:"logo",imageUrl:"/logo.png"}):t.changeMode(e.value)};return(l,o)=>{const n=d("mb-map");return u(),g(y,null,[i("div",h,[o[2]||(o[2]=v(" Choose Mode： ")),_(i("select",{"onUpdate:modelValue":o[0]||(o[0]=p=>e.value=p),style:{width:"250px"},onChange:r},o[1]||(o[1]=[w('<optgroup label="文本(Text)"><option value="draw_text">文本(Text)</option></optgroup><optgroup label="线状(Line)"><option value="draw_line_string">折线(Line)</option><option value="draw_curve">曲线(Curve)</option><option value="draw_arc">弧线(Arc)</option></optgroup><optgroup label="面状(Area)"><option value="draw_polygon">多边形(Polygon)</option><option value="draw_circle">圆(Circle)</option><option value="draw_ellipse">椭圆(Ellipse)</option><option value="draw_rectangle">矩形(Rectange)</option><option value="draw_sector">扇形(Sector)</option><option value="draw_lune">弓形(Lune)</option><option value="draw_closed_curve">闭合曲面(Closed Curve)</option></optgroup><optgroup label="箭头(Arrow)"><option value="draw_fine_arrow">细直箭头(Fine Arrow)</option><option value="draw_assault_direction"> 突击方向(Assault Direction) </option><option value="draw_double_arrow">钳击(Double Arrow)</option><option value="draw_attack_arrow">进攻箭头(Attack Arrow)</option><option value="draw_tailed_attack_arrow"> 燕尾进攻箭头(Tailed Attack Arrow) </option><option value="draw_squad_combat">战斗小队(Squad Combat)</option></optgroup><optgroup label="图片(Image)"><option value="draw_image">图片(Image)</option></optgroup>',5)]),544),[[m,e.value]])]),i("div",$,[f(n,{zoom:8,center:[116.3466,39.8704],onCreated:a})])],64)}}}),C=`<template>
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
import customTheme from './custom-theme'
import type { Map } from 'mapbox-gl'

const mode = ref('')

let draw: MapboxDraw

const createdHandler = (map: Map) => {
  draw = new MapboxDraw(map, {
    userProperties: true,
    styles: customTheme,
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
`;export{C as D,M as _};
