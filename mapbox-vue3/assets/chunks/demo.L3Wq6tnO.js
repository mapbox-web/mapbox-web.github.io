import{l as g,w as b,ar as w,i as E,as as M,at as L,h as l,V as T}from"./theme.pKS0sGWV.js";import{F as v}from"./FBXLoader.D05Upb9X.js";import{d as k,B as h,o as H,c as R,j as _,G as u,w as A}from"./framework.BRu0xxKU.js";const I={style:{height:"500px"},class:"vw-full vh-full"},D={style:{height:"400px"}},S=0,G=k({__name:"demo",setup(B){const d=[116.3466,39.8704];let r,s=[];const x=e=>{r=e,s=[]},y=()=>{f()},f=()=>{const e=r.mapboxgl.MercatorCoordinate.fromLngLat(d,S),t={translateX:e.x,translateY:e.y,translateZ:e.z,scale:e.meterInMercatorCoordinateUnits()};new v().load("/mapbox-vue3/fbx/Samba Dancing.fbx",n=>{const a=new g(n);a.clipAction(n.animations[0]).play(),s.push(a),C(t,n)})},C=(e,t)=>{const o={id:"3d-model",type:"custom",renderingMode:"3d",camera:null,scene:null,renderer:null,clock:null,onAdd(n,a){this.camera=new b,this.scene=new w,this.clock=new E,t.rotation.x=Math.PI/2,this.scene.add(t);{const i=new M(11657727,12155424,3);this.scene.add(i)}this.renderer=new L({canvas:n.getCanvas(),context:a,antialias:!0}),this.renderer.autoClear=!1},render(n,a){const c=new l().fromArray(a),m=new l().makeTranslation(e.translateX,e.translateY,e.translateZ).scale(new T(e.scale,-e.scale,e.scale));this.camera.projectionMatrix=c.clone().multiply(m),this.camera.matrixWorldInverse=new l,this.renderer.resetState();const p=this.clock.getDelta();for(const i of s)i.update(p);this.renderer.render(this.scene,this.camera),r.triggerRepaint()}};r.addLayer(o)};return(e,t)=>{const o=h("mb-tianditu-layer"),n=h("mb-map");return H(),R("div",I,[_("div",D,[u(n,{zoom:16,center:d,bearing:0,pitch:45,onCreated:x},{default:A(()=>[u(o,{onCreated:y})]),_:1})])])}}}),P=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="16"
        :center="mapCenter"
        :bearing="0"
        :pitch="45"
        @created="createdHandler"
      >
        <mb-tianditu-layer @created="add3DLayer" />
      </mb-map>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
// @ts-ignore
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import type { MapboxInstance } from '@mapbox-vue3/core'
import type { CustomLayerInterface } from 'mapbox-gl'

const mapCenter: [number, number] = [116.3466, 39.8704]
const altitude = 0
let map: MapboxInstance
let mixers: THREE.AnimationMixer[] = []

const createdHandler = (mapbox: MapboxInstance) => {
  map = mapbox
  mixers = []
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

  const loader = new FBXLoader()
  loader.load(\`\${'/mapbox-vue3/'}fbx/Samba Dancing.fbx\`, (dancer) => {
    // dancer.scale.multiplyScalar(1)
    const mixer = new THREE.AnimationMixer(dancer)
    const action = mixer.clipAction(dancer.animations[0])
    action.play()

    mixers.push(mixer)

    addThreeLayer(modelTransform, dancer)
  })
}
const addThreeLayer = (modelTransform, dancer) => {
  const threeLayer = {
    id: '3d-model',
    type: 'custom',
    renderingMode: '3d',
    camera: null as unknown as THREE.PerspectiveCamera,
    scene: null as unknown as THREE.Scene,
    renderer: null as unknown as THREE.WebGLRenderer,
    clock: null as unknown as THREE.Clock,
    onAdd(map, gl) {
      this.camera = new THREE.PerspectiveCamera()
      this.scene = new THREE.Scene()
      this.clock = new THREE.Clock()

      dancer.rotation.x = Math.PI / 2
      this.scene.add(dancer)

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

      const delta = this.clock.getDelta()
      for (const mixer of mixers) {
        mixer.update(delta)
      }

      this.renderer.render(this.scene, this.camera)

      map.triggerRepaint()
    },
  }
  map.addLayer(threeLayer as CustomLayerInterface)
}
<\/script>
`;export{P as D,G as _};
