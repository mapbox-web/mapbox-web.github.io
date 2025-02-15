import{l as b,c as _,A as w,i as d}from"./theme.pKS0sGWV.js";import{F as E}from"./FBXLoader.D05Upb9X.js";import{d as v,B as l,o as T,c as C,j as H,G as p,w as M}from"./framework.BRu0xxKU.js";const A={style:{height:"500px"},class:"vw-full vh-full"},R={style:{height:"400px"}},S=v({__name:"demo",setup(k){const c=[116.3466,39.8704];let o,i=[],s=new d;const h=t=>{o=t,i=[],s=new d,x()},x=()=>{new E().load("/mapbox-vue3/fbx/Samba Dancing.fbx",e=>{e.scale.multiplyScalar(4),e.rotation.x=Math.PI*1.5;const n=new b(e);n.clipAction(e.animations[0]).play(),i.push(n),f(e)})},f=t=>{const e=new o.mapboxgl.supermap.ThreeLayer("threeLayer");e.on("initialized",a);let n;function a(){const y=e.getThreeRenderer(),r=e.getScene(),m=e.getCamera();n=new _(16777215,.8),n.position.copy(m.position),r.add(n),r.add(new w(16777215)),e.setPosition(t,c),r.add(t),function g(){const u=s.getDelta();for(const L of i)L.update(u);y.render(r,m),requestAnimationFrame(g)}()}e.on("render",()=>{n&&n.position.copy(e.renderer.camera.position)}),o.addLayer(e)};return(t,e)=>{const n=l("mb-tianditu-layer"),a=l("mb-map");return T(),C("div",A,[H("div",R,[p(a,{zoom:16,center:c,bearing:0,pitch:45,onCreated:h},{default:M(()=>[p(n)]),_:1})])])}}}),D=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="16"
        :center="mapCenter"
        :bearing="0"
        :pitch="45"
        @created="createdHandler"
      >
        <mb-tianditu-layer />
      </mb-map>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
// @ts-ignore
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import type { MapboxInstance } from '@mapbox-vue3/core'

const mapCenter = [116.3466, 39.8704]
let map: MapboxInstance
let mixers: THREE.AnimationMixer[] = []
let clock = new THREE.Clock()

const createdHandler = (mapbox: MapboxInstance) => {
  map = mapbox
  mixers = []
  clock = new THREE.Clock()
  loaderModels()
}
const loaderModels = () => {
  const loader = new FBXLoader()
  loader.load(\`\${'/mapbox-vue3/'}fbx/Samba Dancing.fbx\`, (dancer) => {
    dancer.scale.multiplyScalar(4)
    dancer.rotation.x = Math.PI * 1.5
    const mixer = new THREE.AnimationMixer(dancer)
    const action = mixer.clipAction(dancer.animations[0])
    action.play()

    mixers.push(mixer)

    addThreeLayer(dancer)
  })
}
const addThreeLayer = (dancer) => {
  const threeLayer = new map.mapboxgl.supermap.ThreeLayer('threeLayer')
  threeLayer.on('initialized', render)

  let light: THREE.PointLight
  function render() {
    const renderer = threeLayer.getThreeRenderer(),
      scene = threeLayer.getScene(),
      camera = threeLayer.getCamera()

    light = new THREE.PointLight(0xffffff, 0.8)
    light.position.copy(camera.position)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff))

    threeLayer.setPosition(dancer, mapCenter)

    scene.add(dancer)
    ;(function animate() {
      const delta = clock.getDelta()
      for (const mixer of mixers) {
        mixer.update(delta)
      }
      renderer.render(scene, camera)

      requestAnimationFrame(animate)
    })()
  }

  // 均匀光照，与相机位置同步
  // Even lighting, synchronized with camera position
  threeLayer.on('render', () => {
    light && light.position.copy(threeLayer.renderer.camera.position)
  })
  map.addLayer(threeLayer)
}
<\/script>
`;export{D,S as _};
