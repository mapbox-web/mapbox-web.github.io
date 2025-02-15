import{P as f,M as g,T as C,D as T,a as p,B as H,b as h,w as L,ar as v,as as R,at as _,h as l,V as I}from"./theme.pKS0sGWV.js";import{d as k,B as u,o as A,c as D,j as S,G as b,w as B}from"./framework.BRu0xxKU.js";const G={style:{height:"500px"},class:"vw-full vh-full"},P={style:{height:"400px"}},X=0,j=k({__name:"demo",setup(Z){const i=[116.3466,39.8704];let c;const y=e=>{c=e},x=()=>{E()},E=()=>{const e=c.mapboxgl.MercatorCoordinate.fromLngLat(i,X),a={translateX:e.x,translateY:e.y,translateZ:e.z,scale:e.meterInMercatorCoordinateUnits()},t=new f(200,200),o=new g({map:new C().load("/mapbox-vue3/images/firefox.png"),transparent:!0,side:T}),s=new p(t,o);s.name="plane";const r=new p(new H(200,200,200),new h);r.name="cube";const n=r.clone();n.material=new h,n.name="cube1",w(a,s,r,n)},w=(e,a,t,o)=>{const s={id:"3d-model",type:"custom",renderingMode:"3d",camera:null,scene:null,renderer:null,onAdd(r,n){this.camera=new L,this.scene=new v,a.translateZ(200),t.translateX(400),a.rotation.x=-Math.PI/2,this.scene.add(a),this.scene.add(t),this.scene.add(o);{const M=new R(11657727,12155424,3);this.scene.add(M)}this.renderer=new _({canvas:r.getCanvas(),context:n,antialias:!0}),this.renderer.autoClear=!1},render(r,n){const d=new l().fromArray(n),m=new l().makeTranslation(e.translateX,e.translateY,e.translateZ).scale(new I(e.scale,-e.scale,e.scale));this.camera.projectionMatrix=d.clone().multiply(m),this.camera.matrixWorldInverse=new l,this.renderer.resetState(),this.renderer.render(this.scene,this.camera)}};c.addLayer(s)};return(e,a)=>{const t=u("mb-tianditu-layer"),o=u("mb-map");return A(),D("div",G,[S("div",P,[b(o,{zoom:14,center:i,bearing:0,pitch:45,onCreated:y},{default:B(()=>[b(t,{onCreated:x})]),_:1})])])}}}),z=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map :zoom="14" :center="mapCenter" :bearing="0" :pitch="45" @created="createdHandler">
        <mb-tianditu-layer @created="add3DLayer" />
      </mb-map>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
import type { MapboxInstance } from '@mapbox-vue3/core'
import type { CustomLayerInterface } from 'mapbox-gl'

const mapCenter: [number, number] = [116.3466, 39.8704]
const altitude = 0 // height
let map: MapboxInstance

const createdHandler = (mapbox: MapboxInstance) => {
  map = mapbox
}
const add3DLayer = () => {
  loaderModels()
}
const loaderModels = () => {
  const modelAsMercatorCoordinate = map.mapboxgl.MercatorCoordinate.fromLngLat(
    mapCenter,
    altitude
  )

  // transformation parameters to position, rotate and scale the 3D model onto the map
  const modelTransform = {
    translateX: modelAsMercatorCoordinate.x,
    translateY: modelAsMercatorCoordinate.y,
    translateZ: modelAsMercatorCoordinate.z,
    /* Since our 3D model is in real world meters, a scale transform needs to be
     * applied since the CustomLayerInterface expects units in MercatorCoordinates.
     */
    scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
  }

  const geometry = new THREE.PlaneGeometry(200, 200)
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(
      \`\${'/mapbox-vue3/'}images/firefox.png\`
    ),
    transparent: true,
    // color: 0xffff00,
    side: THREE.DoubleSide,
  })
  const plane = new THREE.Mesh(geometry, material)
  plane.name = 'plane'

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(200, 200, 200),
    new THREE.MeshNormalMaterial()
  )
  cube.name = 'cube'

  const cube1 = cube.clone()
  cube1.material = new THREE.MeshNormalMaterial()
  cube1.name = 'cube1'

  addThreeLayer(modelTransform, plane, cube, cube1)
}
const addThreeLayer = (modelTransform, plane, cube, cube1) => {
  const threeLayer = {
    id: '3d-model',
    type: 'custom',
    renderingMode: '3d',
    camera: null as unknown as THREE.PerspectiveCamera,
    scene: null as unknown as THREE.Scene,
    renderer: null as unknown as THREE.WebGLRenderer,
    onAdd(map, gl) {
      this.camera = new THREE.PerspectiveCamera()
      this.scene = new THREE.Scene()

      plane.translateZ(200)
      cube.translateX(400)
      plane.rotation.x = -Math.PI / 2

      this.scene.add(plane)
      this.scene.add(cube)
      this.scene.add(cube1)

      {
        const skyColor = 0xb1e1ff // light blue
        const groundColor = 0xb97a20 // brownish orange
        const intensity = 3
        const light = new THREE.HemisphereLight(
          skyColor,
          groundColor,
          intensity
        )
        this.scene.add(light)
      }

      // use the Mapbox GL JS map canvas for three.js
      this.renderer = new THREE.WebGLRenderer({
        canvas: map.getCanvas(),
        context: gl,
        antialias: true,
      })

      this.renderer.autoClear = false
    },
    render(gl, matrix) {
      const m = new THREE.Matrix4().fromArray(matrix)
      const l = new THREE.Matrix4()
        .makeTranslation(
          modelTransform.translateX,
          modelTransform.translateY,
          modelTransform.translateZ
        )
        .scale(
          new THREE.Vector3(
            modelTransform.scale,
            -modelTransform.scale,
            modelTransform.scale
          )
        )

      this.camera.projectionMatrix = m.clone().multiply(l)
      this.camera.matrixWorldInverse = new THREE.Matrix4()
      this.renderer.resetState()

      this.renderer.render(this.scene, this.camera)
    },
  }
  map.addLayer(threeLayer as CustomLayerInterface)
}
<\/script>
`;export{z as D,j as _};
