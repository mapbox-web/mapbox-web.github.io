import{d as m,B as t,o as u,c as h,G as e,w as g}from"./framework.BRu0xxKU.js";const f={style:{height:"400px"},class:"vw-full vh-full"},x=m({__name:"demo",setup(y){const i=["vec","cia"],a=[{name:"pulsing-dot-1",type:"function",functionName:"drawDynamicCircle",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-2",type:"function",functionName:"drawStaticCircle",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-3",type:"function",functionName:"drawDynamicGradientCircle",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-4",type:"function",functionName:"drawDynamicHeart",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-5",type:"custom",functionName:s}],c=[{coordinates:[115.124368,29.216049],properties:{icon:"pulsing-dot-1"}},{coordinates:[115.125368,29.218049],properties:{icon:"pulsing-dot-2"}},{coordinates:[115.126368,29.219049],properties:{icon:"pulsing-dot-3"}},{coordinates:[115.128368,29.216049],properties:{icon:"pulsing-dot-4"}},{coordinates:[115.134368,29.216049],properties:{icon:"pulsing-dot-5"}}];function s(o){return{width:50,height:50,data:new Uint8ClampedArray(50*50*4),context:null,onAdd(){const n=document.createElement("canvas");n.width=this.width,n.height=this.height,this.context=n.getContext("2d")},render(){const n=this.context;return n.clearRect(0,0,this.width,this.height),n.rect(0,0,this.width,this.height),n.fillStyle="#f00",n.strokeStyle="blue",n.lineWidth=5,n.fill(),n.stroke(),this.data=n.getImageData(0,0,this.width,this.height).data,o.triggerRepaint(),!0}}}return(o,r)=>{const n=t("mb-tianditu-layer"),l=t("mb-image-loader"),d=t("mb-symbol-layer"),p=t("mb-map");return u(),h("div",f,[e(p,{center:[115.128368,29.216049],zoom:15},{default:g(()=>[e(n,{types:i}),e(l,{images:a}),e(d,{id:"symbol",data:c,"icon-image-field":"icon","icon-rotation-alignment":"map","icon-allow-overlap":"","text-allow-overlap":""})]),_:1})])}}}),_=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[115.128368, 29.216049]" :zoom="15">
      <mb-tianditu-layer :types="tiandituTypes" />
      <mb-image-loader :images="images" />
      <mb-symbol-layer
        id="symbol"
        :data="symbolDataSource"
        icon-image-field="icon"
        icon-rotation-alignment="map"
        icon-allow-overlap
        text-allow-overlap
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import type { Map } from 'mapbox-gl'

const tiandituTypes = ['vec', 'cia']
const images = [
  {
    name: 'pulsing-dot-1',
    type: 'function',
    functionName: 'drawDynamicCircle',
    functionProps: {
      radius: 50,
      color: '#F34A4A',
    },
  },
  {
    name: 'pulsing-dot-2',
    type: 'function',
    functionName: 'drawStaticCircle',
    functionProps: {
      radius: 50,
      color: '#F34A4A',
    },
  },
  {
    name: 'pulsing-dot-3',
    type: 'function',
    functionName: 'drawDynamicGradientCircle',
    functionProps: {
      radius: 50,
      color: '#F34A4A',
    },
  },
  {
    name: 'pulsing-dot-4',
    type: 'function',
    functionName: 'drawDynamicHeart',
    functionProps: {
      radius: 50,
      color: '#F34A4A',
    },
  },
  {
    name: 'pulsing-dot-5',
    type: 'custom',
    functionName: createRectIcon,
  },
]
const symbolDataSource = [
  {
    coordinates: [115.124368, 29.216049],
    properties: {
      icon: 'pulsing-dot-1',
    },
  },
  {
    coordinates: [115.125368, 29.218049],
    properties: {
      icon: 'pulsing-dot-2',
    },
  },
  {
    coordinates: [115.126368, 29.219049],
    properties: {
      icon: 'pulsing-dot-3',
    },
  },
  {
    coordinates: [115.128368, 29.216049],
    properties: {
      icon: 'pulsing-dot-4',
    },
  },
  {
    coordinates: [115.134368, 29.216049],
    properties: {
      icon: 'pulsing-dot-5',
    },
  },
]

function createRectIcon(map: Map) {
  const size = 50
  return {
    width: size,
    height: size,
    data: new Uint8ClampedArray(size * size * 4),
    context: null as unknown as CanvasRenderingContext2D,

    onAdd() {
      const canvas = document.createElement('canvas')
      canvas.width = this.width
      canvas.height = this.height
      this.context = canvas.getContext('2d')!
    },

    render() {
      const context = this.context

      context.clearRect(0, 0, this.width, this.height)
      context.rect(0, 0, this.width, this.height)
      context.fillStyle = '#f00'
      context.strokeStyle = 'blue'
      context.lineWidth = 5
      context.fill()
      context.stroke()

      this.data = context.getImageData(0, 0, this.width, this.height).data
      map.triggerRepaint()

      return true
    },
  }
}
<\/script>
`;export{_ as D,x as _};
