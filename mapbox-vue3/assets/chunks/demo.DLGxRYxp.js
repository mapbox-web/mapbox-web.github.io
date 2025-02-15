import{ap as p,w,ar as T,as as E,at as v,h as m,V as j}from"./theme.pKS0sGWV.js";import{M as _,O as H}from"./MTLLoader.BGMSCDvp.js";import{d as I,B as u,o as R,c as P,j as A,G as x,w as S}from"./framework.BRu0xxKU.js";const k={style:{height:"500px"},class:"vw-full vh-full"},O={style:{height:"400px"}},M=0,Z=I({__name:"demo",setup(B){const c=[116.3466,39.8704];let d;const b=e=>{d=e},y=()=>{L()},L=()=>{const e=d.mapboxgl.MercatorCoordinate.fromLngLat(c,M),r={translateX:e.x,translateY:e.y,translateZ:e.z,scale:e.meterInMercatorCoordinateUnits()};new _(new p).load("/mapbox-vue3/obj/windmill_2/windmill-fixed.mtl",n=>{n.preload();const o=new H(new p);o.setMaterials(n),o.load("/mapbox-vue3/obj/windmill_2/windmill.obj",i=>{i.traverse(l=>{l.isMesh&&l.geometry.computeVertexNormals()});const a=i;a.scale.multiplyScalar(.15);const s=a.children[0].clone();s.scale.multiplyScalar(.2),g(r,e,a,s)},null,null,null,!1)})},g=(e,r,t,n)=>{const o={id:"3d-model",type:"custom",renderingMode:"3d",camera:null,scene:null,renderer:null,onAdd(i,a){this.camera=new w,this.scene=new T;const[s,l]=C(r,c.map(h=>h-=.0015));t.translateZ(300),n.translateX(s),n.translateY(-l),n.rotation.x=Math.PI/2,t.rotation.x=Math.PI/2,this.scene.add(t),this.scene.add(n);{const f=new E(11657727,12155424,3);this.scene.add(f)}this.renderer=new v({canvas:i.getCanvas(),context:a,antialias:!0}),this.renderer.autoClear=!1},render(i,a){const s=new m().fromArray(a),l=new m().makeTranslation(e.translateX,e.translateY,e.translateZ).scale(new j(e.scale,-e.scale,e.scale));this.camera.projectionMatrix=s.clone().multiply(l),this.camera.matrixWorldInverse=new m,this.renderer.resetState(),this.renderer.render(this.scene,this.camera)}};d.addLayer(o)},C=(e,r)=>{const t=d.mapboxgl.MercatorCoordinate.fromLngLat(r,M),n=(t.x-e.x)/e.meterInMercatorCoordinateUnits(),o=(t.y-e.y)/e.meterInMercatorCoordinateUnits();return[n,o]};return(e,r)=>{const t=u("mb-tianditu-layer"),n=u("mb-map");return R(),P("div",k,[A("div",O,[x(n,{zoom:14,center:c,bearing:0,pitch:45,onCreated:b},{default:S(()=>[x(t,{onCreated:y})]),_:1})])])}}}),G=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="14"
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
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
// @ts-ignore
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import type { MapboxInstance } from '@mapbox-vue3/core'
import type { CustomLayerInterface } from 'mapbox-gl'

const mapCenter: [number, number] = [116.3466, 39.8704]
const altitude = 0
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
          meshes.scale.multiplyScalar(0.15)

          const otherObj = meshes.children[0].clone()
          otherObj.scale.multiplyScalar(0.2)

          addThreeLayer(
            modelTransform,
            modelAsMercatorCoordinate,
            meshes,
            otherObj
          )
        },
        null,
        null,
        null,
        false
      )
    }
  )
}
const addThreeLayer = (
  modelTransform,
  modelAsMercatorCoordinate,
  obj1,
  obj2
) => {
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

      const [x, y] = getThreePoint(
        modelAsMercatorCoordinate,
        mapCenter.map((c) => (c -= 0.0015))
      )
      obj1.translateZ(300)

      obj2.translateX(x)
      obj2.translateY(-y)
      obj2.rotation.x = Math.PI / 2
      obj1.rotation.x = Math.PI / 2
      this.scene.add(obj1)
      this.scene.add(obj2)

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

      // this.map.triggerRepaint()
    },
  }
  map.addLayer(threeLayer as CustomLayerInterface)
}
const getThreePoint = (modelAsMercatorCoordinate, anotherPoint) => {
  const anotherPointModel = map.mapboxgl.MercatorCoordinate.fromLngLat(
    anotherPoint,
    altitude
  )
  const x =
    (anotherPointModel.x - modelAsMercatorCoordinate.x) /
    modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
  const y =
    (anotherPointModel.y - modelAsMercatorCoordinate.y) /
    modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
  return [x, y]
}
<\/script>
`;export{G as D,Z as _};
