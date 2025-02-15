import{d as g,p as u,v as S,B as s,o as y,c as f,j as d,G as i,w as _,t as x,F as M,C as z,b as k}from"./framework.BRu0xxKU.js";import{b as A}from"./index.BPO1bIjo.js";import{p as w}from"./index.B0YS06CC.js";const G="/mapbox-vue3/images/symbol-layer.png",R={style:{height:"500px"}},H={style:{height:"400px"}},I={style:{height:"60px",margin:"10px 10px"}},N={class:"text-muted"},L={class:"text-muted"},T=3.5,U=g({__name:"demo1",setup(v){const m=u([]),e=u(""),t=u(""),n=u({}),l=[107.5,37.5];function o(r,c){return Math.random()*(c-r)+r}const p=r=>{r.rotateTo(180,{duration:1e4})},a=r=>{e.value=r.coordinates[0],t.value=r.coordinates[1],n.value=r.properties},b=()=>{e.value="",t.value="",n.value={}};return S(()=>{const r=[];for(let c=0;c<2e3;c++)r.push({coordinates:[o(95,120),o(30,42)],properties:{label:`Airport-${c}`,icon:"airport-15"}});m.value=r}),(r,c)=>{const $=s("mb-tianditu-layer"),D=s("mb-symbol-layer"),C=s("mb-map");return y(),f("div",R,[d("div",H,[i(C,{zoom:T,center:l,glyphs:"/mapbox-vue3/fonts/{range}.pbf",sprite:"/mapbox-vue3/sprites/sprite",onCreated:p},{default:_(()=>[i($,{types:["vec"]}),i(D,{data:m.value,"text-field":"label","icon-image-field":"icon","text-halo-color":"#9e9e9e","text-halo-width":1,"text-offset":[0,-1],cluster:!1,onMousemove:a,onMouseleave:b},null,8,["data"])]),_:1})]),d("div",I,[c[0]||(c[0]=d("p",null,"Selected Element Information：",-1)),d("p",N,"lng:"+x(e.value)+" lat:"+x(t.value),1),d("p",L,"properties："+x(JSON.stringify(n.value)),1)])])}}}),Z={style:{height:"400px"},class:"vw-full vh-full"},K=g({__name:"demo2",setup(v){const m=u([]);function e(t,n){return Math.random()*(n-t)+t}return S(()=>{const t=[];for(let n=0;n<2e3;n++)t.push({coordinates:[e(95,120),e(30,42)],properties:{label:`Airport-${n}`,icon:"airport-15"}});for(let n=0;n<13;n++)t.push({coordinates:[116.678,31.456],properties:{label:`same-${n}`,icon:"airport-15"}});m.value=t}),(t,n)=>{const l=s("mb-tianditu-layer"),o=s("mb-symbol-layer"),p=s("mb-map");return y(),f("div",Z,[i(p,{zoom:4,center:[107.5,37.5],glyphs:"/mapbox-vue3/fonts/{range}.pbf",sprite:"/mapbox-vue3/sprites/sprite"},{default:_(()=>[i(l,{types:["vec"]}),i(o,{data:m.value,"text-field":"label","icon-image-field":"icon","text-offset":[0,-1],cluster:!0,spiderify:!0},null,8,["data"])]),_:1})])}}}),B={style:{height:"400px"},class:"vw-full vh-full"},P=g({__name:"demo3",setup(v){const m=[{name:"cluster-icon",type:"link",url:"/mapbox-vue3/images/common_toget.png"},{name:"cluster-icon2",type:"link",url:"/mapbox-vue3/images/eme_team_soc_toget.png"}],e=[{textColor:"white",textSize:12,iconName:"cluster-icon"}],t=[{textColor:"white",textSize:16,iconName:"cluster-icon2"}],n=u([]),l=u([]);return S(()=>{const o=[],p=[];for(let a=0;a<13;a++)o.push({coordinates:[116.678,31.456],properties:{label:`same-${a}`,icon:"airport-15"}}),p.push({coordinates:[113.788,31.956],properties:{label:`same2-${a}`,icon:"airport-15"}});for(let a=0;a<5;a++)o.push({coordinates:[116.688,31.456],properties:{label:`same-2-${a}`,icon:"airport-15"}}),p.push({coordinates:[113.798,31.956],properties:{label:`same-2-${a}`,icon:"airport-15"}});n.value=o,l.value=p}),(o,p)=>{const a=s("mb-tianditu-layer"),b=s("mb-image-loader"),r=s("mb-symbol-layer"),c=s("mb-map");return y(),f("div",B,[i(c,{zoom:5,center:[116.678,31.456],glyphs:"/mapbox-vue3/fonts/{range}.pbf",sprite:"/mapbox-vue3/sprites/sprite"},{default:_(()=>[i(a,{types:["vec"]}),i(b,{images:m}),i(r,{data:n.value,"text-field":"label","icon-image-field":"icon","cluster-icons":e,"cluster-icon-size":.5,"cluster-icon-offset":[1,5],cluster:!0,spiderify:!0},null,8,["data"]),i(r,{data:l.value,"text-field":"label","icon-image-field":"icon","cluster-icons":t,"cluster-icon-size":.5,"cluster-icon-offset":[1,45],cluster:!0,spiderify:!0},null,8,["data"])]),_:1})])}}}),E={style:{height:"400px"},class:"vw-full vh-full"},h=9,Q=g({__name:"demo4",setup(v){const m=[{name:"cluster-icon",type:"link",url:"/mapbox-vue3/images/common_toget.png"},{name:"cluster-icon2",type:"link",url:"/mapbox-vue3/images/eme_team_soc_toget.png"}];let e=0;const t=[{coordinates:[[116.28,39.91],[116.29,39.91],[116.32,39.92],[116.33,39.91],[116.32,39.9],[116.32,39.89],[116.3,39.89],[116.29,39.89],[116.27,39.9]]}],n=u([{coordinates:[116.28,39.91],properties:{label:"",icon:"cluster-icon",iconSize:.5,bearing:0}}]),l=()=>{e=0,o()},o=()=>{const p=t[0].coordinates[e>=h?e-1:e],a=t[0].coordinates[e>=h?e:e+1];if(!p||!a||e>h){e=0;return}n.value[0].coordinates=t[0].coordinates[e],n.value[0].properties.bearing=A(w(p),w(a)),e<h&&window.setTimeout(o,1500),e++};return(p,a)=>{const b=s("mb-tianditu-layer"),r=s("mb-image-loader"),c=s("mb-polyline-layer"),$=s("mb-symbol-layer"),D=s("mb-map");return y(),f("div",E,[i(D,{zoom:11,center:[116.32,39.9],glyphs:"/mapbox-vue3/fonts/{range}.pbf",sprite:"/mapbox-vue3/sprites/sprite"},{default:_(()=>[d("div",{style:{position:"absolute",top:"5px",left:"5px"}},[d("button",{class:"primary",onClick:l},"Restart")]),i(b,{types:["vec"]}),i(r,{images:m}),i(c,{data:t,width:3,color:"blue"}),i($,{data:n.value,"icon-image-field":"icon","icon-anchor":"center","icon-size":.5,"icon-rotation-alignment":"map","icon-allow-overlap":"","icon-rotate":["get","bearing"],"icon-ignore-placement":""},null,8,["data"])]),_:1})])}}}),F={style:{height:"400px"}},q={style:{padding:"4px","background-color":"white","box-shadow":"10px 5px 10px grey"}},J=3.5,W=g({__name:"demo5",setup(v){const m=u([]),e=[107.5,37.5];function t(l,o){return Math.random()*(o-l)+l}const n=l=>{l.rotateTo(180,{duration:1e4})};return S(()=>{const l=[];for(let o=0;o<10;o++)l.push({coordinates:[t(95,120),t(30,42)],properties:{id:String(Math.random()),label:`Airport-${o}`,icon:"airport-15"}});m.value=l}),(l,o)=>{const p=s("mb-tianditu-layer"),a=s("mb-symbol-layer"),b=s("mb-map-popup"),r=s("mb-map");return y(),f("div",F,[i(r,{zoom:J,center:e,glyphs:"/mapbox-vue3/fonts/{range}.pbf",sprite:"/mapbox-vue3/sprites/sprite",onCreated:n},{default:_(()=>[i(p,{types:["vec"]}),i(a,{data:m.value,"icon-image-field":"icon",cluster:!1},null,8,["data"]),(y(!0),f(M,null,z(m.value,c=>(y(),k(b,{key:c.properties.id,coordinates:c.coordinates,offset:[0,-10],"show-tip":!1,anchor:"bottom"},{default:_(()=>[d("div",q,x(c.properties.label),1)]),_:2},1032,["coordinates"]))),128))]),_:1})])}}}),X=`<template>
  <div style="height: 500px">
    <div style="height: 400px">
      <mb-map
        :zoom="mapZoom"
        :center="mapCenter"
        :glyphs="'/mapbox-vue3/' + 'fonts/{range}.pbf'"
        :sprite="'/mapbox-vue3/' + 'sprites/sprite'"
        @created="mapCreatedHandler"
      >
        <mb-tianditu-layer :types="['vec']" />
        <mb-symbol-layer
          :data="symbolDataSource"
          text-field="label"
          icon-image-field="icon"
          text-halo-color="#9e9e9e"
          :text-halo-width="1"
          :text-offset="[0, -1]"
          :cluster="false"
          @mousemove="clickLayerHandler"
          @mouseleave="leaveLayerHandler"
        />
      </mb-map>
    </div>
    <div style="height: 60px; margin: 10px 10px">
      <p>Selected Element Information：</p>
      <p class="text-muted">lng:{{ lng }} lat:{{ lat }}</p>
      <p class="text-muted">properties：{{ JSON.stringify(properties) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Map } from 'mapbox-gl'

const symbolDataSource = ref([])
const lng = ref('')
const lat = ref('')
const properties = ref<Record<string, any>>({})
const mapCenter = [107.5, 37.5]
const mapZoom = 3.5

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}
const mapCreatedHandler = (map: Map) => {
  map.rotateTo(180, { duration: 10000 })
}
const clickLayerHandler = (payload) => {
  lng.value = payload.coordinates[0]
  lat.value = payload.coordinates[1]
  properties.value = payload.properties
}
const leaveLayerHandler = () => {
  lng.value = ''
  lat.value = ''
  properties.value = {}
}

onMounted(() => {
  const data = []
  for (let i = 0; i < 2000; i++) {
    data.push({
      coordinates: [getRandomArbitrary(95, 120), getRandomArbitrary(30, 42)],
      properties: {
        label: \`Airport-\${i}\`,
        icon: 'airport-15',
      },
    })
  }
  symbolDataSource.value = data
})
<\/script>
`,Y=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="4"
      :center="[107.5, 37.5]"
      :glyphs="'/mapbox-vue3/' + 'fonts/{range}.pbf'"
      :sprite="'/mapbox-vue3/' + 'sprites/sprite'"
    >
      <mb-tianditu-layer :types="['vec']" />
      <mb-symbol-layer
        :data="symbolDataSource"
        text-field="label"
        icon-image-field="icon"
        :text-offset="[0, -1]"
        :cluster="true"
        :spiderify="true"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const symbolDataSource = ref([])

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

onMounted(() => {
  const data = []
  for (let i = 0; i < 2000; i++) {
    data.push({
      coordinates: [getRandomArbitrary(95, 120), getRandomArbitrary(30, 42)],
      properties: {
        label: \`Airport-\${i}\`,
        icon: 'airport-15',
      },
    })
  }
  for (let i = 0; i < 13; i++) {
    data.push({
      coordinates: [116.678, 31.456],
      properties: {
        label: \`same-\${i}\`,
        icon: 'airport-15',
      },
    })
  }
  symbolDataSource.value = data
})
<\/script>
`,ee=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="5"
      :center="[116.678, 31.456]"
      :glyphs="'/mapbox-vue3/' + 'fonts/{range}.pbf'"
      :sprite="'/mapbox-vue3/' + 'sprites/sprite'"
    >
      <mb-tianditu-layer :types="['vec']" />
      <mb-image-loader :images="images" />
      <mb-symbol-layer
        :data="symbolDataSource"
        text-field="label"
        icon-image-field="icon"
        :cluster-icons="clusterIcons"
        :cluster-icon-size="0.5"
        :cluster-icon-offset="[1, 5]"
        :cluster="true"
        :spiderify="true"
      />
      <mb-symbol-layer
        :data="symbolDataSource2"
        text-field="label"
        icon-image-field="icon"
        :cluster-icons="clusterIcons2"
        :cluster-icon-size="0.5"
        :cluster-icon-offset="[1, 45]"
        :cluster="true"
        :spiderify="true"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const images = [
  {
    name: 'cluster-icon',
    type: 'link',
    url: \`\${'/mapbox-vue3/'}images/common_toget.png\`,
  },
  {
    name: 'cluster-icon2',
    type: 'link',
    url: \`\${'/mapbox-vue3/'}images/eme_team_soc_toget.png\`,
  },
]
const clusterIcons = [
  {
    textColor: 'white',
    textSize: 12,
    iconName: 'cluster-icon',
  },
]
const clusterIcons2 = [
  {
    textColor: 'white',
    textSize: 16,
    iconName: 'cluster-icon2',
  },
]
const symbolDataSource = ref([])
const symbolDataSource2 = ref([])

onMounted(() => {
  const data = [],
    data2 = []
  for (let i = 0; i < 13; i++) {
    data.push({
      coordinates: [116.678, 31.456],
      properties: {
        label: \`same-\${i}\`,
        icon: 'airport-15',
      },
    })
    data2.push({
      coordinates: [113.788, 31.956],
      properties: {
        label: \`same2-\${i}\`,
        icon: 'airport-15',
      },
    })
  }
  for (let i = 0; i < 5; i++) {
    data.push({
      coordinates: [116.688, 31.456],
      properties: {
        label: \`same-2-\${i}\`,
        icon: 'airport-15',
      },
    })
    data2.push({
      coordinates: [113.798, 31.956],
      properties: {
        label: \`same-2-\${i}\`,
        icon: 'airport-15',
      },
    })
  }
  symbolDataSource.value = data
  symbolDataSource2.value = data2
})
<\/script>
`,ne=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map
      :zoom="11"
      :center="[116.32, 39.9]"
      :glyphs="'/mapbox-vue3/' + 'fonts/{range}.pbf'"
      :sprite="'/mapbox-vue3/' + 'sprites/sprite'"
    >
      <div style="position: absolute; top: 5px; left: 5px">
        <button class="primary" @click="start">Restart</button>
      </div>
      <mb-tianditu-layer :types="['vec']" />
      <mb-image-loader :images="images" />
      <mb-polyline-layer :data="polylineCoordinates" :width="3" color="blue" />
      <mb-symbol-layer
        :data="symbolDataSource"
        icon-image-field="icon"
        icon-anchor="center"
        :icon-size="0.5"
        icon-rotation-alignment="map"
        icon-allow-overlap
        :icon-rotate="['get', 'bearing']"
        icon-ignore-placement
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as turf from '@turf/turf'

const images = [
  {
    name: 'cluster-icon',
    type: 'link',
    url: \`\${'/mapbox-vue3/'}images/common_toget.png\`,
  },
  {
    name: 'cluster-icon2',
    type: 'link',
    url: \`\${'/mapbox-vue3/'}images/eme_team_soc_toget.png\`,
  },
]
let counter = 0
const steps = 9
const polylineCoordinates = [
  {
    coordinates: [
      [116.28, 39.91],
      [116.29, 39.91],
      [116.32, 39.92],
      [116.33, 39.91],
      [116.32, 39.9],
      [116.32, 39.89],
      [116.3, 39.89],
      [116.29, 39.89],
      [116.27, 39.9],
    ],
  },
]
const symbolDataSource = ref([
  {
    coordinates: [116.28, 39.91],
    properties: {
      label: \`\`,
      icon: 'cluster-icon',
      iconSize: 0.5,
      bearing: 0,
    },
  },
])

const start = () => {
  counter = 0
  animate()
}
const animate = () => {
  const start =
    polylineCoordinates[0].coordinates[counter >= steps ? counter - 1 : counter]
  const end =
    polylineCoordinates[0].coordinates[counter >= steps ? counter : counter + 1]
  if (!start || !end || counter > steps) {
    counter = 0
    return
  }
  // Update point geometry to a new position based on counter denoting
  // the index to access the arc
  symbolDataSource.value[0].coordinates =
    polylineCoordinates[0].coordinates[counter]

  // Calculate the bearing to ensure the icon is rotated to match the route arc
  // The bearing is calculated between the current point and the next point, except
  // at the end of the arc, which uses the previous point and the current point
  symbolDataSource.value[0].properties.bearing = turf.bearing(
    turf.point(start),
    turf.point(end)
  )

  // Request the next frame of animation as long as the end has not been reached
  if (counter < steps) {
    // requestAnimationFrame(this.animate);
    window.setTimeout(animate, 1500)
  }

  counter++
}
<\/script>
`,te=`<template>
  <div style="height: 400px">
    <mb-map
      :zoom="mapZoom"
      :center="mapCenter"
      :glyphs="'/mapbox-vue3/' + 'fonts/{range}.pbf'"
      :sprite="'/mapbox-vue3/' + 'sprites/sprite'"
      @created="mapCreatedHandler"
    >
      <mb-tianditu-layer :types="['vec']" />
      <mb-symbol-layer
        :data="symbolDataSource"
        icon-image-field="icon"
        :cluster="false"
      />
      <mb-map-popup
        v-for="s in symbolDataSource"
        :key="s.properties.id"
        :coordinates="s.coordinates"
        :offset="[0, -10]"
        :show-tip="false"
        anchor="bottom"
      >
        <div
          style="
            padding: 4px;
            background-color: white;
            box-shadow: 10px 5px 10px grey;
          "
        >
          {{ s.properties.label }}
        </div>
      </mb-map-popup>
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Map } from 'mapbox-gl'

const symbolDataSource = ref([])
const mapCenter = [107.5, 37.5]
const mapZoom = 3.5

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}
const mapCreatedHandler = (map: Map) => {
  map.rotateTo(180, { duration: 10000 })
}

onMounted(() => {
  const data = []
  for (let i = 0; i < 10; i++) {
    data.push({
      coordinates: [getRandomArbitrary(95, 120), getRandomArbitrary(30, 42)],
      properties: {
        id: String(Math.random()),
        label: \`Airport-\${i}\`,
        icon: 'airport-15',
      },
    })
  }
  symbolDataSource.value = data
})
<\/script>
`;export{X as D,U as _,Y as a,K as b,ee as c,P as d,G as e,ne as f,Q as g,te as h,W as i};
