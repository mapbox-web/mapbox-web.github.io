import{l as f,w as C,ar as w,i as E,as as L,at as M,h as c,V as T}from"./theme.pKS0sGWV.js";import{G as v}from"./GLTFLoader.CPivLeHS.js";import{d as k,B as h,o as H,c as R,j as _,G as u,w as A}from"./framework.BRu0xxKU.js";const I={style:{height:"500px"},class:"vw-full vh-full"},D={style:{height:"400px"}},G=0,V=k({__name:"demo",setup(S){const d=[116.3466,39.8704];let r,i=[];const x=e=>{r=e,i=[]},g=()=>{y()},y=()=>{const e=r.mapboxgl.MercatorCoordinate.fromLngLat(d,G),o={translateX:e.x,translateY:e.y,translateZ:e.z,scale:e.meterInMercatorCoordinateUnits()};new v().load("/mapbox-vue3/gltf/Flamingo/Flamingo.glb",n=>{const t=n.scene;t.scale.multiplyScalar(80),t.rotation.y=-1,t.rotation.x=Math.PI/2;const a=new f(n.scene.children[0]);a.clipAction(n.animations[0]).setDuration(1).play(),i.push(a),b(o,t)})},b=(e,o)=>{const s={id:"3d-model",type:"custom",renderingMode:"3d",camera:null,scene:null,renderer:null,clock:null,onAdd(n,t){this.camera=new C,this.scene=new w,this.clock=new E,this.scene.add(o);{const l=new L(11657727,12155424,3);this.scene.add(l)}this.renderer=new M({canvas:n.getCanvas(),context:t,antialias:!0}),this.renderer.autoClear=!1},render(n,t){const a=new c().fromArray(t),m=new c().makeTranslation(e.translateX,e.translateY,e.translateZ).scale(new T(e.scale,-e.scale,e.scale));this.camera.projectionMatrix=a.clone().multiply(m),this.camera.matrixWorldInverse=new c,this.renderer.resetState();const p=this.clock.getDelta();for(const l of i)l.update(p);this.renderer.render(this.scene,this.camera),r.triggerRepaint()}};r.addLayer(s)};return(e,o)=>{const s=h("mb-tianditu-layer"),n=h("mb-map");return H(),R("div",I,[_("div",D,[u(n,{zoom:15,center:d,bearing:0,pitch:45,onCreated:x},{default:A(()=>[u(s,{onCreated:g})]),_:1})])])}}}),W=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="15"
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
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
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

  const loader = new GLTFLoader()
  loader.load(\`\${'/mapbox-vue3/'}gltf/Flamingo/Flamingo.glb\`, (gltf) => {
    const bird = gltf.scene

    bird.scale.multiplyScalar(80)
    bird.rotation.y = -1
    bird.rotation.x = Math.PI / 2

    const mixer = new THREE.AnimationMixer(gltf.scene.children[0])
    mixer.clipAction(gltf.animations[0]).setDuration(1).play()
    mixers.push(mixer)

    addThreeLayer(modelTransform, bird)
  })
}
const addThreeLayer = (modelTransform, bird) => {
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

      this.scene.add(bird)

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
`;export{W as D,V as _};
