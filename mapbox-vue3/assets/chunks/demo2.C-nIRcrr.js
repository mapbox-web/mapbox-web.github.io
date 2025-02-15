import{d as u,p as y,h as w,B as t,o as _,c as h,G as n,w as b,j as d,v as x}from"./framework.BRu0xxKU.js";const C={style:{height:"400px"},class:"vw-full vh-full"},g={style:{position:"absolute",top:"5px",left:"5px"}},q=u({__name:"demo",setup(v){const e=["rgba(255,125,0,0.5)","#ec71a9","red"],o=y(0),s=[{coordinates:[[137.4609375,39.639537564366684],[136.7578125,49.38237278700955],[126.5625,54.77534585936447],[103.35937499999999,53.9560855309879],[83.3203125,47.040182144806664],[66.796875,34.59704151614417],[73.47656249999999,21.94304553343818],[87.5390625,11.178401873711785],[105.1171875,8.754794702435618],[115.6640625,13.581920900545844],[114.9609375,25.48295117535531],[93.8671875,25.799891182088334],[85.4296875,31.653381399664],[91.0546875,39.095962936305476],[104.765625,41.50857729743935],[114.9609375,41.50857729743935],[121.28906250000001,37.71859032558816],[127.265625,32.84267363195431],[130.78125,28.92163128242129]]},{coordinates:[[47.8125,-24.846565348219734],[183.1640625,-19.642587534013032],[176.48437499999997,70.02058730174062],[33.046875,67.60922060496382],[33.046875,-22.91792293614603],[31.9921875,-26.11598592533351]]}],r=w(()=>e[o.value%e.length]);return(m,a)=>{const c=t("mb-tianditu-layer"),l=t("mb-polyline-layer"),i=t("mb-map");return _(),h("div",C,[n(i,null,{default:b(()=>[d("div",g,[d("button",{class:"primary",onClick:a[0]||(a[0]=p=>o.value++)},"Switch Color")]),n(c),n(l,{data:s,width:3,color:r.value,"dash-array":[2,1]},null,8,["color"])]),_:1})])}}}),I=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map>
      <div style="position: absolute; top: 5px; left: 5px">
        <button class="primary" @click="colorIndex++">Switch Color</button>
      </div>
      <mb-tianditu-layer />
      <mb-polyline-layer
        :data="polylineCoordinates"
        :width="3"
        :color="color"
        :dash-array="[2, 1]"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const colors = ['rgba(255,125,0,0.5)', '#ec71a9', 'red']
const colorIndex = ref(0)
const polylineCoordinates = [
  {
    coordinates: [
      [137.4609375, 39.639537564366684],
      [136.7578125, 49.38237278700955],
      [126.5625, 54.77534585936447],
      [103.35937499999999, 53.9560855309879],
      [83.3203125, 47.040182144806664],
      [66.796875, 34.59704151614417],
      [73.47656249999999, 21.94304553343818],
      [87.5390625, 11.178401873711785],
      [105.1171875, 8.754794702435618],
      [115.6640625, 13.581920900545844],
      [114.9609375, 25.48295117535531],
      [93.8671875, 25.799891182088334],
      [85.4296875, 31.653381399664],
      [91.0546875, 39.095962936305476],
      [104.765625, 41.50857729743935],
      [114.9609375, 41.50857729743935],
      [121.28906250000001, 37.71859032558816],
      [127.265625, 32.84267363195431],
      [130.78125, 28.92163128242129],
    ],
  },
  {
    coordinates: [
      [47.8125, -24.846565348219734],
      [183.1640625, -19.642587534013032],
      [176.48437499999997, 70.02058730174062],
      [33.046875, 67.60922060496382],
      [33.046875, -22.91792293614603],
      [31.9921875, -26.11598592533351],
    ],
  },
]

const color = computed(() => colors[colorIndex.value % colors.length])
<\/script>
`,S={style:{height:"400px"},class:"vw-full vh-full"},$=u({__name:"demo2",setup(v){let e=0;const o=y([0,4,3]),s=[{coordinates:[[116.28,39.91],[116.29,39.91],[116.32,39.92],[116.33,39.91],[116.32,39.9],[116.32,39.89],[116.3,39.89],[116.29,39.89],[116.27,39.9]]}],r=[[0,4,3],[.5,4,2.5],[1,4,2],[1.5,4,1.5],[2,4,1],[2.5,4,.5],[3,4,0],[0,.5,3,3.5],[0,1,3,3],[0,1.5,3,2.5],[0,2,3,2],[0,2.5,3,1.5],[0,3,3,1],[0,3.5,3,.5]],m=()=>{a(0)},a=c=>{const l=Number.parseInt(`${c/50%r.length}`);l!==e&&(o.value=r[e],e=l),requestAnimationFrame(a)};return x(()=>{m()}),(c,l)=>{const i=t("mb-tianditu-layer"),p=t("mb-polyline-layer"),f=t("mb-map");return _(),h("div",S,[n(f,{center:[116.33,39.91],zoom:12},{default:b(()=>[n(i),n(p,{data:s,width:6,color:"blue"}),n(p,{data:s,width:6,color:"yellow","dash-array":o.value},null,8,["dash-array"])]),_:1})])}}}),k=`<template>
  <div style="height: 400px" class="vw-full vh-full">
    <mb-map :center="[116.33, 39.91]" :zoom="12">
      <mb-tianditu-layer />
      <mb-polyline-layer :data="polylineCoordinates" :width="6" color="blue" />
      <mb-polyline-layer
        :data="polylineCoordinates"
        :width="6"
        color="yellow"
        :dash-array="dashArray"
      />
    </mb-map>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

let step = 0
const dashArray = ref([0, 4, 3])
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
const dashArraySequence = [
  [0, 4, 3],
  [0.5, 4, 2.5],
  [1, 4, 2],
  [1.5, 4, 1.5],
  [2, 4, 1],
  [2.5, 4, 0.5],
  [3, 4, 0],
  [0, 0.5, 3, 3.5],
  [0, 1, 3, 3],
  [0, 1.5, 3, 2.5],
  [0, 2, 3, 2],
  [0, 2.5, 3, 1.5],
  [0, 3, 3, 1],
  [0, 3.5, 3, 0.5],
]

const start = () => {
  animate(0)
}
const animate = (timestamp: number) => {
  const newStep = Number.parseInt(
    \`\${(timestamp / 50) % dashArraySequence.length}\`
  )

  if (newStep !== step) {
    dashArray.value = dashArraySequence[step]
    step = newStep
  }
  requestAnimationFrame(animate)
}

onMounted(() => {
  start()
})
<\/script>
`;export{I as D,q as _,k as a,$ as b};
