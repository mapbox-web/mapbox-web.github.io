import{w as D,ar as _,as as I,at as S,h as u,V as h,d as k,e as x,T as B,R as f,M as W,D as V,a as F}from"./theme.pKS0sGWV.js";import{d as G,B as b,o as U,c as Y,j,G as w,w as z}from"./framework.BRu0xxKU.js";const N={style:{height:"500px"},class:"vw-full vh-full"},X={style:{height:"400px"}},M=0,q=G({__name:"demo",setup(Z){const g=[116.390714,39.916535];let p;const C=n=>{p=n},E=()=>{A()},A=()=>{const n=p.mapboxgl.MercatorCoordinate.fromLngLat(g,M),l={translateX:n.x,translateY:n.y,translateZ:n.z,scale:n.meterInMercatorCoordinateUnits()};T(l,n)},T=(n,l)=>{const e={id:"3d-model",type:"custom",renderingMode:"3d",camera:null,scene:null,renderer:null,onAdd(t,o){this.camera=new D,this.scene=new _;const a=[[116.385394,39.92098],[116.38591,39.911632],[116.389942,39.911565],[116.390457,39.908734],[116.392174,39.908733],[116.39226,39.911959],[116.396294,39.911894],[116.395691,39.921438],[116.385394,39.92098]].map(d=>v(l,d)).map(d=>[d[0],-d[1],0]),m=L(a);m.translateY(-200),this.scene.add(m);{const r=new I(11657727,12155424,3);this.scene.add(r)}this.renderer=new S({canvas:t.getCanvas(),context:o,antialias:!0}),this.renderer.autoClear=!1},render(t,o){const s=new u().fromArray(o),a=new u().makeTranslation(n.translateX,n.translateY,n.translateZ).scale(new h(n.scale,-n.scale,n.scale));this.camera.projectionMatrix=s.clone().multiply(a),this.camera.matrixWorldInverse=new u,this.renderer.resetState(),this.renderer.render(this.scene,this.camera)}};p.addLayer(e)},v=(n,l)=>{const e=p.mapboxgl.MercatorCoordinate.fromLngLat(l,M),t=(e.x-n.x)/n.meterInMercatorCoordinateUnits(),o=(e.y-n.y)/n.meterInMercatorCoordinateUnits();return[t,o]},L=n=>{const e=[],t=n.reduce((i,r,c)=>{let y=0;if(c>0){const H=new h(...n[c-1]),P=new h(...r);y=H.distanceTo(P)}return i+=y,e.push(i),i},0),o=new k,s=[],a=[];n.forEach((i,r)=>{if(r==0)return;const c=n[r-1];s.push(...c),a.push(e[r-1]/t,0),s.push(...i),a.push(e[r]/t,0),s.push(c[0],c[1],c[2]+500),a.push(e[r-1]/t,1),s.push(...i),a.push(e[r]/t,0),s.push(i[0],i[1],i[2]+500),a.push(e[r]/t,1),s.push(c[0],c[1],c[2]+500),a.push(e[r-1]/t,1)}),o.setAttribute("position",new x(new Float32Array(s),3)),o.setAttribute("uv",new x(new Float32Array(a),2)),o.computeVertexNormals();const m=new B().load("/mapbox-vue3/images/wall.png");m.wrapS=f,m.wrapT=f;const d=new W({color:65280,map:m,transparent:!0,opacity:.9,depthWrite:!1,side:V});return new F(o,d)};return(n,l)=>{const e=b("mb-tianditu-layer"),t=b("mb-map");return U(),Y("div",N,[j("div",X,[w(t,{zoom:13,center:g,bearing:0,pitch:45,onCreated:C},{default:z(()=>[w(e,{onCreated:E})]),_:1})])])}}}),K=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="13"
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
import type { MapboxInstance } from '@mapbox-vue3/core'
import type { CustomLayerInterface } from 'mapbox-gl'

const mapCenter: [number, number] = [116.390714, 39.916535]
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
  addThreeLayer(modelTransform, modelAsMercatorCoordinate)
}
const addThreeLayer = (modelTransform, modelAsMercatorCoordinate) => {
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

      // fence range
      const boundaryArr = [
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

      const outer = boundaryArr
        .map((b) => getThreePoint(modelAsMercatorCoordinate, b))
        .map((p) => [p[0], -p[1], 0])
      const polygonMesh = addFencing(outer)
      polygonMesh.translateY(-200)
      this.scene.add(polygonMesh)

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
const addFencing = (points: number[][]) => {
  const height = 500

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
    posArr.push(lastPoint[0], lastPoint[1], lastPoint[2] + height)
    uvArr.push(pointDistance[index - 1] / distance, 1)

    // 三角面2 triangle2
    posArr.push(...point)
    uvArr.push(pointDistance[index] / distance, 0)
    posArr.push(point[0], point[1], point[2] + height)
    uvArr.push(pointDistance[index] / distance, 1)
    posArr.push(lastPoint[0], lastPoint[1], lastPoint[2] + height)
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

  // 材质
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
`;export{K as D,q as _};
