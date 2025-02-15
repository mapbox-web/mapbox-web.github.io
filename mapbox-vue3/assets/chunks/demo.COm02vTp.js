import{P as f,M as w,T as x,D as E,a as m,B as L,b as d,c as T,A as M}from"./theme.pKS0sGWV.js";import{d as _,B as l,o as H,c as v,j as R,G as p,w as C}from"./framework.BRu0xxKU.js";const P={style:{height:"500px"},class:"vw-full vh-full"},B={style:{height:"400px"}},I=_({__name:"demo",setup(z){const s=[116.3466,39.8704];let i;const h=a=>{i=a,u()},u=()=>{const a=new f(300,300),r=new w({map:new x().load("/mapbox-vue3/images/firefox.png"),transparent:!0,side:E}),t=new m(a,r);t.rotation.x=-Math.PI/2,t.name="plane";const e=new m(new L(300,300,300),new d);e.name="cube";const n=e.clone();n.material=new d,n.name="cube1",b(t,e,n)},b=(a,r,t)=>{const e=new i.mapboxgl.supermap.ThreeLayer("threeLayer");e.on("initialized",y);let n;function y(){const g=e.getThreeRenderer(),o=e.getScene(),c=e.getCamera();n=new T(16777215,.8),n.position.copy(c.position),o.add(n),o.add(new M(16777215)),e.setPosition(a,s),e.setPosition(r,s),e.setPosition(t,s),a.translateY(340),r.translateX(800),o.add(a),o.add(r),o.add(t),g.render(o,c)}e.on("render",()=>{n&&n.position.copy(e.renderer.camera.position)}),i.addLayer(e)};return(a,r)=>{const t=l("mb-tianditu-layer"),e=l("mb-map");return H(),v("div",P,[R("div",B,[p(e,{zoom:16,center:s,bearing:0,pitch:45,onCreated:h},{default:C(()=>[p(t)]),_:1})])])}}}),N=`<template>
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
import type { MapboxInstance } from '@mapbox-vue3/core'

const mapCenter = [116.3466, 39.8704]
let map: MapboxInstance

const createdHandler = (mapbox: MapboxInstance) => {
  map = mapbox
  loaderModels()
}

const loaderModels = () => {
  const geometry = new THREE.PlaneGeometry(300, 300)
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(
      \`\${'/mapbox-vue3/'}images/firefox.png\`
    ),
    transparent: true,
    // color: 0xffff00,
    side: THREE.DoubleSide,
  })
  const plane = new THREE.Mesh(geometry, material)
  plane.rotation.x = -Math.PI / 2
  plane.name = 'plane'

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(300, 300, 300),
    new THREE.MeshNormalMaterial()
  )
  cube.name = 'cube'

  const cube1 = cube.clone()
  cube1.material = new THREE.MeshNormalMaterial()
  cube1.name = 'cube1'

  addThreeLayer(plane, cube, cube1)
}
const addThreeLayer = (plane, cube, cube1) => {
  const threeLayer = new map.mapboxgl.supermap.ThreeLayer('threeLayer')
  threeLayer.on('initialized', render)

  let light
  function render() {
    const renderer = threeLayer.getThreeRenderer(),
      scene = threeLayer.getScene(),
      camera = threeLayer.getCamera()
    // scene.background = new THREE.Color('skyblue')
    light = new THREE.PointLight(0xffffff, 0.8)
    light.position.copy(camera.position)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff))

    threeLayer.setPosition(plane, mapCenter)
    threeLayer.setPosition(cube, mapCenter)
    threeLayer.setPosition(cube1, mapCenter)

    plane.translateY(340)
    cube.translateX(800)
    scene.add(plane)
    scene.add(cube)
    scene.add(cube1)

    renderer.render(scene, camera)
  }

  // 均匀光照，与相机位置同步
  // Even lighting, synchronized with camera position
  threeLayer.on('render', () => {
    light && light.position.copy(threeLayer.renderer.camera.position)
  })
  map.addLayer(threeLayer)
}
<\/script>
`;export{N as D,I as _};
