import{f as z,a as d,S as b,D as T,L as C,C as L,g as x,h as _,V as E,B as S,T as P,M as D,c as I,A as R,i as F}from"./theme.pKS0sGWV.js";import{d as H,B as m,o as q,c as k,j as B,G as p,w as V}from"./framework.BRu0xxKU.js";const c={defines:{ITERATIONS:10,OCTIVES:3},uniforms:{fireTex:{type:"t",value:null},color:{type:"c",value:null},time:{type:"f",value:0},seed:{type:"f",value:0},invModelMatrix:{type:"m4",value:null},scale:{type:"v3",value:null},noiseScale:{type:"v4",value:new z(1,2,1,.3)},magnitude:{type:"f",value:2.5},lacunarity:{type:"f",value:3},gain:{type:"f",value:.6}},vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      }`,fragmentShader:`
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 permute(vec4 x) {
       return mod289(((x*34.0)+1.0)*x);
  }
  
  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  float snoise(vec3 v)
    {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  
  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;
  
  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
  
    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
  
  // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  
  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;
  
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
  
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
  
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
  
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
  
    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
  
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
  
  //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
  
  // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
    }

    uniform vec3 color;
        uniform float time;
        uniform float seed;
        uniform mat4 invModelMatrix;
        uniform vec3 scale;
        uniform vec4 noiseScale;
        uniform float magnitude;
        uniform float lacunarity;
        uniform float gain;
        uniform sampler2D fireTex;
        varying vec3 vWorldPos;              

        float turbulence(vec3 p) {
          float sum = 0.0;
          float freq = 1.0;
          float amp = 1.0;
          for(int i = 0; i < OCTIVES; i++) {
            sum += abs(snoise(p * freq)) * amp;
            freq *= lacunarity;
            amp *= gain;
          }
          return sum;
        }

        vec4 samplerFire (vec3 p, vec4 scale) {
          vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);
          if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          p.y -= (seed + time) * scale.w;
          p *= scale.xyz;
          st.y += sqrt(st.y) * magnitude * turbulence(p);
          if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          return texture2D(fireTex, st);
        }

        vec3 localize(vec3 p) {
          return (invModelMatrix * vec4(p, 1.0)).xyz;
        }

        void main() {
          vec3 rayPos = vWorldPos;
          vec3 rayDir = normalize(rayPos - cameraPosition);
          float rayLen = 0.0288 * length(scale.xyz);
          vec4 col = vec4(0.0);
          for(int i = 0; i < ITERATIONS; i++) {
            rayPos += rayDir * rayLen;
            vec3 lp = localize(rayPos);
            lp.y += 0.5;
            lp.xz *= 2.0;
            col += samplerFire(lp, noiseScale);
          }
          col.a = col.r;
          gl_FragColor = col;
        }

  `};class W extends d{constructor(r,a){const t=new b({vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,uniforms:c.uniforms,defines:c.defines,transparent:!0,depthWrite:!1,depthTest:!1,side:T});r.magFilter=r.minFilter=C,r.wrapS=r.wrapT=L,t.uniforms.fireTex.value=r,t.uniforms.color.value=a||new x(15658734),t.uniforms.invModelMatrix.value=new _,t.uniforms.scale.value=new E(1,1,1),t.uniforms.seed.value=Math.random()*19.19,super(new S(1,1,1),t)}update(r){const a=this.material.uniforms.invModelMatrix.value;this.updateMatrixWorld(),a.copy(this.matrixWorld).invert(),r!==void 0&&(this.material.uniforms.time.value+=r),this.material.uniforms.invModelMatrix.value=a,this.material.uniforms.scale.value=this.scale}}const A={style:{height:"500px"},class:"vw-full vh-full"},j={style:{height:"400px"}},G=H({__name:"demo",setup(v){const r=[116.3466,39.8704];let a,t;const y=o=>{a=o,t=new F,f()},f=()=>{const i=new P().load("/mapbox-vue3/images/fire.png"),e=new W(i),n=new d(e.geometry,new D({color:new x(16711680),wireframe:!0}));e.scale.multiplyScalar(1e3),e.rotation.z=Math.PI,e.rotation.x=Math.PI/4,n.scale.multiplyScalar(1e3),u(e,n)},u=(o,i)=>{const e=new a.mapboxgl.supermap.ThreeLayer("threeLayer");e.on("initialized",h);let n;function h(){const g=e.getThreeRenderer(),s=e.getScene(),l=e.getCamera();n=new I(16777215,.8),n.position.copy(l.position),s.add(n),s.add(new R(16777215)),e.setPosition(o,r),e.setPosition(i,r),s.add(o),function w(){const M=t.getDelta();o.update(M),g.render(s,l),requestAnimationFrame(w)}()}e.on("render",()=>{n&&n.position.copy(e.renderer.camera.position)}),a.addLayer(e)};return(o,i)=>{const e=m("mb-tianditu-layer"),n=m("mb-map");return q(),k("div",A,[B("div",j,[p(n,{zoom:16,center:r,bearing:9,pitch:45,onCreated:y},{default:V(()=>[p(e)]),_:1})])])}}}),$=`<template>
  <div style="height: 500px" class="vw-full vh-full">
    <div style="height: 400px">
      <mb-map
        :zoom="16"
        :center="mapCenter"
        :bearing="9"
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
import { FireMesh } from './firemesh'
import type { MapboxInstance } from '@mapbox-vue3/core'

const mapCenter = [116.3466, 39.8704]
let map: MapboxInstance
let clock: THREE.Clock

const createdHandler = (mapbox: MapboxInstance) => {
  map = mapbox

  clock = new THREE.Clock()
  loaderModels()
}
const loaderModels = () => {
  const loader = new THREE.TextureLoader()

  const fireTex = loader.load(\`\${'/mapbox-vue3/'}images/fire.png\`)

  const fireMesh = new FireMesh(fireTex)
  const wireframe = new THREE.Mesh(
    fireMesh.geometry,
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xff0000),
      wireframe: true,
    })
  )

  fireMesh.scale.multiplyScalar(1000)
  fireMesh.rotation.z = Math.PI
  fireMesh.rotation.x = Math.PI / 4
  wireframe.scale.multiplyScalar(1000)

  addThreeLayer(fireMesh, wireframe)
}
const addThreeLayer = (fireMesh, wireframe) => {
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

    threeLayer.setPosition(fireMesh, mapCenter)
    threeLayer.setPosition(wireframe, mapCenter)

    scene.add(fireMesh)
    ;(function animate() {
      const delta = clock.getDelta()
      fireMesh.update(delta)
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
`;export{$ as D,G as _};
