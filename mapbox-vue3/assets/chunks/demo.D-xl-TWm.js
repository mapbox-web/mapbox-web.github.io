import{ap as m,c as g,A as f}from"./theme.pKS0sGWV.js";import{M as u,O as x}from"./MTLLoader.BGMSCDvp.js";import{d as w,B as c,o as M,c as j,j as _,G as p,w as v}from"./framework.BRu0xxKU.js";const T={style:{height:"500px"},class:"vw-full vh-full"},P={style:{height:"400px"}},H=w({__name:"demo",setup(E){const i=[116.3466,39.8704];let l;const h=a=>{l=a,L()},L=()=>{new u(new m).load("/mapbox-vue3/obj/windmill_2/windmill-fixed.mtl",r=>{r.preload();const e=new x(new m);e.setMaterials(r),e.load("/mapbox-vue3/obj/windmill_2/windmill.obj",n=>{n.traverse(t=>{t.isMesh&&t.geometry.computeVertexNormals()});const o=n;o.rotation.x=-Math.PI/2,o.rotation.y=1.4*Math.PI/5,o.scale.multiplyScalar(.5);const s=o.children[0].clone();s.rotation.x=-Math.PI/2,s.rotation.y=1.4*Math.PI/5,s.scale.multiplyScalar(.5),b(o,s)},null,null,null,!1)})},b=(a,r)=>{const e=new l.mapboxgl.supermap.ThreeLayer("threeLayer");e.on("initialized",o);let n;function o(){const s=e.getThreeRenderer(),t=e.getScene(),d=e.getCamera();n=new g(16777215,.8),n.position.copy(d.position),t.add(n),t.add(new f(16777215)),e.setPosition(a,i),e.setPosition(r,i.map(y=>y-=.0015)),a.translateY(300),t.add(a),t.add(r),s.render(t,d)}e.on("render",()=>{n&&n.position.copy(e.renderer.camera.position)}),l.addLayer(e)};return(a,r)=>{const e=c("mb-tianditu-layer"),n=c("mb-map");return M(),j("div",T,[_("div",P,[p(n,{zoom:15,center:i,bearing:0,pitch:45,onCreated:h},{default:v(()=>[p(e)]),_:1})])])}}}),B=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="15"
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
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
// @ts-ignore
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import type { MapboxInstance } from '@mapbox-vue3/core'

const mapCenter = [116.3466, 39.8704]
let map: MapboxInstance

const createdHandler = (mapbox: MapboxInstance) => {
  map = mapbox
  loaderModels()
}
const loaderModels = () => {
  const mtlLoader = new MTLLoader(new THREE.LoadingManager())

  mtlLoader.load(
    \`\${'/mapbox-vue3/'}obj/windmill_2/windmill-fixed.mtl\`,
    (materials) => {
      materials.preload()
      const objLoader = new OBJLoader(new THREE.LoadingManager())
      objLoader.setMaterials(materials)

      objLoader.load(
        \`\${'/mapbox-vue3/'}obj/windmill_2/windmill.obj\`,
        (obj) => {
          obj.traverse((child) => {
            if (child.isMesh) child.geometry.computeVertexNormals()
          })
          const meshes = obj
          meshes.rotation.x = -Math.PI / 2
          meshes.rotation.y = (1.4 * Math.PI) / 5
          meshes.scale.multiplyScalar(0.5)

          const otherObj = meshes.children[0].clone()
          otherObj.rotation.x = -Math.PI / 2
          otherObj.rotation.y = (1.4 * Math.PI) / 5
          otherObj.scale.multiplyScalar(0.5)

          addThreeLayer(meshes, otherObj)
        },
        null,
        null,
        null,
        false
      )
    }
  )
}
const addThreeLayer = (obj1, obj2) => {
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

    threeLayer.setPosition(obj1, mapCenter)
    threeLayer.setPosition(
      obj2,
      mapCenter.map((c) => (c -= 0.0015))
    )
    obj1.translateY(300)

    scene.add(obj1)
    scene.add(obj2)
    renderer.render(scene, camera)
  }

  threeLayer.on('render', () => {
    light && light.position.copy(threeLayer.renderer.camera.position)
  })
  map.addLayer(threeLayer)
}
<\/script>
`;export{B as D,H as _};
