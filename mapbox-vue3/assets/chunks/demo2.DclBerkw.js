import{d as h,p as r,B as l,o as z,c as k,j as t,G as a,w as S,t as b,a3 as M}from"./framework.BRu0xxKU.js";const $={style:{height:"500px"},class:"vw-full vh-full"},P={style:{height:"400px"}},T={style:{height:"60px",margin:"10px 0px"}},A={class:"text-muted"},B={class:"text-muted"},Z={class:"text-muted"},N=h({__name:"demo",setup(C){const m=r(),o=r([116.3466,39.8704]),u=r(8),c=r(0),p=r(0),d=r(""),f=n=>{d.value=n.coordinates},v=()=>{var n;(n=m.value)==null||n.easeTo({center:[o.value[0]+i(-1,1),o.value[1]+i(-1,1)],duration:2e3}).then(()=>{})},y=()=>{var n;(n=m.value)==null||n.flyTo({center:[i(-180,180),i(-90,90)],zoom:i(0,18)}).then(()=>{})};function i(n,e){return Math.random()*(e-n)+n}return(n,e)=>{const g=l("mb-tianditu-layer"),_=l("mb-map");return z(),k("div",$,[t("div",P,[a(_,{ref_key:"mapInst",ref:m,zoom:u.value,"onUpdate:zoom":e[0]||(e[0]=s=>u.value=s),center:o.value,"onUpdate:center":e[1]||(e[1]=s=>o.value=s),bearing:c.value,"onUpdate:bearing":e[2]||(e[2]=s=>c.value=s),pitch:p.value,"onUpdate:pitch":e[3]||(e[3]=s=>p.value=s),onMousemove:f},{default:S(()=>[t("div",{style:{position:"absolute",top:"10px",left:"10px"}},[t("button",{class:"primary mr10",onClick:v}," ease to some position "),t("button",{class:"primary",onClick:y}," fly to some position ")]),a(g)]),_:1},8,["zoom","center","bearing","pitch"]),t("div",T,[t("p",A,"center:"+b(o.value)+" zoom:"+b(u.value),1),t("p",B,"bearing:"+b(c.value)+" pitch:"+b(p.value),1),t("p",Z,"mouse position："+b(d.value),1)])])])}}}),L={style:{height:"500px"},class:"vw-full vh-full"},O={style:{height:"400px"}},U={style:{position:"absolute",top:"10px",left:"10px"}},V=h({__name:"demo2",setup(C){const m=r(),o=r([116.3466,39.8704]),u=r(10),c=r([]),p=r([]),d=r([]),f=[[116.17381,39.92155464],[116.25105956968257,40.02398993628292],[116.31591012802686,39.96769599504311]],v=[{name:"event",type:"link",url:"/mapbox-vue3/images/common_toget.png"},{name:"event2",type:"link",url:"/mapbox-vue3/images/eme_team_soc_toget.png"}],y=[{name:"event3",dir:"v",steps:3,duration:300,url:"/mapbox-vue3/images/v-steps.png"}],i=n=>{var e;(e=m.value)==null||e.reorderLayers(n)};return M(()=>{c.value=[{coordinates:[116.45346681596038,39.90085772830014],properties:{icon:"event"}},{coordinates:[...o.value],properties:{icon:"event"}}],p.value=[{coordinates:[116.46346681596,39.90085772830014],properties:{icon:"event2"}},{coordinates:[...o.value],properties:{icon:"event2"}}],d.value=[{coordinates:[116.47346681596038,39.94085772830014],properties:{icon:"event3",iconSize:.1}},{coordinates:[...o.value],properties:{icon:"event3",iconSize:.1}}]}),(n,e)=>{const g=l("mb-image-loader"),_=l("mb-image-frame-loader"),s=l("mb-tianditu-layer"),x=l("mb-symbol-layer"),D=l("mb-buffer-ellipse-layer"),w=l("mb-buffer-sector-layer"),I=l("mb-map");return z(),k("div",L,[t("div",O,[a(I,{ref_key:"mapInst",ref:m,zoom:u.value,center:o.value},{default:S(()=>[a(g,{images:v}),a(_,{images:y}),t("div",U,[t("button",{class:"primary mr10",onClick:e[0]||(e[0]=R=>i(["buffer2","s3","buffer1","s2","s1"]))}," Order：buffer2, s3, buffer1, s2, s1(top) "),t("button",{class:"primary",onClick:e[1]||(e[1]=R=>i(["s2","s3","s1","buffer2","buffer1"]))}," Order：s2, s3, s1, buffer2, buffer1(top) ")]),a(s),a(x,{id:"s1",data:c.value,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),a(D,{id:"buffer1",center:o.value,"x-semi-axis":10,"y-semi-axis":5,angle:0,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","center-radius":"6","resizer-color":"green","resizer-radius":"6","rotater-color":"black","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0},null,8,["center"]),a(x,{id:"s2",data:p.value,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],cluster:!0,spiderify:!0,"cluster-mamb-zoom":18,"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),a(x,{id:"s3",data:d.value,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),a(w,{id:"buffer2",polygon:f,radius:7,center:o.value,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0},null,8,["center"])]),_:1},8,["zoom","center"])])])}}}),j=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        ref="mapInst"
        v-model:zoom="mapZoom"
        v-model:center="mapCenter"
        v-model:bearing="bearing"
        v-model:pitch="pitch"
        @mousemove="mouseMoveHandler"
      >
        <div style="position: absolute; top: 10px; left: 10px">
          <button class="primary mr10" @click="easeToRandomPos">
            ease to some position
          </button>
          <button class="primary" @click="flyToRandomPos">
            fly to some position
          </button>
        </div>
        <mb-tianditu-layer />
      </mb-map>
      <div style="height: 60px; margin: 10px 0px">
        <p class="text-muted">center:{{ mapCenter }} zoom:{{ mapZoom }}</p>
        <p class="text-muted">bearing:{{ bearing }} pitch:{{ pitch }}</p>
        <p class="text-muted">mouse position：{{ mousePosition }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { MapInstance } from '@mapbox-vue3/core'

const mapInst = ref<MapInstance>()
const mapCenter = ref([116.3466, 39.8704])
const mapZoom = ref(8)
const bearing = ref(0)
const pitch = ref(0)
const mousePosition = ref('')

const mouseMoveHandler = (movement) => {
  mousePosition.value = movement.coordinates
}
const easeToRandomPos = () => {
  mapInst.value
    ?.easeTo({
      center: [
        mapCenter.value[0] + getRandomArbitrary(-1, 1),
        mapCenter.value[1] + getRandomArbitrary(-1, 1),
      ],
      duration: 2000,
    })
    .then(() => {
      // callback after over
    })
}
const flyToRandomPos = () => {
  mapInst.value
    ?.flyTo({
      center: [getRandomArbitrary(-180, 180), getRandomArbitrary(-90, 90)],
      zoom: getRandomArbitrary(0, 18),
    })
    .then(() => {
      // callback after over
    })
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}
<\/script>
`,E=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map ref="mapInst" :zoom="mapZoom" :center="mapCenter">
        <mb-image-loader :images="images" />
        <mb-image-frame-loader :images="images2" />
        <div style="position: absolute; top: 10px; left: 10px">
          <button
            class="primary mr10"
            @click="reorder(['buffer2', 's3', 'buffer1', 's2', 's1'])"
          >
            Order：buffer2, s3, buffer1, s2, s1(top)
          </button>
          <button
            class="primary"
            @click="reorder(['s2', 's3', 's1', 'buffer2', 'buffer1'])"
          >
            Order：s2, s3, s1, buffer2, buffer1(top)
          </button>
        </div>
        <mb-tianditu-layer />
        <mb-symbol-layer
          id="s1"
          :data="symbolDataSource"
          text-field="label"
          icon-image-field="icon"
          :icon-size="0.5"
          :text-offset="[0, -1]"
          icon-allow-overlap
          text-allow-overlap
        />
        <mb-buffer-ellipse-layer
          id="buffer1"
          :center="mapCenter"
          :x-semi-axis="10"
          :y-semi-axis="5"
          :angle="0"
          border-color="red"
          :border-opacity="0.5"
          background-color="red"
          center-color="red"
          center-radius="6"
          resizer-color="green"
          resizer-radius="6"
          rotater-color="black"
          :background-opacity="0.1"
          :closable="true"
          :countable="true"
          :draggable="true"
          :resizable="true"
          :rotatable="true"
        />
        <mb-symbol-layer
          id="s2"
          :data="symbolDataSource2"
          text-field="label"
          icon-image-field="icon"
          :icon-size="0.5"
          :text-offset="[0, -1]"
          :cluster="true"
          :spiderify="true"
          :cluster-mamb-zoom="18"
          icon-allow-overlap
          text-allow-overlap
        />
        <mb-symbol-layer
          id="s3"
          :data="symbolDataSource3"
          text-field="label"
          icon-image-field="icon"
          :icon-size="0.5"
          :text-offset="[0, -1]"
          icon-allow-overlap
          text-allow-overlap
        />
        <mb-buffer-sector-layer
          id="buffer2"
          :polygon="polygon"
          :radius="7"
          :center="mapCenter"
          border-color="red"
          :border-opacity="0.5"
          background-color="red"
          center-color="red"
          resizer-color="blue"
          :background-opacity="0.1"
          :closable="true"
          :countable="true"
          :draggable="true"
          :resizable="true"
          :rotatable="true"
        />
      </mb-map>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import type { MapInstance } from '@mapbox-vue3/core/es'

type SymbolLayerData = Array<{
  coordinates: number[]
  properties?: Record<string, any>
}>

const mapInst = ref<MapInstance>()
const mapCenter = ref([116.3466, 39.8704])
const mapZoom = ref(10)
const symbolDataSource = ref<SymbolLayerData>([])
const symbolDataSource2 = ref<SymbolLayerData>([])
const symbolDataSource3 = ref<SymbolLayerData>([])
const polygon = [
  [116.17381, 39.92155464],
  [116.25105956968257, 40.02398993628292],
  [116.31591012802686, 39.96769599504311],
]
const images = [
  {
    name: 'event',
    type: 'link',
    url: \`\${'/mapbox-vue3/'}images/common_toget.png\`,
  },
  {
    name: 'event2',
    type: 'link',
    url: \`\${'/mapbox-vue3/'}images/eme_team_soc_toget.png\`,
  },
]
const images2 = [
  {
    name: 'event3',
    dir: 'v',
    steps: 3,
    duration: 300,
    url: \`\${'/mapbox-vue3/'}images/v-steps.png\`,
  },
]

const reorder = (layerIds: string[]) => {
  mapInst.value?.reorderLayers(layerIds)
}

onBeforeMount(() => {
  symbolDataSource.value = [
    {
      coordinates: [116.45346681596038, 39.90085772830014],
      properties: {
        icon: 'event',
      },
    },
    {
      coordinates: [...mapCenter.value],
      properties: {
        icon: 'event',
      },
    },
  ]
  symbolDataSource2.value = [
    {
      coordinates: [116.46346681596, 39.90085772830014],
      properties: {
        icon: 'event2',
      },
    },
    {
      coordinates: [...mapCenter.value],
      properties: {
        icon: 'event2',
      },
    },
  ]
  symbolDataSource3.value = [
    {
      coordinates: [116.47346681596038, 39.94085772830014],
      properties: {
        icon: 'event3',
        iconSize: 0.1,
      },
    },
    {
      coordinates: [...mapCenter.value],
      properties: {
        icon: 'event3',
        iconSize: 0.1,
      },
    },
  ]
})
<\/script>
`;export{j as D,N as _,E as a,V as b};
