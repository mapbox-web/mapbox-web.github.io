var S=Object.defineProperty;var F=(u,r,l)=>r in u?S(u,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[r]=l;var i=(u,r,l)=>F(u,typeof r!="symbol"?r+"":r,l);import{T as P,d as E,e as h,j as C,k as M,c as R,A as H}from"./theme.pKS0sGWV.js";import{d as B,B as w,o as I,c as D,j as V,G as x,w as k}from"./framework.BRu0xxKU.js";const G={style:{height:"500px"},class:"vw-full vh-full"},O={style:{height:"400px"}},W=B({__name:"demo",setup(u){const r=[116.3466,39.8704];let l;const _=d=>{l=d,v()},v=async()=>{const d=new Promise(e=>{new P().load("/mapbox-vue3/images/smoke.png",a=>{e(a)})}),[f,n]=await d.then(e=>[!0,e,null],e=>[!1,null,e]);if(!f)return;const t=new E;t.setAttribute("position",new h(new Float32Array([]),3)),t.setAttribute("a_opacity",new h(new Float32Array([]),1)),t.setAttribute("a_size",new h(new Float32Array([]),1)),t.setAttribute("a_scale",new h(new Float32Array([]),1));const g=new C({color:"#333",map:n,transparent:!0,depthWrite:!1});g.onBeforeCompile=function(e){const a=`
          attribute float a_opacity;
          attribute float a_size;
          attribute float a_scale;
          varying float v_opacity;
          void main() {
            v_opacity = a_opacity;
          `,c=`
          gl_PointSize = a_size * a_scale;
          `;e.vertexShader=e.vertexShader.replace("void main() {",a),e.vertexShader=e.vertexShader.replace("gl_PointSize = size;",c);const s=`
          varying float v_opacity;
          void main() {
        `,o=`
          gl_FragColor = vec4( outgoingLight, diffuseColor.a * v_opacity );
        `;e.fragmentShader=e.fragmentShader.replace("void main() {",s),e.fragmentShader=e.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );",o)};const y=new M(t,g),p=y.clone();y.rotation.z=Math.PI,p.rotation.z=Math.PI,p.rotation.x=-Math.PI/4,A(y,p);class b{constructor(a=10,c={x:0,y:0,z:0}){i(this,"range");i(this,"center");i(this,"life");i(this,"createTime");i(this,"updateTime");i(this,"size");i(this,"opacityFactor");i(this,"opacity");i(this,"scaleFactor");i(this,"scale");i(this,"position");i(this,"speed");this.range=a,this.center=c,this.life=5e3,this.createTime=Date.now(),this.updateTime=Date.now(),this.size=500,this.opacityFactor=1,this.opacity=1*this.opacityFactor,this.scaleFactor=3,this.scale=1+this.scaleFactor*(this.updateTime-this.createTime)/this.life,this.position={x:Math.random()*2*this.range+this.center.x-this.range,y:this.center.y,z:Math.random()*2*this.range+this.center.z-this.range};let s=Math.random()*40;s<20&&(s-=50),s>20&&(s+=10),this.speed={x:s,y:Math.random()*100+300,z:s}}update(){const a=Date.now(),c=a-this.updateTime;this.position.x+=this.speed.x*c/1e3,this.position.y+=this.speed.y*c/1e3,this.position.z+=this.speed.z*c/1e3,this.opacity=1-(a-this.createTime)/this.life,this.opacity*=this.opacityFactor,this.opacity<0&&(this.opacity=0),this.scale=1+this.scaleFactor*(a-this.createTime)/this.life,this.scale>1+this.scaleFactor&&(this.scale=1+this.scaleFactor),this.updateTime=a}}let m=[];setInterval(()=>{m.push(new b(10,{x:0,y:100,z:0}))},500),setInterval(()=>{if(m=m.filter(o=>(o.update(),!(o.updateTime-o.createTime>o.life))),!m.length)return;const e=[],a=[],c=[],s=[];m.forEach(o=>{const{x:T,y:z,z:L}=o.position;e.push(T,z,L),a.push(o.opacity),c.push(o.scale),s.push(o.size)}),t.setAttribute("position",new h(new Float32Array(e),3)),t.setAttribute("a_opacity",new h(new Float32Array(a),1)),t.setAttribute("a_scale",new h(new Float32Array(c),1)),t.setAttribute("a_size",new h(new Float32Array(s),1))},20)},A=(d,f)=>{const n=new l.mapboxgl.supermap.ThreeLayer("threeLayer");n.on("initialized",g);let t;function g(){const y=n.getThreeRenderer(),p=n.getScene(),b=n.getCamera();t=new R(16777215,.8),t.position.copy(b.position),p.add(t),p.add(new H(16777215)),n.setPosition(d,r),n.setPosition(f,[r[0]+.002,r[1]]),p.add(d),p.add(f),function m(){y.render(p,b),requestAnimationFrame(m)}()}n.on("render",()=>{t&&t.position.copy(n.renderer.camera.position)}),l.addLayer(n)};return(d,f)=>{const n=w("mb-tianditu-layer"),t=w("mb-map");return I(),D("div",G,[V("div",O,[x(t,{zoom:16,center:r,bearing:0,pitch:45,onCreated:_},{default:k(()=>[x(n)]),_:1})])])}}}),$=`<template>
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
const loaderModels = async () => {
  const promiseStar = new Promise((resolve) => {
    new THREE.TextureLoader().load(
      \`\${'/mapbox-vue3/'}images/smoke.png\`,
      (texture) => {
        resolve(texture)
      }
    )
  })
  const [state, textureStar] = await promiseStar.then(
    (rs) => [true, rs, null],
    (err) => [false, null, err]
  )
  if (!state) return

  // 先创建一个空的缓冲几何体
  // First create an empty buffer geometry
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array([]), 3)
  ) // 一个顶点由3个坐标构成 A vertex consists of 3 coordinates
  geometry.setAttribute(
    'a_opacity',
    new THREE.BufferAttribute(new Float32Array([]), 1)
  ) // 点的透明度，用1个浮点数表示 The transparency of the point, expressed as a floating point number
  geometry.setAttribute(
    'a_size',
    new THREE.BufferAttribute(new Float32Array([]), 1)
  ) // 点的初始大小，用1个浮点数表示 The initial size of the point, expressed as a floating point number
  geometry.setAttribute(
    'a_scale',
    new THREE.BufferAttribute(new Float32Array([]), 1)
  ) // 点的放大量，用1个浮点数表示 The amount of point magnification, expressed as a floating point number

  const material = new THREE.PointsMaterial({
    color: '#333',
    map: textureStar,
    transparent: true,
    depthWrite: false,
  })

  // 修正着色器 Correction shader
  material.onBeforeCompile = function (shader) {
    const vertexShaderAttribute = \`
          attribute float a_opacity;
          attribute float a_size;
          attribute float a_scale;
          varying float v_opacity;
          void main() {
            v_opacity = a_opacity;
          \`
    const vertexShaderSize = \`
          gl_PointSize = a_size * a_scale;
          \`
    shader.vertexShader = shader.vertexShader.replace(
      'void main() {',
      vertexShaderAttribute
    )
    shader.vertexShader = shader.vertexShader.replace(
      'gl_PointSize = size;',
      vertexShaderSize
    )

    const fragmentShaderVarying = \`
          varying float v_opacity;
          void main() {
        \`
    const fragmentShaderOpacity = \`
          gl_FragColor = vec4( outgoingLight, diffuseColor.a * v_opacity );
        \`
    shader.fragmentShader = shader.fragmentShader.replace(
      'void main() {',
      fragmentShaderVarying
    )
    shader.fragmentShader = shader.fragmentShader.replace(
      'gl_FragColor = vec4( outgoingLight, diffuseColor.a );',
      fragmentShaderOpacity
    )
  }

  // 创建点，并添加进场景 Create points and add them to the scene
  const points = new THREE.Points(geometry, material)
  const points2 = points.clone()

  points.rotation.z = Math.PI
  points2.rotation.z = Math.PI
  points2.rotation.x = -Math.PI / 4
  addThreeLayer(points, points2)

  // 定义Partical类 Defining Partial Classes
  class Partical {
    range: number
    center: Record<string, number>
    life: number
    createTime: number
    updateTime: number
    size: number
    opacityFactor: number
    opacity: number
    scaleFactor: number
    scale: number
    position: Record<string, number>
    speed: Record<string, number>
    constructor(range = 10, center = { x: 0, y: 0, z: 0 }) {
      this.range = range // 粒子的分布半径 Particle distribution radius
      this.center = center // 粒子的分布中心 The distribution center of particles
      this.life = 5000 // 粒子的存活时间，毫秒 The lifetime of the particle, in milliseconds
      this.createTime = Date.now() // 粒子创建时间 Particle creation time
      this.updateTime = Date.now() // 上次更新时间 Last updated
      this.size = 500 // 粒子大小 Particle size

      // 粒子透明度，及系数 粒子透明度，及系数
      this.opacityFactor = 1
      this.opacity = 1 * this.opacityFactor

      // 粒子放大量，及放大系数 Particle amplification and amplification factor
      this.scaleFactor = 3
      this.scale =
        1 + (this.scaleFactor * (this.updateTime - this.createTime)) / this.life // 初始1，到达生命周期时为3

      // 粒子位置 Particle Position
      this.position = {
        x: Math.random() * 2 * this.range + this.center.x - this.range,
        y: this.center.y,
        z: Math.random() * 2 * this.range + this.center.z - this.range,
      }

      // 水平方向的扩散 Horizontal diffusion
      let speedAround = Math.random() * 40
      if (speedAround < 20) speedAround -= 50
      if (speedAround > 20) speedAround += 10

      // 粒子的扩散速度 The diffusion rate of particles
      this.speed = {
        x: speedAround,
        y: Math.random() * 100 + 300,
        z: speedAround,
      }
    }

    update() {
      const now = Date.now()
      const time = now - this.updateTime

      this.position.x += (this.speed.x * time) / 1000
      this.position.y += (this.speed.y * time) / 1000
      this.position.z += (this.speed.z * time) / 1000

      // 计算粒子透明度 Calculating particle transparency
      this.opacity = 1 - (now - this.createTime) / this.life
      this.opacity *= this.opacityFactor
      if (this.opacity < 0) this.opacity = 0

      // 计算放大量 Calculation magnification
      this.scale = 1 + (this.scaleFactor * (now - this.createTime)) / this.life
      if (this.scale > 1 + this.scaleFactor) this.scale = 1 + this.scaleFactor

      // 重置更新时间 Reset Update Time
      this.updateTime = now
    }
  }

  let particals: Partical[] = []
  setInterval(() => {
    particals.push(new Partical(10, { x: 0, y: 100, z: 0 }))
  }, 500)

  // 校验粒子，并更新粒子位置等数据
  // Verify particles and update particle position and other data
  setInterval(() => {
    particals = particals.filter((partical) => {
      partical.update()
      if (partical.updateTime - partical.createTime > partical.life) {
        return false
      } else {
        return true
      }
    })
    if (!particals.length) return

    // 遍历粒子,收集属性 Traverse particles and collect properties
    const positionList: number[] = []
    const opacityList: number[] = []
    const scaleList: number[] = []
    const sizeList: number[] = []
    particals.forEach((partical) => {
      const { x, y, z } = partical.position
      positionList.push(x, y, z)
      opacityList.push(partical.opacity)
      scaleList.push(partical.scale)
      sizeList.push(partical.size)
    })
    // 粒子属性写入 Particle attribute writing
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(positionList), 3)
    )
    geometry.setAttribute(
      'a_opacity',
      new THREE.BufferAttribute(new Float32Array(opacityList), 1)
    )
    geometry.setAttribute(
      'a_scale',
      new THREE.BufferAttribute(new Float32Array(scaleList), 1)
    )
    geometry.setAttribute(
      'a_size',
      new THREE.BufferAttribute(new Float32Array(sizeList), 1)
    )
  }, 20)
}
const addThreeLayer = (points, points2) => {
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

    threeLayer.setPosition(points, mapCenter)
    threeLayer.setPosition(points2, [mapCenter[0] + 0.002, mapCenter[1]])

    scene.add(points)
    scene.add(points2)
    ;(function animate() {
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
`;export{$ as D,W as _};
