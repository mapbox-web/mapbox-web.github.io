import{l as b,c as _,A as T,i as d}from"./theme.pKS0sGWV.js";import{G as w}from"./GLTFLoader.CPivLeHS.js";import{d as E,B as m,o as v,c as C,j as H,G as p,w as M}from"./framework.BRu0xxKU.js";const A={style:{height:"500px"},class:"vw-full vh-full"},F={style:{height:"400px"}},G=E({__name:"demo",setup(R){const s=[116.3466,39.8704];let o,i=[],c=new d;const h=t=>{o=t,i=[],c=new d,g()},g=()=>{new w().load("/mapbox-vue3/gltf/Flamingo/Flamingo.glb",e=>{const n=e.scene;n.scale.multiplyScalar(150),n.rotation.y=-1,n.rotation.x=Math.PI*1.5;const a=new b(e.scene.children[0]);a.clipAction(e.animations[0]).setDuration(1).play(),i.push(a),y(n)})},y=t=>{const e=new o.mapboxgl.supermap.ThreeLayer("threeLayer");e.on("initialized",a);let n;function a(){const f=e.getThreeRenderer(),r=e.getScene(),l=e.getCamera();n=new _(16777215,.8),n.position.copy(l.position),r.add(n),r.add(new T(16777215)),e.setPosition(t,s),t.translateY(500),r.add(t),function x(){t.rotation.y+=.01;const u=c.getDelta();for(const L of i)L.update(u);f.render(r,l),requestAnimationFrame(x)}()}e.on("render",()=>{n&&n.position.copy(e.renderer.camera.position)}),o.addLayer(e)};return(t,e)=>{const n=m("mb-tianditu-layer"),a=m("mb-map");return v(),C("div",A,[H("div",F,[p(a,{zoom:16,center:s,bearing:0,pitch:45,onCreated:h},{default:M(()=>[p(n)]),_:1})])])}}}),I=`<template>
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
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
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
  const loader = new GLTFLoader()
  loader.load(\`\${'/mapbox-vue3/'}gltf/Flamingo/Flamingo.glb\`, (gltf) => {
    const bird = gltf.scene

    bird.scale.multiplyScalar(150)
    bird.rotation.y = -1
    bird.rotation.x = Math.PI * 1.5

    const mixer = new THREE.AnimationMixer(gltf.scene.children[0])
    mixer.clipAction(gltf.animations[0]).setDuration(1).play()
    mixers.push(mixer)

    addThreeLayer(bird)
  })
}
const addThreeLayer = (bird) => {
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

    threeLayer.setPosition(bird, mapCenter)
    bird.translateY(500)

    scene.add(bird)
    ;(function animate() {
      bird.rotation.y += 0.01

      const delta = clock.getDelta()
      for (const mixer of mixers) {
        mixer.update(delta)
      }
      renderer.render(scene, camera)

      requestAnimationFrame(animate)
    })()
  }

  threeLayer.on('render', () => {
    light && light.position.copy(threeLayer.renderer.camera.position)
  })
  map.addLayer(threeLayer)
}
<\/script>
`;export{I as D,G as _};
