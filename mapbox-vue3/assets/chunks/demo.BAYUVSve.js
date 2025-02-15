import{c as M,A as R,V as g,d as _,e as y,T as D,R as f,M as H,D as B,a as C}from"./theme.pKS0sGWV.js";import{d as V,B as b,o as F,c as I,j as S,G as x,w as W}from"./framework.BRu0xxKU.js";const z={style:{height:"500px"},class:"vw-full vh-full"},N={style:{height:"400px"}},j=V({__name:"demo",setup(G){const w=[116.390799,39.915876];let d;const E=o=>{d=o,T()},T=()=>{A([[116.385394,39.92098],[116.38591,39.911632],[116.389942,39.911565],[116.390457,39.908734],[116.392174,39.908733],[116.39226,39.911959],[116.396294,39.911894],[116.395691,39.921438],[116.385394,39.92098]])},A=o=>{const a=new d.mapboxgl.supermap.ThreeLayer("threeLayer");a.on("initialized",s);let e;function s(){const p=a.getThreeRenderer(),r=a.getScene(),i=a.getCamera();e=new M(16777215,.8),e.position.copy(i.position),r.add(e),r.add(new R(16777215));const h=this.getCoordinatesCenter(o),u=this.lngLatToPosition(h),l=o.map(n=>this.lngLatToPosition({lng:n[0],lat:n[1]}).sub(u)),t=P(l.map(n=>[n.x,0,n.y]));t.rotation.x=Math.PI/2,t.rotation.y=Math.PI*2.98,a.setPosition(t,[116.390714,39.916535]),r.add(t),p.render(r,i)}a.on("render",()=>{e&&e.position.copy(a.renderer.camera.position)}),d.addLayer(a)},P=o=>{const e=[],s=o.reduce((t,n,c)=>{let m=0;if(c>0){const L=new g(...o[c-1]),v=new g(...n);m=L.distanceTo(v)}return t+=m,e.push(t),t},0),p=new _,r=[],i=[];o.forEach((t,n)=>{if(n==0)return;const c=o[n-1];r.push(...c),i.push(e[n-1]/s,0),r.push(...t),i.push(e[n]/s,0),r.push(c[0],c[1]+1500,c[2]),i.push(e[n-1]/s,1),r.push(...t),i.push(e[n]/s,0),r.push(t[0],t[1]+1500,t[2]),i.push(e[n]/s,1),r.push(c[0],c[1]+1500,c[2]),i.push(e[n-1]/s,1)}),p.setAttribute("position",new y(new Float32Array(r),3)),p.setAttribute("uv",new y(new Float32Array(i),2)),p.computeVertexNormals();const h=new D().load("/mapbox-vue3/images/wall.png");h.wrapS=f,h.wrapT=f;const u=new H({color:65280,map:h,transparent:!0,opacity:.9,depthWrite:!1,side:B});return new C(p,u)};return(o,a)=>{const e=b("mb-tianditu-layer"),s=b("mb-map");return F(),I("div",z,[S("div",N,[x(s,{zoom:13,center:w,bearing:0,pitch:45,onCreated:E},{default:W(()=>[x(e)]),_:1})])])}}}),q=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="13"
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

const mapCenter = [116.390799, 39.915876]
let map: MapboxInstance

const createdHandler = (mapbox: MapboxInstance) => {
  map = mapbox
  loaderModels()
}
const loaderModels = () => {
  const boundary1 = [
    [116.385394, 39.92098],
    [116.38591, 39.911632],
    [116.389942, 39.911565],
    [116.390457, 39.908734],
    [116.392174, 39.908733],
    [116.39226, 39.911959],
    [116.396294, 39.911894],
    [116.395691, 39.921438],
    [116.385394, 39.92098],
  ]

  addThreeLayer(boundary1)
}
const addThreeLayer = (boundary1: number[][]) => {
  const threeLayer = new map.mapboxgl.supermap.ThreeLayer('threeLayer')
  threeLayer.on('initialized', render)
  let light: THREE.PointLight

  function render(this: any) {
    const renderer = threeLayer.getThreeRenderer(),
      scene = threeLayer.getScene(),
      camera = threeLayer.getCamera()

    light = new THREE.PointLight(0xffffff, 0.8)
    light.position.copy(camera.position)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff))

    const centerBoundary = this.getCoordinatesCenter(boundary1)
    const centerPoint = this.lngLatToPosition(centerBoundary)
    const outer = boundary1.map((coords) =>
      this.lngLatToPosition({
        lng: coords[0],
        lat: coords[1],
      }).sub(centerPoint)
    )

    const polygonMesh = addFencing(outer.map((p) => [p.x, 0, p.y]))
    polygonMesh.rotation.x = Math.PI / 2
    polygonMesh.rotation.y = Math.PI * 2.98

    threeLayer.setPosition(polygonMesh, [116.390714, 39.916535])

    scene.add(polygonMesh)
    renderer.render(scene, camera)
  }

  threeLayer.on('render', () => {
    light && light.position.copy(threeLayer.renderer.camera.position)
  })
  map.addLayer(threeLayer)
}
const addFencing = (points: number[][]) => {
  const height = 1500 // 高度 height
  // 围栏距离 fence distance
  const pointDistance: number[] = []
  const distance = points.reduce((totalDistance, point, index) => {
    let segmentDistance = 0
    if (index > 0) {
      const lastPoint = new THREE.Vector3(...points[index - 1])
      const currPoint = new THREE.Vector3(...point)
      segmentDistance = lastPoint.distanceTo(currPoint)
    }
    totalDistance += segmentDistance
    pointDistance.push(totalDistance)
    return totalDistance
  }, 0)

  const geometry = new THREE.BufferGeometry()
  const posArr: number[] = []
  const uvArr: number[] = []

  points.forEach((point, index) => {
    if (index == 0) return
    const lastPoint = points[index - 1]

    // 三角面1 triangle1
    posArr.push(...lastPoint)
    uvArr.push(pointDistance[index - 1] / distance, 0)
    posArr.push(...point)
    uvArr.push(pointDistance[index] / distance, 0)
    posArr.push(lastPoint[0], lastPoint[1] + height, lastPoint[2])
    uvArr.push(pointDistance[index - 1] / distance, 1)

    // 三角面2 triangle2
    posArr.push(...point)
    uvArr.push(pointDistance[index] / distance, 0)
    posArr.push(point[0], point[1] + height, point[2])
    uvArr.push(pointDistance[index] / distance, 1)
    posArr.push(lastPoint[0], lastPoint[1] + height, lastPoint[2])
    uvArr.push(pointDistance[index - 1] / distance, 1)
  })
  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(posArr), 3)
  )
  geometry.setAttribute(
    'uv',
    new THREE.BufferAttribute(new Float32Array(uvArr), 2)
  )
  geometry.computeVertexNormals()

  const texture = new THREE.TextureLoader().load(
    \`\${'/mapbox-vue3/'}images/wall.png\`
  )
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping

  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    map: texture,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}
<\/script>
`;export{q as D,j as _};
