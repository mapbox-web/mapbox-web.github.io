import{_ as X,d as Gt,L as me,p as Ae,a as At,U as rt,b,G as q,m as yt,W as Ct,T as Vt,c as Ht,e as Xt,g as Wt,C as Ie,h as zt,F as kt,f as Re,i as St,j as B,k as Kt,B as V,l as It,V as Yt,w as he,r as Zt,P as Pt,A as jt}from"./path-layer.s0Kv9vne.js";import{g as De}from"./mapbox-gl-enhance.DI11R9zg.js";import{g as qt}from"./commonjsHelpers.Cpj98o6Y.js";var et={exports:{}};et.exports=ye;et.exports.default=ye;function ye(t,e,n){n=n||2;var i=e&&e.length,r=i?e[0]*n:t.length,o=Ft(t,0,r,n,!0),s=[];if(!o||o.next===o.prev)return s;var a,l,c,u,d,f,_;if(i&&(o=tn(t,e,o,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(var p=n;p<r;p+=n)d=t[p],f=t[p+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);_=Math.max(c-a,u-l),_=_!==0?32767/_:0}return ie(o,s,n,a,l,_,0),s}function Ft(t,e,n,i,r){var o,s;if(r===Ge(t,e,n,i)>0)for(o=e;o<n;o+=i)s=ot(o,t[o],t[o+1],s);else for(o=n-i;o>=e;o-=i)s=ot(o,t[o],t[o+1],s);return s&&Ce(s,s.next)&&(oe(s),s=s.next),s}function z(t,e){if(!t)return t;e||(e=t);var n=t,i;do if(i=!1,!n.steiner&&(Ce(n,n.next)||C(n.prev,n,n.next)===0)){if(oe(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ie(t,e,n,i,r,o,s){if(t){!s&&o&&an(t,i,r,o);for(var a=t,l,c;t.prev!==t.next;){if(l=t.prev,c=t.next,o?Jt(t,i,r,o):Qt(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),oe(t),t=c.next,a=c.next;continue}if(t=c,t===a){s?s===1?(t=$t(z(t),e,n),ie(t,e,n,i,r,o,2)):s===2&&en(t,e,n,i,r,o):ie(z(t),e,n,i,r,o,1);break}}}}function Qt(t){var e=t.prev,n=t,i=t.next;if(C(e,n,i)>=0)return!1;for(var r=e.x,o=n.x,s=i.x,a=e.y,l=n.y,c=i.y,u=r<o?r<s?r:s:o<s?o:s,d=a<l?a<c?a:c:l<c?l:c,f=r>o?r>s?r:s:o>s?o:s,_=a>l?a>c?a:c:l>c?l:c,p=i.next;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=_&&Z(r,a,o,l,s,c,p.x,p.y)&&C(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jt(t,e,n,i){var r=t.prev,o=t,s=t.next;if(C(r,o,s)>=0)return!1;for(var a=r.x,l=o.x,c=s.x,u=r.y,d=o.y,f=s.y,_=a<l?a<c?a:c:l<c?l:c,p=u<d?u<f?u:f:d<f?d:f,h=a>l?a>c?a:c:l>c?l:c,m=u>d?u>f?u:f:d>f?d:f,A=Ue(_,p,e,n,i),y=Ue(h,m,e,n,i),E=t.prevZ,v=t.nextZ;E&&E.z>=A&&v&&v.z<=y;){if(E.x>=_&&E.x<=h&&E.y>=p&&E.y<=m&&E!==r&&E!==s&&Z(a,u,l,d,c,f,E.x,E.y)&&C(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=_&&v.x<=h&&v.y>=p&&v.y<=m&&v!==r&&v!==s&&Z(a,u,l,d,c,f,v.x,v.y)&&C(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=A;){if(E.x>=_&&E.x<=h&&E.y>=p&&E.y<=m&&E!==r&&E!==s&&Z(a,u,l,d,c,f,E.x,E.y)&&C(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=y;){if(v.x>=_&&v.x<=h&&v.y>=p&&v.y<=m&&v!==r&&v!==s&&Z(a,u,l,d,c,f,v.x,v.y)&&C(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $t(t,e,n){var i=t;do{var r=i.prev,o=i.next.next;!Ce(r,o)&&Lt(r,i,i.next,o)&&re(r,o)&&re(o,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(o.i/n|0),oe(i),oe(i.next),i=t=o),i=i.next}while(i!==t);return z(i)}function en(t,e,n,i,r,o){var s=t;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&un(s,a)){var l=Nt(s,a);s=z(s,s.next),l=z(l,l.next),ie(s,e,n,i,r,o,0),ie(l,e,n,i,r,o,0);return}a=a.next}s=s.next}while(s!==t)}function tn(t,e,n,i){var r=[],o,s,a,l,c;for(o=0,s=e.length;o<s;o++)a=e[o]*i,l=o<s-1?e[o+1]*i:t.length,c=Ft(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(cn(c));for(r.sort(nn),o=0;o<r.length;o++)n=rn(r[o],n);return n}function nn(t,e){return t.x-e.x}function rn(t,e){var n=on(t,e);if(!n)return e;var i=Nt(n,t);return z(i,i.next),z(n,n.next)}function on(t,e){var n=e,i=t.x,r=t.y,o=-1/0,s;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){var a=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=i&&a>o&&(o=a,s=n.x<n.next.x?n:n.next,a===i))return s}n=n.next}while(n!==e);if(!s)return null;var l=s,c=s.x,u=s.y,d=1/0,f;n=s;do i>=n.x&&n.x>=c&&i!==n.x&&Z(r<u?i:o,r,c,u,r<u?o:i,r,n.x,n.y)&&(f=Math.abs(r-n.y)/(i-n.x),re(n,t)&&(f<d||f===d&&(n.x>s.x||n.x===s.x&&sn(s,n)))&&(s=n,d=f)),n=n.next;while(n!==l);return s}function sn(t,e){return C(t.prev,t,e.prev)<0&&C(e.next,t,t.next)<0}function an(t,e,n,i){var r=t;do r.z===0&&(r.z=Ue(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,ln(r)}function ln(t){var e,n,i,r,o,s,a,l,c=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,c*=2}while(s>1);return t}function Ue(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function cn(t){var e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Z(t,e,n,i,r,o,s,a){return(r-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(r-s)*(i-a)}function un(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!dn(t,e)&&(re(t,e)&&re(e,t)&&_n(t,e)&&(C(t.prev,t,e.prev)||C(t,e.prev,e))||Ce(t,e)&&C(t.prev,t,t.next)>0&&C(e.prev,e,e.next)>0)}function C(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ce(t,e){return t.x===e.x&&t.y===e.y}function Lt(t,e,n,i){var r=ue(C(t,e,n)),o=ue(C(t,e,i)),s=ue(C(n,i,t)),a=ue(C(n,i,e));return!!(r!==o&&s!==a||r===0&&ce(t,n,e)||o===0&&ce(t,i,e)||s===0&&ce(n,t,i)||a===0&&ce(n,e,i))}function ce(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ue(t){return t>0?1:t<0?-1:0}function dn(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Lt(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function re(t,e){return C(t.prev,t,t.next)<0?C(t,e,t.next)>=0&&C(t,t.prev,e)>=0:C(t,e,t.prev)<0||C(t,t.next,e)<0}function _n(t,e){var n=t,i=!1,r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Nt(t,e){var n=new Be(t.i,t.x,t.y),i=new Be(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function ot(t,e,n,i){var r=new Be(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function oe(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Be(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ye.deviation=function(t,e,n,i){var r=e&&e.length,o=r?e[0]*n:t.length,s=Math.abs(Ge(t,0,o,n));if(r)for(var a=0,l=e.length;a<l;a++){var c=e[a]*n,u=a<l-1?e[a+1]*n:t.length;s-=Math.abs(Ge(t,c,u,n))}var d=0;for(a=0;a<i.length;a+=3){var f=i[a]*n,_=i[a+1]*n,p=i[a+2]*n;d+=Math.abs((t[f]-t[p])*(t[_+1]-t[f+1])-(t[f]-t[_])*(t[p+1]-t[f+1]))}return s===0&&d===0?0:Math.abs((d-s)/s)};function Ge(t,e,n,i){for(var r=0,o=e,s=n-i;o<n;o+=i)r+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return r}ye.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},i=0,r=0;r<t.length;r++){for(var o=0;o<t[r].length;o++)for(var s=0;s<e;s++)n.vertices.push(t[r][o][s]);r>0&&(i+=t[r-1].length,n.holes.push(i))}return n};var fn=et.exports;const pn=qt(fn);class Q{static get componentName(){return Object.prototype.hasOwnProperty.call(this,"extensionName")?this.extensionName:""}constructor(e){X(this,"opts",void 0),e&&(this.opts=e)}equals(e){return this===e?!0:this.constructor===e.constructor&&Gt(this.opts,e.opts,1)}getShaders(e){return null}getSubLayerProps(e){const{defaultProps:n}=e.constructor,i={updateTriggers:{}};for(const r in n)if(r in this.props){const o=n[r],s=this.props[r];i[r]=s,o&&o.type==="accessor"&&(i.updateTriggers[r]=this.props.updateTriggers[r],typeof s=="function"&&(i[r]=this.getSubLayerAccessor(s)))}return i}initializeState(e,n){}updateState(e,n){}onNeedsRedraw(e){}getNeedsPickingBuffer(e){return!1}draw(e,n){}finalizeState(e,n){}}X(Q,"defaultProps",{});X(Q,"extensionName","LayerExtension");const xn=`#define SHADER_NAME scatterplot-layer-vertex-shader

attribute vec3 positions;

attribute vec3 instancePositions;
attribute vec3 instancePositions64Low;
attribute float instanceRadius;
attribute float instanceLineWidths;
attribute vec4 instanceFillColors;
attribute vec4 instanceLineColors;
attribute vec3 instancePickingColors;

uniform float opacity;
uniform float radiusScale;
uniform float radiusMinPixels;
uniform float radiusMaxPixels;
uniform float lineWidthScale;
uniform float lineWidthMinPixels;
uniform float lineWidthMaxPixels;
uniform float stroked;
uniform bool filled;
uniform bool antialiasing;
uniform bool billboard;
uniform int radiusUnits;
uniform int lineWidthUnits;

varying vec4 vFillColor;
varying vec4 vLineColor;
varying vec2 unitPosition;
varying float innerUnitRadius;
varying float outerRadiusPixels;


void main(void) {
  geometry.worldPosition = instancePositions;
  outerRadiusPixels = clamp(
    project_size_to_pixel(radiusScale * instanceRadius, radiusUnits),
    radiusMinPixels, radiusMaxPixels
  );
  float lineWidthPixels = clamp(
    project_size_to_pixel(lineWidthScale * instanceLineWidths, lineWidthUnits),
    lineWidthMinPixels, lineWidthMaxPixels
  );
  outerRadiusPixels += stroked * lineWidthPixels / 2.0;
  float edgePadding = antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
  unitPosition = edgePadding * positions.xy;
  geometry.uv = unitPosition;
  geometry.pickingColor = instancePickingColors;

  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;
  
  if (billboard) {
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
    vec3 offset = edgePadding * positions * outerRadiusPixels;
    DECKGL_FILTER_SIZE(offset, geometry);
    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
  } else {
    vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
    DECKGL_FILTER_SIZE(offset, geometry);
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  }
  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);
  DECKGL_FILTER_COLOR(vFillColor, geometry);
  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);
  DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,En=`#define SHADER_NAME scatterplot-layer-fragment-shader

precision highp float;

uniform bool filled;
uniform float stroked;
uniform bool antialiasing;

varying vec4 vFillColor;
varying vec4 vLineColor;
varying vec2 unitPosition;
varying float innerUnitRadius;
varying float outerRadiusPixels;

void main(void) {
  geometry.uv = unitPosition;

  float distToCenter = length(unitPosition) * outerRadiusPixels;
  float inCircle = antialiasing ? 
    smoothedge(distToCenter, outerRadiusPixels) : 
    step(distToCenter, outerRadiusPixels);

  if (inCircle == 0.0) {
    discard;
  }

  if (stroked > 0.5) {
    float isLine = antialiasing ? 
      smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
      step(innerUnitRadius * outerRadiusPixels, distToCenter);

    if (filled) {
      gl_FragColor = mix(vFillColor, vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      gl_FragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
    }
  } else if (!filled) {
    discard;
  } else {
    gl_FragColor = vFillColor;
  }

  gl_FragColor.a *= inCircle;
  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`,st=[0,0,0,255],vn={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:t=>t.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:st},getLineColor:{type:"accessor",value:st},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class tt extends me{getShaders(){return super.getShaders({vs:xn,fs:En,modules:[Ae,At]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(e){if(super.updateState(e),e.changeFlags.extensionsChanged){var n;const{gl:i}=this.context;(n=this.state.model)===null||n===void 0||n.delete(),this.state.model=this._getModel(i),this.getAttributeManager().invalidateAll()}}draw({uniforms:e}){const{radiusUnits:n,radiusScale:i,radiusMinPixels:r,radiusMaxPixels:o,stroked:s,filled:a,billboard:l,antialiasing:c,lineWidthUnits:u,lineWidthScale:d,lineWidthMinPixels:f,lineWidthMaxPixels:_}=this.props;this.state.model.setUniforms(e).setUniforms({stroked:s?1:0,filled:a,billboard:l,antialiasing:c,radiusUnits:rt[n],radiusScale:i,radiusMinPixels:r,radiusMaxPixels:o,lineWidthUnits:rt[u],lineWidthScale:d,lineWidthMinPixels:f,lineWidthMaxPixels:_}).draw()}_getModel(e){const n=[-1,-1,0,1,-1,0,1,1,0,-1,1,0];return new b(e,{...this.getShaders(),id:this.props.id,geometry:new q({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array(n)}}}),isInstanced:!0})}}X(tt,"defaultProps",vn);X(tt,"layerName","ScatterplotLayer");const de=Ct.CLOCKWISE,at=Ct.COUNTER_CLOCKWISE,G={isClosed:!0};function hn(t){if(t=t&&t.positions||t,!Array.isArray(t)&&!ArrayBuffer.isView(t))throw new Error("invalid polygon")}function te(t){return"positions"in t?t.positions:t}function Te(t){return"holeIndices"in t?t.holeIndices:null}function Tn(t){return Array.isArray(t[0])}function Rn(t){return t.length>=1&&t[0].length>=2&&Number.isFinite(t[0][0])}function gn(t){const e=t[0],n=t[t.length-1];return e[0]===n[0]&&e[1]===n[1]&&e[2]===n[2]}function mn(t,e,n,i){for(let r=0;r<e;r++)if(t[n+r]!==t[i-e+r])return!1;return!0}function lt(t,e,n,i,r){let o=e;const s=n.length;for(let a=0;a<s;a++)for(let l=0;l<i;l++)t[o++]=n[a][l]||0;if(!gn(n))for(let a=0;a<i;a++)t[o++]=n[0][a]||0;return G.start=e,G.end=o,G.size=i,yt(t,r,G),o}function ct(t,e,n,i,r=0,o,s){o=o||n.length;const a=o-r;if(a<=0)return e;let l=e;for(let c=0;c<a;c++)t[l++]=n[r+c];if(!mn(n,i,r,o))for(let c=0;c<i;c++)t[l++]=n[r+c];return G.start=e,G.end=l,G.size=i,yt(t,s,G),l}function An(t,e){hn(t);const n=[],i=[];if("positions"in t){const{positions:r,holeIndices:o}=t;if(o){let s=0;for(let a=0;a<=o.length;a++)s=ct(n,s,r,e,o[a-1],o[a],a===0?de:at),i.push(s);return i.pop(),{positions:n,holeIndices:i}}t=r}if(!Tn(t))return ct(n,0,t,e,0,n.length,de),n;if(!Rn(t)){let r=0;for(const[o,s]of t.entries())r=lt(n,r,s,e,o===0?de:at),i.push(r);return i.pop(),{positions:n,holeIndices:i}}return lt(n,0,t,e,de),n}function Pe(t,e,n){const i=t.length/3;let r=0;for(let o=0;o<i;o++){const s=(o+1)%i;r+=t[o*3+e]*t[s*3+n],r-=t[s*3+e]*t[o*3+n]}return Math.abs(r/2)}function ut(t,e,n,i){const r=t.length/3;for(let o=0;o<r;o++){const s=o*3,a=t[s+0],l=t[s+1],c=t[s+2];t[s+e]=a,t[s+n]=l,t[s+i]=c}}function yn(t,e,n,i){let r=Te(t);r&&(r=r.map(a=>a/e));let o=te(t);const s=i&&e===3;if(n){const a=o.length;o=o.slice();const l=[];for(let c=0;c<a;c+=e){l[0]=o[c],l[1]=o[c+1],s&&(l[2]=o[c+2]);const u=n(l);o[c]=u[0],o[c+1]=u[1],s&&(o[c+2]=u[2])}}if(s){const a=Pe(o,0,1),l=Pe(o,0,2),c=Pe(o,1,2);if(!a&&!l&&!c)return[];a>l&&a>c||(l>c?(n||(o=o.slice()),ut(o,0,2,1)):(n||(o=o.slice()),ut(o,2,0,1)))}return pn(o,r,e)}class Cn extends Vt{constructor(e){const{fp64:n,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:n?Float64Array:Float32Array},vertexValid:{type:Uint8ClampedArray,size:1},indices:{type:i,size:1}}})}get(e){const{attributes:n}=this;return e==="indices"?n.indices&&n.indices.subarray(0,this.vertexCount):n[e]}updateGeometry(e){super.updateGeometry(e);const n=this.buffers.indices;if(n)this.vertexCount=(n.value||n).length;else if(this.data&&!this.getGeometry)throw new Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){const n=An(e,this.positionSize);return this.opts.resolution?Ht(te(n),Te(n),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?Xt(te(n),Te(n),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):n}return e}getGeometrySize(e){if(dt(e)){let n=0;for(const i of e)n+=this.getGeometrySize(i);return n}return te(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,n){if(e&&dt(e))for(const i of e){const r=this.getGeometrySize(i);n.geometrySize=r,this.updateGeometryAttributes(i,n),n.vertexStart+=r,n.indexStart=this.indexStarts[n.geometryIndex+1]}else this._updateIndices(e,n),this._updatePositions(e,n),this._updateVertexValid(e,n)}_updateIndices(e,{geometryIndex:n,vertexStart:i,indexStart:r}){const{attributes:o,indexStarts:s,typedArrayManager:a}=this;let l=o.indices;if(!l||!e)return;let c=r;const u=yn(e,this.positionSize,this.opts.preproject,this.opts.full3d);l=a.allocate(l,r+u.length,{copy:!0});for(let d=0;d<u.length;d++)l[c++]=u[d]+i;s[n+1]=r+u.length,o.indices=l}_updatePositions(e,{vertexStart:n,geometrySize:i}){const{attributes:{positions:r},positionSize:o}=this;if(!r||!e)return;const s=te(e);for(let a=n,l=0;l<i;a++,l++){const c=s[l*o],u=s[l*o+1],d=o>2?s[l*o+2]:0;r[a*3]=c,r[a*3+1]=u,r[a*3+2]=d}}_updateVertexValid(e,{vertexStart:n,geometrySize:i}){const{positionSize:r}=this,o=this.attributes.vertexValid,s=e&&Te(e);if(e&&e.edgeTypes?o.set(e.edgeTypes,n):o.fill(1,n,n+i),s)for(let a=0;a<s.length;a++)o[n+s[a]/r-1]=0;o[n+i-1]=0}}function dt(t){return Array.isArray(t)&&t.length>0&&!Number.isFinite(t[0])}const Mt=`
attribute vec2 vertexPositions;
attribute float vertexValid;

uniform bool extruded;
uniform bool isWireframe;
uniform float elevationScale;
uniform float opacity;

varying vec4 vColor;

struct PolygonProps {
  vec4 fillColors;
  vec4 lineColors;
  vec3 positions;
  vec3 nextPositions;
  vec3 pickingColors;
  vec3 positions64Low;
  vec3 nextPositions64Low;
  float elevations;
};

vec3 project_offset_normal(vec3 vector) {
  if (project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project_uCommonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

void calculatePosition(PolygonProps props) {
#ifdef IS_SIDE_VERTEX
  if(vertexValid < 0.5){
    gl_Position = vec4(0.);
    return;
  }
#endif

  vec3 pos;
  vec3 pos64Low;
  vec3 normal;
  vec4 colors = isWireframe ? props.lineColors : props.fillColors;

  geometry.worldPosition = props.positions;
  geometry.worldPositionAlt = props.nextPositions;
  geometry.pickingColor = props.pickingColors;

#ifdef IS_SIDE_VERTEX
  pos = mix(props.positions, props.nextPositions, vertexPositions.x);
  pos64Low = mix(props.positions64Low, props.nextPositions64Low, vertexPositions.x);
#else
  pos = props.positions;
  pos64Low = props.positions64Low;
#endif

  if (extruded) {
    pos.z += props.elevations * vertexPositions.y * elevationScale;
  }
  gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);

  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  if (extruded) {
  #ifdef IS_SIDE_VERTEX
    normal = vec3(
      props.positions.y - props.nextPositions.y + (props.positions64Low.y - props.nextPositions64Low.y),
      props.nextPositions.x - props.positions.x + (props.nextPositions64Low.x - props.positions64Low.x),
      0.0);
    normal = project_offset_normal(normal);
  #else
    normal = project_normal(vec3(0.0, 0.0, 1.0));
  #endif
    geometry.normal = normal;
    vec3 lightColor = lighting_getLightColor(colors.rgb, project_uCameraPosition, geometry.position.xyz, normal);
    vColor = vec4(lightColor, colors.a * opacity);
  } else {
    vColor = vec4(colors.rgb, colors.a * opacity);
  }
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Sn=`#define SHADER_NAME solid-polygon-layer-vertex-shader

attribute vec3 positions;
attribute vec3 positions64Low;
attribute float elevations;
attribute vec4 fillColors;
attribute vec4 lineColors;
attribute vec3 pickingColors;

`.concat(Mt,`

void main(void) {
  PolygonProps props;

  props.positions = positions;
  props.positions64Low = positions64Low;
  props.elevations = elevations;
  props.fillColors = fillColors;
  props.lineColors = lineColors;
  props.pickingColors = pickingColors;

  calculatePosition(props);
}
`),In=`#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX


attribute vec3 instancePositions;
attribute vec3 nextPositions;
attribute vec3 instancePositions64Low;
attribute vec3 nextPositions64Low;
attribute float instanceElevations;
attribute vec4 instanceFillColors;
attribute vec4 instanceLineColors;
attribute vec3 instancePickingColors;

`.concat(Mt,`

void main(void) {
  PolygonProps props;

  #if RING_WINDING_ORDER_CW == 1
    props.positions = instancePositions;
    props.positions64Low = instancePositions64Low;
    props.nextPositions = nextPositions;
    props.nextPositions64Low = nextPositions64Low;
  #else
    props.positions = nextPositions;
    props.positions64Low = nextPositions64Low;
    props.nextPositions = instancePositions;
    props.nextPositions64Low = instancePositions64Low;
  #endif
  props.elevations = instanceElevations;
  props.fillColors = instanceFillColors;
  props.lineColors = instanceLineColors;
  props.pickingColors = instancePickingColors;

  calculatePosition(props);
}
`),Pn=`#define SHADER_NAME solid-polygon-layer-fragment-shader

precision highp float;

varying vec4 vColor;

void main(void) {
  gl_FragColor = vColor;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`,ge=[0,0,0,255],Fn={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:t=>t.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:ge},getLineColor:{type:"accessor",value:ge},material:!0},_e={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t};class k extends me{constructor(...e){super(...e),X(this,"state",void 0)}getShaders(e){return super.getShaders({vs:e==="top"?Sn:In,fs:Pn,defines:{RING_WINDING_ORDER_CW:!this.props._normalize&&this.props._windingOrder==="CCW"?0:1},modules:[Ae,Wt,At]})}get wrapLongitude(){return!1}initializeState(){const{gl:e,viewport:n}=this.context;let{coordinateSystem:i}=this.props;const{_full3d:r}=this.props;n.isGeospatial&&i===Ie.DEFAULT&&(i=Ie.LNGLAT);let o;i===Ie.LNGLAT&&(r?o=n.projectPosition.bind(n):o=n.projectFlat.bind(n)),this.setState({numInstances:0,polygonTesselator:new Cn({preproject:o,fp64:this.use64bitPositions(),IndexType:!e||zt(e,kt.ELEMENT_INDEX_UINT32)?Uint32Array:Uint16Array})});const s=this.getAttributeManager(),a=!0;s.remove(["instancePickingColors"]),s.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:a},positions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:_e,accessor:"getPolygon",update:this.calculatePositions,noAlloc:a,shaderAttributes:{positions:{vertexOffset:0,divisor:0},instancePositions:{vertexOffset:0,divisor:1},nextPositions:{vertexOffset:1,divisor:1}}},vertexValid:{size:1,divisor:1,type:5121,update:this.calculateVertexValid,noAlloc:a},elevations:{size:1,transition:_e,accessor:"getElevation",shaderAttributes:{elevations:{divisor:0},instanceElevations:{divisor:1}}},fillColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:_e,accessor:"getFillColor",defaultValue:ge,shaderAttributes:{fillColors:{divisor:0},instanceFillColors:{divisor:1}}},lineColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:_e,accessor:"getLineColor",defaultValue:ge,shaderAttributes:{lineColors:{divisor:0},instanceLineColors:{divisor:1}}},pickingColors:{size:3,type:5121,accessor:(l,{index:c,target:u})=>this.encodePickingColor(l&&l.__source?l.__source.index:c,u),shaderAttributes:{pickingColors:{divisor:0},instancePickingColors:{divisor:1}}}})}getPickingInfo(e){const n=super.getPickingInfo(e),{index:i}=n,{data:r}=this.props;return r[0]&&r[0].__source&&(n.object=r.find(o=>o.__source.index===i)),n}disablePickingIndex(e){const{data:n}=this.props;if(n[0]&&n[0].__source)for(let i=0;i<n.length;i++)n[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){const{extruded:n,filled:i,wireframe:r,elevationScale:o}=this.props,{topModel:s,sideModel:a,polygonTesselator:l}=this.state,c={...e,extruded:!!n,elevationScale:o};a&&(a.setInstanceCount(l.instanceCount-1),a.setUniforms(c),r&&(a.setDrawMode(3),a.setUniforms({isWireframe:!0}).draw()),i&&(a.setDrawMode(6),a.setUniforms({isWireframe:!1}).draw())),s&&(s.setVertexCount(l.vertexCount),s.setUniforms(c).draw())}updateState(e){super.updateState(e),this.updateGeometry(e);const{props:n,oldProps:i,changeFlags:r}=e,o=this.getAttributeManager();if(r.extensionsChanged||n.filled!==i.filled||n.extruded!==i.extruded){var a;(a=this.state.models)===null||a===void 0||a.forEach(l=>l.delete()),this.setState(this._getModels(this.context.gl)),o.invalidateAll()}}updateGeometry({props:e,oldProps:n,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){const{polygonTesselator:o}=this.state,s=e.data.attributes||{};o.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:s.getPolygon,buffers:s,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:o.instanceCount,startIndices:o.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(e){const{id:n,filled:i,extruded:r}=this.props;let o,s;if(i){const a=this.getShaders("top");a.defines.NON_INSTANCED_MODEL=1,o=new b(e,{...a,id:"".concat(n,"-top"),drawMode:4,attributes:{vertexPositions:new Float32Array([0,1])},uniforms:{isWireframe:!1,isSideVertex:!1},vertexCount:0,isIndexed:!0})}return r&&(s=new b(e,{...this.getShaders("side"),id:"".concat(n,"-side"),geometry:new q({drawMode:1,vertexCount:4,attributes:{vertexPositions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),instanceCount:0,isInstanced:1}),s.userData.excludeAttributes={indices:!0}),{models:[s,o].filter(Boolean),topModel:o,sideModel:s}}calculateIndices(e){const{polygonTesselator:n}=this.state;e.startIndices=n.indexStarts,e.value=n.get("indices")}calculatePositions(e){const{polygonTesselator:n}=this.state;e.startIndices=n.vertexStarts,e.value=n.get("positions")}calculateVertexValid(e){e.value=this.state.polygonTesselator.get("vertexValid")}}X(k,"defaultProps",Fn);X(k,"layerName","SolidPolygonLayer");const x={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,FUNC_ADD:32774,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,BLEND_COLOR:32773,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,VENDOR:7936,RENDERER:7937,VERSION:7938,IMPLEMENTATION_COLOR_READ_TYPE:35738,IMPLEMENTATION_COLOR_READ_FORMAT:35739,BROWSER_DEFAULT_WEBGL:37444,STATIC_DRAW:35044,STREAM_DRAW:35040,DYNAMIC_DRAW:35048,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,CULL_FACE:2884,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,BLEND:3042,DEPTH_TEST:2929,DITHER:3024,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,SCISSOR_TEST:3089,STENCIL_TEST:2960,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CONTEXT_LOST_WEBGL:37442,CW:2304,CCW:2305,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DOUBLE:5130,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,COMPILE_STATUS:35713,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_ATTRIBUTES:35721,ACTIVE_UNIFORMS:35718,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,ALWAYS:519,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,GEQUAL:518,NOTEQUAL:517,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,TEXTURE_WIDTH:4096,TEXTURE_HEIGHT:4097,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,READ_FRAMEBUFFER:36008,DRAW_FRAMEBUFFER:36009,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,READ_BUFFER:3074,UNPACK_ROW_LENGTH:3314,UNPACK_SKIP_ROWS:3315,UNPACK_SKIP_PIXELS:3316,PACK_ROW_LENGTH:3330,PACK_SKIP_ROWS:3331,PACK_SKIP_PIXELS:3332,TEXTURE_BINDING_3D:32874,UNPACK_SKIP_IMAGES:32877,UNPACK_IMAGE_HEIGHT:32878,MAX_3D_TEXTURE_SIZE:32883,MAX_ELEMENTS_VERTICES:33e3,MAX_ELEMENTS_INDICES:33001,MAX_TEXTURE_LOD_BIAS:34045,MAX_FRAGMENT_UNIFORM_COMPONENTS:35657,MAX_VERTEX_UNIFORM_COMPONENTS:35658,MAX_ARRAY_TEXTURE_LAYERS:35071,MIN_PROGRAM_TEXEL_OFFSET:35076,MAX_PROGRAM_TEXEL_OFFSET:35077,MAX_VARYING_COMPONENTS:35659,FRAGMENT_SHADER_DERIVATIVE_HINT:35723,RASTERIZER_DISCARD:35977,VERTEX_ARRAY_BINDING:34229,MAX_VERTEX_OUTPUT_COMPONENTS:37154,MAX_FRAGMENT_INPUT_COMPONENTS:37157,MAX_SERVER_WAIT_TIMEOUT:37137,MAX_ELEMENT_INDEX:36203,RED:6403,RGB8:32849,RGBA8:32856,RGB10_A2:32857,TEXTURE_3D:32879,TEXTURE_WRAP_R:32882,TEXTURE_MIN_LOD:33082,TEXTURE_MAX_LOD:33083,TEXTURE_BASE_LEVEL:33084,TEXTURE_MAX_LEVEL:33085,TEXTURE_COMPARE_MODE:34892,TEXTURE_COMPARE_FUNC:34893,SRGB:35904,SRGB8:35905,SRGB8_ALPHA8:35907,COMPARE_REF_TO_TEXTURE:34894,RGBA32F:34836,RGB32F:34837,RGBA16F:34842,RGB16F:34843,TEXTURE_2D_ARRAY:35866,TEXTURE_BINDING_2D_ARRAY:35869,R11F_G11F_B10F:35898,RGB9_E5:35901,RGBA32UI:36208,RGB32UI:36209,RGBA16UI:36214,RGB16UI:36215,RGBA8UI:36220,RGB8UI:36221,RGBA32I:36226,RGB32I:36227,RGBA16I:36232,RGB16I:36233,RGBA8I:36238,RGB8I:36239,RED_INTEGER:36244,RGB_INTEGER:36248,RGBA_INTEGER:36249,R8:33321,RG8:33323,R16F:33325,R32F:33326,RG16F:33327,RG32F:33328,R8I:33329,R8UI:33330,R16I:33331,R16UI:33332,R32I:33333,R32UI:33334,RG8I:33335,RG8UI:33336,RG16I:33337,RG16UI:33338,RG32I:33339,RG32UI:33340,R8_SNORM:36756,RG8_SNORM:36757,RGB8_SNORM:36758,RGBA8_SNORM:36759,RGB10_A2UI:36975,TEXTURE_IMMUTABLE_FORMAT:37167,TEXTURE_IMMUTABLE_LEVELS:33503,UNSIGNED_INT_2_10_10_10_REV:33640,UNSIGNED_INT_10F_11F_11F_REV:35899,UNSIGNED_INT_5_9_9_9_REV:35902,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,UNSIGNED_INT_24_8:34042,HALF_FLOAT:5131,RG:33319,RG_INTEGER:33320,INT_2_10_10_10_REV:36255,CURRENT_QUERY:34917,QUERY_RESULT:34918,QUERY_RESULT_AVAILABLE:34919,ANY_SAMPLES_PASSED:35887,ANY_SAMPLES_PASSED_CONSERVATIVE:36202,MAX_DRAW_BUFFERS:34852,DRAW_BUFFER0:34853,DRAW_BUFFER1:34854,DRAW_BUFFER2:34855,DRAW_BUFFER3:34856,DRAW_BUFFER4:34857,DRAW_BUFFER5:34858,DRAW_BUFFER6:34859,DRAW_BUFFER7:34860,DRAW_BUFFER8:34861,DRAW_BUFFER9:34862,DRAW_BUFFER10:34863,DRAW_BUFFER11:34864,DRAW_BUFFER12:34865,DRAW_BUFFER13:34866,DRAW_BUFFER14:34867,DRAW_BUFFER15:34868,MAX_COLOR_ATTACHMENTS:36063,COLOR_ATTACHMENT1:36065,COLOR_ATTACHMENT2:36066,COLOR_ATTACHMENT3:36067,COLOR_ATTACHMENT4:36068,COLOR_ATTACHMENT5:36069,COLOR_ATTACHMENT6:36070,COLOR_ATTACHMENT7:36071,COLOR_ATTACHMENT8:36072,COLOR_ATTACHMENT9:36073,COLOR_ATTACHMENT10:36074,COLOR_ATTACHMENT11:36075,COLOR_ATTACHMENT12:36076,COLOR_ATTACHMENT13:36077,COLOR_ATTACHMENT14:36078,COLOR_ATTACHMENT15:36079,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,MAX_SAMPLES:36183,SAMPLER_BINDING:35097,PIXEL_PACK_BUFFER:35051,PIXEL_UNPACK_BUFFER:35052,PIXEL_PACK_BUFFER_BINDING:35053,PIXEL_UNPACK_BUFFER_BINDING:35055,COPY_READ_BUFFER:36662,COPY_WRITE_BUFFER:36663,COPY_READ_BUFFER_BINDING:36662,COPY_WRITE_BUFFER_BINDING:36663,FLOAT_MAT2x3:35685,FLOAT_MAT2x4:35686,FLOAT_MAT3x2:35687,FLOAT_MAT3x4:35688,FLOAT_MAT4x2:35689,FLOAT_MAT4x3:35690,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,UNSIGNED_NORMALIZED:35863,SIGNED_NORMALIZED:36764,VERTEX_ATTRIB_ARRAY_INTEGER:35069,VERTEX_ATTRIB_ARRAY_DIVISOR:35070,TRANSFORM_FEEDBACK_BUFFER_MODE:35967,MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS:35968,TRANSFORM_FEEDBACK_VARYINGS:35971,TRANSFORM_FEEDBACK_BUFFER_START:35972,TRANSFORM_FEEDBACK_BUFFER_SIZE:35973,TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN:35976,MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS:35978,MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS:35979,INTERLEAVED_ATTRIBS:35980,SEPARATE_ATTRIBS:35981,TRANSFORM_FEEDBACK_BUFFER:35982,TRANSFORM_FEEDBACK_BUFFER_BINDING:35983,TRANSFORM_FEEDBACK:36386,TRANSFORM_FEEDBACK_PAUSED:36387,TRANSFORM_FEEDBACK_ACTIVE:36388,TRANSFORM_FEEDBACK_BINDING:36389,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:33296,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE:33297,FRAMEBUFFER_ATTACHMENT_RED_SIZE:33298,FRAMEBUFFER_ATTACHMENT_GREEN_SIZE:33299,FRAMEBUFFER_ATTACHMENT_BLUE_SIZE:33300,FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE:33301,FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE:33302,FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE:33303,FRAMEBUFFER_DEFAULT:33304,DEPTH24_STENCIL8:35056,DRAW_FRAMEBUFFER_BINDING:36006,READ_FRAMEBUFFER_BINDING:36010,RENDERBUFFER_SAMPLES:36011,FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER:36052,FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:36182,UNIFORM_BUFFER:35345,UNIFORM_BUFFER_BINDING:35368,UNIFORM_BUFFER_START:35369,UNIFORM_BUFFER_SIZE:35370,MAX_VERTEX_UNIFORM_BLOCKS:35371,MAX_FRAGMENT_UNIFORM_BLOCKS:35373,MAX_COMBINED_UNIFORM_BLOCKS:35374,MAX_UNIFORM_BUFFER_BINDINGS:35375,MAX_UNIFORM_BLOCK_SIZE:35376,MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:35377,MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS:35379,UNIFORM_BUFFER_OFFSET_ALIGNMENT:35380,ACTIVE_UNIFORM_BLOCKS:35382,UNIFORM_TYPE:35383,UNIFORM_SIZE:35384,UNIFORM_BLOCK_INDEX:35386,UNIFORM_OFFSET:35387,UNIFORM_ARRAY_STRIDE:35388,UNIFORM_MATRIX_STRIDE:35389,UNIFORM_IS_ROW_MAJOR:35390,UNIFORM_BLOCK_BINDING:35391,UNIFORM_BLOCK_DATA_SIZE:35392,UNIFORM_BLOCK_ACTIVE_UNIFORMS:35394,UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES:35395,UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER:35396,UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER:35398,OBJECT_TYPE:37138,SYNC_CONDITION:37139,SYNC_STATUS:37140,SYNC_FLAGS:37141,SYNC_FENCE:37142,SYNC_GPU_COMMANDS_COMPLETE:37143,UNSIGNALED:37144,SIGNALED:37145,ALREADY_SIGNALED:37146,TIMEOUT_EXPIRED:37147,CONDITION_SATISFIED:37148,WAIT_FAILED:37149,SYNC_FLUSH_COMMANDS_BIT:1,COLOR:6144,DEPTH:6145,STENCIL:6146,MIN:32775,MAX:32776,DEPTH_COMPONENT24:33190,STREAM_READ:35041,STREAM_COPY:35042,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_READ:35049,DYNAMIC_COPY:35050,DEPTH_COMPONENT32F:36012,DEPTH32F_STENCIL8:36013,INVALID_INDEX:4294967295,TIMEOUT_IGNORED:-1,MAX_CLIENT_WAIT_TIMEOUT_WEBGL:37447,VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,UNMASKED_VENDOR_WEBGL:37445,UNMASKED_RENDERER_WEBGL:37446,MAX_TEXTURE_MAX_ANISOTROPY_EXT:34047,TEXTURE_MAX_ANISOTROPY_EXT:34046,COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_RGBA8_ETC2_EAC:37493,COMPRESSED_SRGB8_ETC2:37494,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37495,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37496,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37497,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGB_ATC_WEBGL:35986,COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL:35986,COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL:34798,UNSIGNED_INT_24_8_WEBGL:34042,HALF_FLOAT_OES:36193,RGBA32F_EXT:34836,RGB32F_EXT:34837,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT:33297,UNSIGNED_NORMALIZED_EXT:35863,MIN_EXT:32775,MAX_EXT:32776,SRGB_EXT:35904,SRGB_ALPHA_EXT:35906,SRGB8_ALPHA8_EXT:35907,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT:33296,FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723,COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067,COLOR_ATTACHMENT4_WEBGL:36068,COLOR_ATTACHMENT5_WEBGL:36069,COLOR_ATTACHMENT6_WEBGL:36070,COLOR_ATTACHMENT7_WEBGL:36071,COLOR_ATTACHMENT8_WEBGL:36072,COLOR_ATTACHMENT9_WEBGL:36073,COLOR_ATTACHMENT10_WEBGL:36074,COLOR_ATTACHMENT11_WEBGL:36075,COLOR_ATTACHMENT12_WEBGL:36076,COLOR_ATTACHMENT13_WEBGL:36077,COLOR_ATTACHMENT14_WEBGL:36078,COLOR_ATTACHMENT15_WEBGL:36079,DRAW_BUFFER0_WEBGL:34853,DRAW_BUFFER1_WEBGL:34854,DRAW_BUFFER2_WEBGL:34855,DRAW_BUFFER3_WEBGL:34856,DRAW_BUFFER4_WEBGL:34857,DRAW_BUFFER5_WEBGL:34858,DRAW_BUFFER6_WEBGL:34859,DRAW_BUFFER7_WEBGL:34860,DRAW_BUFFER8_WEBGL:34861,DRAW_BUFFER9_WEBGL:34862,DRAW_BUFFER10_WEBGL:34863,DRAW_BUFFER11_WEBGL:34864,DRAW_BUFFER12_WEBGL:34865,DRAW_BUFFER13_WEBGL:34866,DRAW_BUFFER14_WEBGL:34867,DRAW_BUFFER15_WEBGL:34868,MAX_COLOR_ATTACHMENTS_WEBGL:36063,MAX_DRAW_BUFFERS_WEBGL:34852,VERTEX_ARRAY_BINDING_OES:34229,QUERY_COUNTER_BITS_EXT:34916,CURRENT_QUERY_EXT:34917,QUERY_RESULT_EXT:34918,QUERY_RESULT_AVAILABLE_EXT:34919,TIME_ELAPSED_EXT:35007,TIMESTAMP_EXT:36392,GPU_DISJOINT_EXT:36795};class Fe{constructor(e,n){Re(e),e._version=1,this.gl=e,this.program=new It(e,{vs:`attribute vec2 a_pos;
                void main() {
                    gl_Position = vec4(a_pos, 0.0, 1.0);
                }`,fs:n}),this.vertexArray=new Yt(e,{program:this.program}),this.buffer=new V(e,{data:new Float32Array([-1,1,-1,-1,1,1,1,-1])}),this.vertexArray.setAttributes({a_pos:this.buffer})}draw(e){var{uniforms:n={},framebuffer:i=null}=e;this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.program.setUniforms(n),this.program.draw({framebuffer:i,vertexArray:this.vertexArray,drawMode:this.gl.TRIANGLE_STRIP,vertexCount:4})}destroy(){this.buffer.delete(),this.vertexArray.delete(),this.program.delete()}}var _t=`precision mediump float;
#define GLSLIFY 1
attribute vec2 a_pos;varying vec2 v_tex_pos;void main(){v_tex_pos=a_pos;gl_Position=vec4(1.0-2.0*a_pos,0,1);}`;class Ve extends me{initializeState(e){var{gl:n}=this.context;this._resize();var i=new q({attributes:{a_pos:{value:new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),size:2}},vertexCount:6}),r=new b(n,{id:"_update",program:new It(n,{id:"updateProgram",vs:_t,fs:`precision highp float;
#define GLSLIFY 1
uniform sampler2D u_particles;uniform sampler2D u_wind;uniform vec2 u_wind_res;uniform vec2 u_wind_min;uniform vec2 u_wind_max;uniform float u_rand_seed;uniform float u_speed_factor;uniform float u_drop_rate;uniform float u_drop_rate_bump;uniform float u_camera_height;uniform float u_is_global;varying vec2 v_tex_pos;const vec3 rand_constants=vec3(12.9898,78.233,4375.85453);float rand(const vec2 co){float t=dot(rand_constants.xy,co);return fract(sin(t)*(rand_constants.z+t));}vec2 lookup_wind(const vec2 uv){vec2 px=1.0/u_wind_res;vec2 vc=(floor(uv*u_wind_res))*px;vec2 f=fract(uv*u_wind_res);vec2 tl=texture2D(u_wind,vc).rg;vec2 tr=texture2D(u_wind,vc+vec2(px.x,0)).rg;vec2 bl=texture2D(u_wind,vc+vec2(0,px.y)).rg;vec2 br=texture2D(u_wind,vc+px).rg;return mix(mix(tl,tr,f.x),mix(bl,br,f.x),f.y);}void main(){vec4 color=texture2D(u_particles,v_tex_pos);vec2 pos=vec2(color.r/255.0+color.b,color.g/255.0+color.a);vec2 velocity=mix(u_wind_min,u_wind_max,lookup_wind(pos));float speed_t=length(velocity)/length(u_wind_max);float distortion=mix(cos(radians(pos.y*180.0-90.0)),1.,u_is_global);float spd_ratio=clamp(sqrt(u_camera_height/1000./speed_t)*4e-7,1e-4,.8);vec2 offset=vec2(velocity.x/distortion,-velocity.y)*u_speed_factor*spd_ratio;pos=fract(1.0+pos+offset);vec2 seed=(pos+v_tex_pos)*u_rand_seed;float drop_rate=u_drop_rate+speed_t*u_drop_rate_bump;float drop=step(1.0-drop_rate,rand(seed));vec2 random_pos=vec2(rand(seed+1.3),rand(seed+2.1));pos=mix(pos,random_pos,drop);gl_FragColor=vec4(fract(pos*255.0),floor(pos*255.0)/255.0);}`}),geometry:i}),o=new b(n,{id:"_show_",vs:_t,fs:`#define GLSLIFY 1
uniform sampler2D u_screen;uniform float u_fade_opacity;varying vec2 v_tex_pos;void main(){vec4 color=texture2D(u_screen,1.0-v_tex_pos);gl_FragColor=vec4(color.xyz,floor(255.0*color.w*u_fade_opacity)/255.0);}`,geometry:i});this.setState({models:[r,o],modelsByName:{_update_:r,_show_:o},framebuffer:new St(n,{color:!1,depth:!1})});var{windRange:s,windOrigin:a}=this.props;this.setState({lngRange:[a[0],a[0]+s[0]],latRange:[a[1],a[1]-s[1]]})}shouldUpdateState(e){var{oldProps:n,props:i,context:r,changeFlags:o}=e;return o.propsOrDataChanged||o.viewportChanged}updateState(e){var{oldProps:n,props:i,changeFlags:r}=e;n.particlesNumber!==i.particlesNumber&&this._particlesNumberChangedHandler(),n.image!==i.image&&this._sourceDataChangeHandler(),n.rampColors!==i.rampColors&&this._rampColorsChangedHandler(),r.viewportChanged&&this._resize()}draw(e){var n=e.moduleParameters.viewport,i=n.unprojectPosition(n.cameraPosition)[2],{gl:r}=this.context,{width:o,height:s}=r.canvas,{modelsByName:a,backgroundTexture:l,screenTexture:c,colorRampTexture:u,sourceDataTexture:d,particleStateTexture0:f,particleStateTexture1:_,particleStateResolution:p,framebuffer:h,lngRange:m,latRange:A}=this.state,{fadeOpacity:y,speedFactor:E,dropRate:v,dropRateBump:g,windMin:w,windMax:P,windRange:F,windRes:N,windOrigin:D,opacity:M,visible:O}=this.props;if(O){if(he(r,{blend:!1,viewport:[0,0,o,s]},()=>{h.attach({[x.COLOR_ATTACHMENT0]:c},{clearAttachments:!1,resizeAttachments:!1}),a._show_.draw({framebuffer:h,uniforms:{u_screen:l,u_fade_opacity:y}}),a._draw_.draw({framebuffer:h,uniforms:Object.assign({},e.uniforms,{u_wind:d,u_particles:f,u_color_ramp:u,u_particles_res:p,u_wind_min:w,u_wind_max:P,u_wind_origin:D,u_wind_range:F})}),h.attach({[x.COLOR_ATTACHMENT0]:null},{clearAttachments:!1,resizeAttachments:!1}),he(r,{blend:!0,blendFunc:[x.SRC_ALPHA,x.ONE_MINUS_SRC_ALPHA,x.SRC_ALPHA,x.ONE_MINUS_SRC_ALPHA]},()=>{a._show_.draw({uniforms:{u_screen:c,u_fade_opacity:M}})});var Ut=l;this.setState({backgroundTexture:c,screenTexture:Ut}),he(r,{viewport:[0,0,p,p]},()=>{_.resize({width:p,height:p}),h.attach({[x.COLOR_ATTACHMENT0]:_},{clearAttachments:!1,resizeAttachments:!1}),a._update_.draw({framebuffer:h,uniforms:{u_wind:d,u_particles:f,u_rand_seed:Math.random(),u_wind_res:[F[0]/N,F[1]/N],u_wind_min:w,u_wind_max:P,u_speed_factor:E,u_camera_height:i,u_drop_rate:v,u_drop_rate_bump:g,u_is_global:F[1]>169?0:1}}),h.attach({[x.COLOR_ATTACHMENT0]:null},{clearAttachments:!1,resizeAttachments:!1});var Bt=f;this.setState({particleStateTexture0:_,particleStateTexture1:Bt})})}),this.props.onHover){var{_pickRequest:I}=e.context.deck;if(I.x&&I.x!==-1){var{x:J,y:Dt}=e.context.deck._pickRequest,$=e.context.deck.viewManager.unproject([J,Dt]);if($[0]<m[0]||$[0]>m[1]||$[1]>A[0]||$[1]<A[1])return;this.props.onHover(this.getSpeed($))}}r.clear(r.DEPTH_BUFFER_BIT)}}finalizeState(){super.finalizeState();var{models:e,backgroundTexture:n,screenTexture:i,colorRampTexture:r,sourceDataTexture:o,particleStateTexture0:s,particleStateTexture1:a,framebuffer:l}=this.state;e&&e.forEach(c=>{c&&c.delete()}),n&&n.delete(),i&&i.delete(),r&&r.delete(),o&&o.delete(),s&&s.delete(),a&&a.delete(),l&&l.delete()}getSpeed(e){var{sourceDataTexture:n}=this.state,{windMin:i,windMax:r,windOrigin:o,windRes:s}=this.props,[a,l]=e,c=(a-o[0])/s,u=(o[1]-l)/s,[d,f]=Zt(n,{sourceX:c,sourceY:u,sourceWidth:1,sourceHeight:1});return[d=d/255*(r[0]-i[0])+i[0],f=f/255*(r[1]-i[1])+i[1]]}_resize(){this.state.backgroundTexture&&this.state.backgroundTexture.delete(),this.state.screenTexture&&this.state.screenTexture.delete();var{gl:e}=this.context,{width:n,height:i}=e.canvas,r=new Uint8Array(n*i*4),o=new B(e,{data:r,width:n,height:i,mipmaps:!1,parameters:{[x.TEXTURE_MAG_FILTER]:x.NEAREST,[x.TEXTURE_MIN_FILTER]:x.NEAREST,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},format:x.RGBA}),s=new B(e,{data:r,width:n,height:i,mipmaps:!1,parameters:{[x.TEXTURE_MAG_FILTER]:x.NEAREST,[x.TEXTURE_MIN_FILTER]:x.NEAREST,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},format:x.RGBA});this.setState({backgroundTexture:o,screenTexture:s})}_rampColorsChangedHandler(){var{gl:e}=this.context,{rampColors:n}=this.props;this.state.colorRampTexture&&this.state.colorRampTexture.delete();var i=new B(e,{data:this._getColorRamp(n),width:16,height:16,parameters:{[x.TEXTURE_MAG_FILTER]:x.LINEAR,[x.TEXTURE_MIN_FILTER]:x.LINEAR,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},pixelStore:{[x.UNPACK_FLIP_Y_WEBGL]:!1}});this.setState({colorRampTexture:i})}_sourceDataChangeHandler(){var{gl:e}=this.context,{image:n}=this.props;this.state.sourceDataTexture&&this.state.sourceDataTexture.delete();var i=new B(e,{data:n,mipmaps:!1,parameters:{[x.TEXTURE_MAG_FILTER]:x.NEAREST,[x.TEXTURE_MIN_FILTER]:x.NEAREST,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},pixelStore:{[x.UNPACK_FLIP_Y_WEBGL]:!1}});this.setState({sourceDataTexture:i})}_particlesNumberChangedHandler(){var{gl:e}=this.context,{particlesNumber:n}=this.props;this.state.particleStateTexture0&&this.state.particleStateTexture0.delete(),this.state.particleStateTexture1&&this.state.particleStateTexture1.delete();for(var i=Math.ceil(Math.sqrt(n)),r=i*i,o=new Uint8Array(4*r),s=0;s<o.length;s++)o[s]=Math.floor(256*Math.random());for(var a=new B(e,{data:o,width:i,height:i,mipmaps:!1,parameters:{[x.TEXTURE_MAG_FILTER]:x.NEAREST,[x.TEXTURE_MIN_FILTER]:x.NEAREST,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},dataFormat:x.RGBA}),l=new B(e,{data:o,width:i,height:i,mipmaps:!1,parameters:{[x.TEXTURE_MAG_FILTER]:x.NEAREST,[x.TEXTURE_MIN_FILTER]:x.NEAREST,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},dataFormat:x.RGBA}),c=new Float32Array(r),u=0;u<r;u++)c[u]=u;this.setState({particleStateResolution:i,particleIndices:c,particleStateTexture0:a,particleStateTexture1:l});var{_draw_:d}=this.state.modelsByName;d?d.setProps({attributes:{a_index:[new V(e,c),{size:1}]},vertexCount:r}):(d=new b(e,{id:"_draw_",vs:`precision mediump float;
#define GLSLIFY 1
attribute float a_index;attribute vec3 instancePositions64Low;uniform sampler2D u_particles;uniform float u_particles_res;uniform vec2 u_wind_origin;uniform vec2 u_wind_range;varying vec2 v_particle_pos;void main(){vec4 color=texture2D(u_particles,vec2(fract(a_index/u_particles_res),floor(a_index/u_particles_res)/u_particles_res));v_particle_pos=vec2(color.r/255.0+color.b,color.g/255.0+color.a);gl_PointSize=1.;vec2 lnglat_position=vec2(u_wind_origin.x+v_particle_pos.x*u_wind_range.x,u_wind_origin.y-v_particle_pos.y*u_wind_range.y);gl_Position=project_position_to_clipspace(vec3(lnglat_position,10.),vec3(0.0),vec3(0.0));}`,fs:`precision mediump float;
#define GLSLIFY 1
uniform sampler2D u_wind;uniform vec2 u_wind_min;uniform vec2 u_wind_max;uniform sampler2D u_color_ramp;varying vec2 v_particle_pos;void main(){vec2 velocity=mix(u_wind_min,u_wind_max,texture2D(u_wind,v_particle_pos).rg);float speed_t=length(velocity)/length(u_wind_max);vec2 ramp_pos=vec2(fract(16.0*speed_t),floor(16.0*speed_t)/16.0);gl_FragColor=texture2D(u_color_ramp,ramp_pos);}`,attributes:{a_index:[new V(e,c),{size:1}]},vertexCount:r,drawMode:e.POINTS,modules:[Ae]}),this.state.modelsByName._draw_=d,this.state.models.push(d))}_getColorRamp(e){var n=document.createElement("canvas"),i=n.getContext("2d");n.width=256,n.height=1;var r=i.createLinearGradient(0,0,256,0);for(var o in e)r.addColorStop(+o,e[o]);return i.fillStyle=r,i.fillRect(0,0,256,1),new Uint8Array(i.getImageData(0,0,256,1).data)}}function ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ft(Object(n),!0).forEach(function(i){ne(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ne(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Ve.layerName="WindLayer",Ve.defaultProps={image:{type:"image",value:null},windMin:{type:"array",value:[-21.32,-21.57],optional:null,validate:t=>t.length===2},windMax:{type:"array",value:[26.8,21.42],optional:null,validate:t=>t.length===2},windRange:{type:"array",value:[360,170],optional:null,validate:t=>t.length===2},windOrigin:{type:"array",value:[180,85],optional:null,validate:t=>t.length===2},windRes:{type:"number",value:1},particlesNumber:65536,fadeOpacity:{type:"number",value:.95,min:.9,max:1},speedFactor:{type:"number",value:.15,min:0,max:1},dropRate:{type:"number",value:.003,min:0,max:1},dropRateBump:{type:"number",value:.01,min:0,max:1},rampColors:{0:"#3288bd",.1:"#66c2a5",.2:"#abdda4",.3:"#e6f598",.4:"#fee08b",.5:"#fdae61",.6:"#f46d43",1:"#d53e4f"},pickable:!1,wrapLongitude:!0,opacity:.8,visible:!0};class He extends me{getShaders(){return super.getShaders({vs:`#define GLSLIFY 1
#define SHADER_NAME scalar-field-layer-vertex-shader
attribute vec3 positions;attribute vec3 positions64Low;varying vec3 v_tex_pos;void main(){v_tex_pos=positions;gl_Position=project_position_to_clipspace(positions,positions64Low,vec3(0.0));}`,fs:`#define GLSLIFY 1
#define SHADER_NAME scalar-field-layer-fragment-shader
uniform sampler2D scalarFieldTexture;uniform sampler2D colorRampTexture;uniform vec2 u_range;uniform vec2 u_origin;varying vec3 v_tex_pos;float decodeValue(vec4 cv){return(cv.r+cv.g+cv.b)/3.;}float getVal(vec2 pos){return decodeValue(texture2D(scalarFieldTexture,pos));}void main(){float val=getVal(vec2(abs(v_tex_pos.x-u_origin.x)/u_range.x,abs(v_tex_pos.y-u_origin.y)/u_range.y));vec2 ramp_pos=vec2(fract(16.0*val),floor(16.0*val)/16.0);vec4 color=texture2D(colorRampTexture,ramp_pos);gl_FragColor=vec4(color.rgb,1.);}`,modules:[Ae]})}initializeState(e){var{gl:n}=this.context,i=this.getAttributeManager();i.remove(["instancePickingColors"]),i.add({indices:{size:1,isIndexed:!0,update:o=>o.value=this.state.mesh.indices,noAlloc:!0},positions:{size:3,type:x.DOUBLE,fp64:this.use64bitPositions(),update:o=>o.value=this.state.mesh.positions,noAlloc:!0}});var r=new b(n,L(L({},this.getShaders()),{},{id:"_draw_",geometry:new q({drawMode:x.TRIANGLES,vertexCount:6})}));this.setState({model:r})}shouldUpdateState(e){var{oldProps:n,props:i,context:r,changeFlags:o}=e;return o.propsOrDataChanged}updateState(e){var{oldProps:n,props:i,changeFlags:r}=e;if(n.image!==i.image&&this._sourceDataChangeHandler(),n.rampColors!==i.rampColors&&this._rampColorsChangedHandler(),n.range!==i.range||n.origin!==i.origin){var o=this.state.mesh,s=this._createMesh();for(var a in this.state.model.setVertexCount(s.vertexCount),s)o&&o[a]!==s[a]&&attributeManager.invalidate(a);this.setState({mesh:s})}}draw(e){var n=this.context.gl,{range:i,origin:r}=this.props;this.state.model.draw({uniforms:{u_range:i,u_origin:r,scalarFieldTexture:this.state.sourceDataTexture,colorRampTexture:this.state.colorRampTexture}}),n.clear(n.DEPTH_BUFFER_BIT)}finalizeState(){super.finalizeState();var{model:e,sourceDataTexture:n}=this.state;e&&e.delete(),n&&n.delete()}_getModel(e){return e?new b(e,L(L({},this.getShaders()),{},{id:this.props.id,geometry:new q({drawMode:x.TRIANGLES,vertexCount:6}),isInstanced:!1})):null}_createMesh(){for(var{origin:e,range:n}=this.props,i=Math.ceil(n[0]/1)+1,r=Math.ceil(n[1]/1)+1,o=(i-1)*(r-1)*6,s=new Uint32Array(o),a=new Float64Array(i*r*3),l=0,c=0,u=0;u<i;u++)for(var d=0;d<r;d++)a[3*l+0]=e[0]+1*u,a[3*l+1]=e[1]-1*d,a[3*l+2]=1e3,u>0&&d>0&&(s[c++]=l-r,s[c++]=l-r-1,s[c++]=l-1,s[c++]=l-r,s[c++]=l-1,s[c++]=l),l++;return{vertexCount:o,positions:a,indices:s}}_sourceDataChangeHandler(){var{gl:e}=this.context,{image:n}=this.props;this.state.sourceDataTexture&&this.state.sourceDataTexture.delete();var i=new B(e,{data:n,mipmaps:!1,parameters:{[x.TEXTURE_MAG_FILTER]:x.LINEAR,[x.TEXTURE_MIN_FILTER]:x.LINEAR,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},pixelStore:{[x.UNPACK_FLIP_Y_WEBGL]:!1}});this.setState({sourceDataTexture:i})}_rampColorsChangedHandler(){var{gl:e}=this.context,{rampColors:n}=this.props;this.state.colorRampTexture&&this.state.colorRampTexture.delete();var i=new B(e,{data:this._getColorRamp(n),width:16,height:16,parameters:{[x.TEXTURE_MAG_FILTER]:x.LINEAR,[x.TEXTURE_MIN_FILTER]:x.LINEAR,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE},pixelStore:{[x.UNPACK_FLIP_Y_WEBGL]:!1}});this.setState({colorRampTexture:i})}_getColorRamp(e){var n=document.createElement("canvas"),i=n.getContext("2d");n.width=256,n.height=1;var r=i.createLinearGradient(0,0,256,0);for(var o in e)r.addColorStop(+o,e[o]);return i.fillStyle=r,i.fillRect(0,0,256,1),new Uint8Array(i.getImageData(0,0,256,1).data)}}He.layerName="ScalarFieldLayer",He.defaultProps={image:{type:"image",value:null},min:{type:"array",value:[-21.32,-21.57],optional:null,validate:t=>t.length===2},max:{type:"array",value:[26.8,21.42],optional:null,validate:t=>t.length===2},range:{type:"array",value:[360,170],optional:null,validate:t=>t.length===2},origin:{type:"array",value:[0,85],optional:null,validate:t=>t.length===2},resolution:{type:"number",value:1},opacity:.8,rampColors:{0:"#3288bd",.1:"#66c2a5",.2:"#abdda4",.3:"#e6f598",.4:"#fee08b",.5:"#fdae61",.6:"#f46d43",1:"#d53e4f"},pickable:!1,wrapLongitude:!1,visible:!0};class Xe extends Pt{getShaders(){var e=super.getShaders();return e.inject={"vs:#decl":`        uniform float u_trailLength;
        uniform float currentTime;
        attribute vec2 instanceTimestamps;
        attribute vec2 instanceNextTimestamps;
        varying float vTime;
        varying float vLife;
        `,"vs:#main-end":`        vTime = instanceTimestamps.x + (instanceNextTimestamps.x - instanceTimestamps.x) * vPathPosition.y / vPathLength;
        vLife = mod(currentTime,instanceTimestamps.y);
        `,"fs:#decl":`        uniform float u_trailLength;
        uniform float u_interval;
        varying float vTime;
        varying float vLife;
        `,"fs:DECKGL_FILTER_COLOR":`
            color.a *= smoothstep(1. - u_trailLength / u_interval, 1.0, 1.0 - fract((vLife - vTime) / u_interval));
        `},e}initializeState(e){super.initializeState(e);var n=this.getAttributeManager(),{viewport:i}=e,{speed:r}=this.props;n.addInstanced({timestamps:{size:2,accessor:(o,s)=>{for(var a=this.props.getPath(o),l=a.length,c=[i.projectPosition(a[0])],u=[0],d=0,f=1;f<l;f++){var _=i.projectPosition(a[f]),p=c[f-1];c.push(_);var h=Math.sqrt(Math.pow(1e3*_[0]-1e3*p[0],2)+Math.pow(1e3*_[1]-1e3*p[1],2));d+=h/r,u.push(d)}return d=Math.ceil(d),u=u.map(m=>[m,d])},shaderAttributes:{instanceTimestamps:{vertexOffset:0},instanceNextTimestamps:{vertexOffset:1}}}}),this.setState({currentTime:0})}draw(e){var{trailLength:n,interval:i}=this.props,{currentTime:r}=this.state;e.uniforms=L(L({},e.uniforms),{},{u_trailLength:n,u_interval:i,currentTime:r});var o=e.context.viewport.zoom;this.setState({currentTime:this.state.currentTime+10/o/o}),super.draw(e)}}Xe.layerName="TrailLayer",Xe.defaultProps={speed:{type:"number",value:.5,min:0},interval:{type:"number",value:10,min:0},trailLength:{type:"number",value:5,min:0}};class We extends jt{getShaders(){var e=super.getShaders();return e.inject={"vs:#decl":`        uniform float trailLength;
        varying float vSegmentIndex;
        `,"vs:#main-end":`            vSegmentIndex = segmentIndex;
        `,"fs:#decl":`        uniform float trailLength;
        uniform float currentSegmentIndex;
        varying float vSegmentIndex;
        `,"fs:#main-start":`        if(vSegmentIndex > currentSegmentIndex || vSegmentIndex < currentSegmentIndex - trailLength) {
            discard;
        }
        `,"fs:DECKGL_FILTER_COLOR":"color.a *= 1.0 - (currentSegmentIndex - vSegmentIndex) / trailLength;"},e}initializeState(e){super.initializeState(e),this.setState({currentSegmentIndex:0})}draw(e){var{trailLength:n}=this.props,{currentSegmentIndex:i}=this.state;e.uniforms=L(L({},e.uniforms),{},{trailLength:n,currentSegmentIndex:i}),this.setState({currentSegmentIndex:(this.state.currentSegmentIndex+.1)%53}),super.draw(e)}}We.layerName="MigrationLayer",We.defaultProps={trailLength:{type:"number",value:120,min:0}};class ze extends k{initializeState(e){super.initializeState(e),this.setState({u_time:0}),this.getAttributeManager().add({uv:{size:2,type:x.DOUBLE,accessor:(n,i)=>{var r=this.props.getPolygon(n),o=-1/0,s=-1/0,a=1/0,l=1/0,c=[];if(Array.isArray(r[0][0]))for(var u of r)u.forEach(f=>{var[_,p]=f;_<l&&(l=_),_>s&&(s=_),p<a&&(a=p),p>o&&(o=p),c.push([_,p])});else r.forEach(f=>{var[_,p]=f;_<l&&(l=_),_>s&&(s=_),p<a&&(a=p),p>o&&(o=p),c.push([_,p])});var d=Math.max(s-l,o-a);return c.map(f=>{var[_,p]=f;return[(_-l)/d,(p-a)/d]})}}})}getShaders(e){var n=super.getShaders(e);return n.inject={"vs:#decl":`
        attribute vec2 uv;
        varying vec2 vPosition;
        `,"vs:#main-end":`
        vPosition = uv;
        `,"fs:#decl":`         #define TAU 6.28318530718
         #define MAX_ITER 3  
         uniform float u_time;
         uniform vec3 u_color;

         varying vec2 vPosition;

         vec3 Effect()
         {
            float time = u_time * .5+23.0;

            //vec2 uv = gl_FragCoord.xy / 512.;
            vec2 uv = vPosition;
            

            vec2 p = mod(uv*TAU, TAU)-250.0;

            vec2 i = vec2(p);
            float c = 1.0;
            float inten = .005;

            for (int n = 0; n < MAX_ITER; n++) 
            {
                float t = time * (1.0 - (3.5 / float(n+1)));
                i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
                c += 1.0/length(vec2(p.x / (sin(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));
            }
            c /= float(MAX_ITER);
            c = 1.17-pow(c, 1.4);
            vec3 colour = vec3(pow(abs(c), 8.0));
            colour = clamp(colour + u_color, 0.0, 1.0);
            
            return colour;
        }

         `,"fs:DECKGL_FILTER_COLOR":`
         color = vec4(Effect(),.8);
         `},n}_getModels(e){var{id:n}=this.props,i=this.getShaders("top");i.defines.NON_INSTANCED_MODEL=1;var r=new b(e,L(L({},i),{},{id:"".concat(n,"-top"),drawMode:x.TRIANGLES,attributes:{vertexPositions:new Float32Array([0,1])},uniforms:{isWireframe:!1,isSideVertex:!1},vertexCount:0,isIndexed:!0}));return{models:[r],topModel:r}}draw(e){var{waterColor:n}=this.props,{u_time:i}=this.state;e.uniforms=L(L({},e.uniforms),{},{u_time:i,u_color:n.slice(0,3).map(r=>r/255)}),this.setState({u_time:i+.05}),super.draw(e)}}ze.layerName="WaterLayer",ze.defaultProps={waterColor:{type:"color",value:[0,89,128]}};class ke extends tt{initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({instanceDelayFactor:{size:1,accessor:"getDelayFactor"}})}getShaders(){return Object.assign({},super.getShaders(),{inject:{"vs:#decl":`
        attribute float instanceDelayFactor;
        uniform float animationProgress;
        uniform float numPoints;
        uniform float pointDuration;
        varying float instanceAnimationProgress;

        float delayedAnimationProgress(float instanceDelayFactor, float animationProgress, float pointDuration) {
          float delayProportion = 1.0 - pointDuration;
          float delay = instanceDelayFactor * delayProportion;

          // instanceDelayFactor = 0 => animationProgress: 0 to (1 - delayProportion) ===> 0 to 1
          // instanceDelayFactor = 1 => animationProgress: delayProportion to 1 ===> 0 to 1
          return clamp((animationProgress - delay) / pointDuration, 0.0, 1.0);
        }
        `,"vs:#main-end":`
        instanceAnimationProgress = delayedAnimationProgress(instanceDelayFactor, animationProgress, pointDuration);
        `},fs:`
#define SHADER_NAME delayed-point-layer-fragment-shader

precision highp float;
uniform bool filled;
uniform float animationProgress;
varying vec4 vFillColor;
varying vec4 vLineColor;
varying vec2 unitPosition;
varying float innerUnitRadius;
varying float instanceAnimationProgress;

#ifndef PI
#define PI 3.141592653589793
#endif

// easing function
float backOut(float t) {
  float f = 1.0 - t;
  return 1.0 - (pow(f, 3.0) - f * sin(f * PI));
}

void main(void) {
  // delay is a value between 0 and 1 indicating how delayed it should be
  float t = instanceAnimationProgress;

  // divide by 0.75 to say how long it should increase size by
  // (size animation should be done at 75% through the animation, color anim continues)
  float tSize = backOut(clamp(t / 0.75, 0.0, 1.0));

  // our points actually render at half the size specified. This allows them
  // to exceed their desired size before settling into it without clipping.
  // In theory, we could modify the vertex shader to account for this, but
  // easiser to just supply a bigger radius for now...
  float maxSize = clamp(tSize * 0.5, 0.0, 1.0);

  float distToCenter = length(unitPosition);
  if (distToCenter > maxSize) { // @pbeshai edit - was 1.0
    discard;
  }

  if (distToCenter > innerUnitRadius) {
    gl_FragColor = vLineColor;
  } else if (filled) {
    gl_FragColor = vFillColor;
  } else {
    discard;
  }
  // use highlight color if this fragment belongs to the selected object.
  gl_FragColor = picking_filterHighlightColor(gl_FragColor);
  // use picking color if rendering to picking FBO.
  gl_FragColor = picking_filterPickingColor(gl_FragColor);

  // start at this color (white) and animate into the final color
  vec4 enterColor = vec4(1.0);

  // t * t to use quadratic-ish easing
  gl_FragColor = mix(enterColor, gl_FragColor, t * t);
}
`})}draw(e){var{animationProgress:n=0,pointDuration:i=.25,data:r}=this.props,o=Object.assign({},e.uniforms,{animationProgress:n,pointDuration:i,numPoints:r.length});super.draw(Object.assign({},e,{uniforms:o}))}}var Ln={animationProgress:{type:"number",min:0,max:1,value:1},getDelayFactor:{type:"accessor",value:0},parameters:{[x.DEPTH_TEST]:!1,[x.BLEND]:!0,[x.BLEND_SRC_RGB]:x.ONE,[x.BLEND_DST_RGB]:x.ONE,[x.BLEND_EQUATION]:x.FUNC_ADD}};ke.layerName="DelayedPointLayer",ke.defaultProps=Ln;class Ke extends Pt{getShaders(){var e=super.getShaders();return e.inject={"vs:#decl":`            attribute float instanceStrokeHeight;

            uniform float u_currentTime;
            uniform float u_trailLength;

            varying float v_z;
            varying float v_time;
            `,"vs:#main-end":`            v_z = instanceStartPositions.z;
            //v_time = mod(u_currentTime,sparkHeight + u_trailLength);
            v_time = mod(u_currentTime,instanceStrokeHeight);
            //v_time = sparkHeight;
        `,"fs:#decl":`            uniform float u_trailLength;
            
            varying float v_time;
            varying float v_z;
        `,"fs:#main-start":`                if(v_z > v_time || v_z < v_time - u_trailLength) {
                    discard;
                }
                `,"fs:DECKGL_FILTER_COLOR":`
            color.a *= 1.0 - (v_time - v_z) / u_trailLength;
            //color = vec4(v_time/500.,0.,0.,1.);
            `},e}initializeState(e){super.initializeState(e),this.getAttributeManager().add({instanceStrokeHeight:{size:1,accessor:"getHeight",defaultValue:100}}),this.setState({currentTime:0})}updateState(e){var{oldProps:n,props:i,changeFlags:r}=e,{data:o,getPosition:s,getHeight:a}=this.props;r.dataChanged&&o.length>0&&(i.data=o.map(l=>{for(var c=s(l),u=[],d=(typeof a=="function"?a(l):a)/100,f=1;f<101;f++)u.push([c[0],c[1],f*d]);return l=L({path:u},l)})),super.updateState({props:i,oldProps:n,changeFlags:r})}draw(e){var{trailLength:n,speed:i}=this.props,{currentTime:r}=this.state;e.uniforms=L(L({},e.uniforms),{},{u_trailLength:n,u_currentTime:r});var o=r+i;this.setState({currentTime:o}),super.draw(e)}}Ke.layerName="SparkLayer",Ke.defaultProps={speed:10,getPosition:t=>t.position,getHeight:{type:"accessor",value:1e3},trailLength:{type:"number",value:1e3,min:0},getPath:t=>t.path,billboard:!0,widthUnits:"meters",getWidth:1,widthMinPixels:.8,parameters:{}};class Le{constructor(e){var{id:n,center:i,radius:r,visible:o=!0}=e;return ne(this,"defaultId","baseCircleLayer"),this.id=n||this.defaultId,this.type="custom",this.renderingMode="3d",this._iTime=0,this.center=i,this.radius=r,this.visible=o,this}setProps(e){var n;e.center!==void 0&&(this.center=e.center),e.radius!==void 0&&(this.radius=e.radius),e.visible!==void 0&&(this.visible=e.visible);var{position64High:i,position64Low:r}=this._getPositions();(n=this.model)===null||n===void 0||n.setAttributes({positions64High:i,positions64Low:r})}_getPositions(){var{center:e,radius:n}=this,{x:i,y:r}=De.MercatorCoordinate.fromLngLat(e),o=n/20037508342789244e-9/2,s={x:i-o,y:r+o},a={x:i-o,y:r-o},l={x:i+o,y:r+o},c={x:i+o,y:r-o},u=[{x:s.x-Math.fround(s.x),y:s.y-Math.fround(s.y)},{x:a.x-Math.fround(a.x),y:a.y-Math.fround(a.y)},{x:c.x-Math.fround(c.x),y:c.y-Math.fround(c.y)},{x:l.x-Math.fround(l.x),y:l.y-Math.fround(l.y)}],d=new Float32Array([s.x,s.y,a.x,a.y,c.x,c.y,s.x,s.y,c.x,c.y,l.x,l.y]),f=new Float32Array([u[0].x,u[0].y,u[1].x,u[1].y,u[2].x,u[2].y,u[0].x,u[0].y,u[2].x,u[2].y,u[3].x,u[3].y]);return{position64High:new V(this.gl,d),position64Low:new V(this.gl,f)}}onAdd(e,n){this._map=e,Re(n),n._version=1,this.gl=n;var{position64High:i,position64Low:r}=this._getPositions(),o=this.getFragmentShaderSource();this.model=new b(n,{id:"my-program",vs:`
            attribute vec2 positions64High;
            attribute vec2 positions64Low;
            attribute vec2 textureCoordinates;
            
            uniform vec2 uCameraPosHigh;
            uniform vec2 uCameraPosLow;

            varying vec2 v_textureCoordinates;

            uniform mat4 uPMatrix;

            vec2 translateRelativeToEye(vec2 high, vec2 low) {
                vec2 highDiff = high - uCameraPosHigh;
                vec2 lowDiff = low - uCameraPosLow;
                return highDiff + lowDiff;
            }

            void main() {
                v_textureCoordinates = textureCoordinates;

                gl_Position = uPMatrix * vec4(translateRelativeToEye(positions64High,positions64Low), 0.0, 1.0);
            }`,fs:o,attributes:{positions64High:i,positions64Low:r,textureCoordinates:new V(n,new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]))},vertexCount:6})}getFragmentShaderSource(){throw new Error("this method must be implement")}render(e,n){if(this.visible){var i=this._map.getCanvas();this._iTime+=.01;var r=De.MercatorCoordinate.fromLngLat(this._map.getCenter()),o=[Math.fround(r.x),Math.fround(r.y)],s=[r.x-o[0],r.y-o[1]],a=n.slice();a[12]+=a[0]*r.x+a[4]*r.y,a[13]+=a[1]*r.x+a[5]*r.y,a[14]+=a[2]*r.x+a[6]*r.y,a[15]+=a[3]*r.x+a[7]*r.y;var l=a;he(e,{},()=>{this.model.setUniforms({uPMatrix:l,uCameraPosHigh:o,uCameraPosLow:s,iResolution:[i.width,i.height],iTime:this._iTime}).draw(),e.clear(e.DEPTH_BUFFER_BIT),this._map.triggerRepaint()})}}onRemove(){this.model.delete()}}function Ye(t,e={}){const{start:n=0,end:i=t.length}=e,r=e.size||2;let o=0;for(let s=n,a=i-r;s<i;s+=r)o+=(t[s]-t[a])*(t[s+1]+t[a+1]),a=s;return o/2}function Nn(t,e,n,i){n=n||2;const r=e&&e.length,o=r?e[0]*n:t.length;let s=pt(t,0,o,n,!0,i&&i[0]);const a=[];if(!s||s.next===s.prev)return a;let l,c,u,d,f,_,p;if(r&&(s=function(h,m,A,y,E){const v=[];let g,w,P,F,N;for(g=0,w=m.length;g<w;g++)P=m[g]*y,F=g<w-1?m[g+1]*y:h.length,N=pt(h,P,F,y,!1,E&&E[g+1]),N===N.next&&(N.steiner=!0),v.push(Gn(N));for(v.sort(Dn),g=0;g<v.length;g++)Un(v[g],A),A=H(A,A.next);return A}(t,e,s,n,i)),t.length>80*n){d=c=t[0],f=u=t[1];for(let h=n;h<o;h+=n)_=t[h],p=t[h+1],_<d&&(d=_),p<f&&(f=p),_>c&&(c=_),p>u&&(u=p);l=Math.max(c-d,u-f),l=l!==0?1/l:0}return se(s,a,n,d,f,l),a}function pt(t,e,n,i,r,o){let s,a;if(o===void 0&&(o=Ye(t,{start:e,end:n,size:i})),r===o<0)for(s=e;s<n;s+=i)a=xt(s,t[s],t[s+1],a);else for(s=n-i;s>=e;s-=i)a=xt(s,t[s],t[s+1],a);return a&&Se(a,a.next)&&(le(a),a=a.next),a}function H(t,e){if(!t)return t;e||(e=t);let n,i=t;do if(n=!1,i.steiner||!Se(i,i.next)&&S(i.prev,i,i.next)!==0)i=i.next;else{if(le(i),i=e=i.prev,i===i.next)break;n=!0}while(n||i!==e);return e}function se(t,e,n,i,r,o,s){if(!t)return;!s&&o&&function(u,d,f,_){let p=u;do p.z===null&&(p.z=Ze(p.x,p.y,d,f,_)),p.prevZ=p.prev,p.nextZ=p.next,p=p.next;while(p!==u);p.prevZ.nextZ=null,p.prevZ=null,function(h){let m,A,y,E,v,g,w,P,F=1;do{for(E=h,h=null,P=null,y=0;E;){for(y++,g=E,v=0,A=0;A<F&&(v++,g=g.nextZ,g);A++);for(w=F;v>0||w>0&&g;)v!==0&&(w===0||!g||E.z<=g.z)?(m=E,E=E.nextZ,v--):(m=g,g=g.nextZ,w--),P?P.nextZ=m:h=m,m.prevZ=P,P=m;E=g}P.nextZ=null,F*=2}while(y>1)}(p)}(t,i,r,o);let a,l,c=t;for(;t.prev!==t.next;)if(a=t.prev,l=t.next,o?On(t,i,r,o):Mn(t))e.push(a.i/n),e.push(t.i/n),e.push(l.i/n),le(t),t=l.next,c=l.next;else if((t=l)===c){s?s===1?se(t=wn(H(t),e,n),e,n,i,r,o,2):s===2&&bn(t,e,n,i,r,o):se(H(t),e,n,i,r,o,1);break}}function Mn(t){const e=t.prev,n=t,i=t.next;if(S(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(j(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&S(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function On(t,e,n,i){const r=t.prev,o=t,s=t.next;if(S(r,o,s)>=0)return!1;const a=r.x<o.x?r.x<s.x?r.x:s.x:o.x<s.x?o.x:s.x,l=r.y<o.y?r.y<s.y?r.y:s.y:o.y<s.y?o.y:s.y,c=r.x>o.x?r.x>s.x?r.x:s.x:o.x>s.x?o.x:s.x,u=r.y>o.y?r.y>s.y?r.y:s.y:o.y>s.y?o.y:s.y,d=Ze(a,l,e,n,i),f=Ze(c,u,e,n,i);let _=t.prevZ,p=t.nextZ;for(;_&&_.z>=d&&p&&p.z<=f;){if(_!==t.prev&&_!==t.next&&j(r.x,r.y,o.x,o.y,s.x,s.y,_.x,_.y)&&S(_.prev,_,_.next)>=0||(_=_.prevZ,p!==t.prev&&p!==t.next&&j(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&S(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;_&&_.z>=d;){if(_!==t.prev&&_!==t.next&&j(r.x,r.y,o.x,o.y,s.x,s.y,_.x,_.y)&&S(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;p&&p.z<=f;){if(p!==t.prev&&p!==t.next&&j(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&S(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function wn(t,e,n){let i=t;do{const r=i.prev,o=i.next.next;!Se(r,o)&&Ot(r,i,i.next,o)&&ae(r,o)&&ae(o,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(o.i/n),le(i),le(i.next),i=t=o),i=i.next}while(i!==t);return H(i)}function bn(t,e,n,i,r,o){let s=t;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Vn(s,a)){let l=wt(s,a);return s=H(s,s.next),l=H(l,l.next),se(s,e,n,i,r,o),void se(l,e,n,i,r,o)}a=a.next}s=s.next}while(s!==t)}function Dn(t,e){return t.x-e.x}function Un(t,e){if(e=function(n,i){let r=i;const o=n.x,s=n.y;let a,l=-1/0;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){const p=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(p<=o&&p>l){if(l=p,p===o){if(s===r.y)return r;if(s===r.next.y)return r.next}a=r.x<r.next.x?r:r.next}}r=r.next}while(r!==i);if(!a)return null;if(o===l)return a;const c=a,u=a.x,d=a.y;let f,_=1/0;r=a;do o>=r.x&&r.x>=u&&o!==r.x&&j(s<d?o:l,s,u,d,s<d?l:o,s,r.x,r.y)&&(f=Math.abs(s-r.y)/(o-r.x),ae(r,n)&&(f<_||f===_&&(r.x>a.x||r.x===a.x&&Bn(a,r)))&&(a=r,_=f)),r=r.next;while(r!==c);return a}(t,e),e){const n=wt(e,t);H(e,e.next),H(n,n.next)}}function Bn(t,e){return S(t.prev,t,e.prev)<0&&S(e.next,t,t.next)<0}function Ze(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Gn(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function j(t,e,n,i,r,o,s,a){return(r-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(i-a)-(n-s)*(e-a)>=0&&(n-s)*(o-a)-(r-s)*(i-a)>=0}function Vn(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(n,i){let r=n;do{if(r.i!==n.i&&r.next.i!==n.i&&r.i!==i.i&&r.next.i!==i.i&&Ot(r,r.next,n,i))return!0;r=r.next}while(r!==n);return!1}(t,e)&&(ae(t,e)&&ae(e,t)&&function(n,i){let r=n,o=!1;const s=(n.x+i.x)/2,a=(n.y+i.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&s<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(o=!o),r=r.next;while(r!==n);return o}(t,e)&&(S(t.prev,t,e.prev)||S(t,e.prev,e))||Se(t,e)&&S(t.prev,t,t.next)>0&&S(e.prev,e,e.next)>0)}function S(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Se(t,e){return t.x===e.x&&t.y===e.y}function Ot(t,e,n,i){const r=pe(S(t,e,n)),o=pe(S(t,e,i)),s=pe(S(n,i,t)),a=pe(S(n,i,e));return r!==o&&s!==a||!(r!==0||!fe(t,n,e))||!(o!==0||!fe(t,i,e))||!(s!==0||!fe(n,t,i))||!(a!==0||!fe(n,e,i))}function fe(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function pe(t){return t>0?1:t<0?-1:0}function ae(t,e){return S(t.prev,t,t.next)<0?S(t,e,t.next)>=0&&S(t,t.prev,e)>=0:S(t,e,t.prev)<0||S(t,t.next,e)<0}function wt(t,e){const n=new je(t.i,t.x,t.y),i=new je(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function xt(t,e,n,i){const r=new je(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function le(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function je(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hn(t,e,n){const i=function(o){const s={};for(const a of o)if(a.properties)for(const l in a.properties){const c=a.properties[l];s[l]=Kn(c,s[l])}return s}(t),r=Object.keys(i).filter(o=>i[o]!==Array);return function(o,s,a){const{pointPositionsCount:l,pointFeaturesCount:c,linePositionsCount:u,linePathsCount:d,lineFeaturesCount:f,polygonPositionsCount:_,polygonObjectsCount:p,polygonRingsCount:h,polygonFeaturesCount:m,propArrayTypes:A,coordLength:y}=s,{numericPropKeys:E=[],PositionDataType:v=Float32Array}=a,g=o[0]&&"id"in o[0],w=o.length>65535?Uint32Array:Uint16Array,P={type:"Point",positions:new v(l*y),globalFeatureIds:new w(l),featureIds:c>65535?new Uint32Array(l):new Uint16Array(l),numericProps:{},properties:[],fields:[]},F={type:"LineString",pathIndices:u>65535?new Uint32Array(d+1):new Uint16Array(d+1),positions:new v(u*y),globalFeatureIds:new w(u),featureIds:f>65535?new Uint32Array(u):new Uint16Array(u),numericProps:{},properties:[],fields:[]},N={type:"Polygon",polygonIndices:_>65535?new Uint32Array(p+1):new Uint16Array(p+1),primitivePolygonIndices:_>65535?new Uint32Array(h+1):new Uint16Array(h+1),positions:new v(_*y),triangles:[],globalFeatureIds:new w(_),featureIds:m>65535?new Uint32Array(_):new Uint16Array(_),numericProps:{},properties:[],fields:[]};for(const M of[P,F,N])for(const O of E){const I=A[O];M.numericProps[O]=new I(M.positions.length/y)}F.pathIndices[d]=u,N.polygonIndices[p]=_,N.primitivePolygonIndices[h]=_;const D={pointPosition:0,pointFeature:0,linePosition:0,linePath:0,lineFeature:0,polygonPosition:0,polygonObject:0,polygonRing:0,polygonFeature:0,feature:0};for(const M of o){const O=M.geometry,I=M.properties||{};switch(O.type){case"Point":Xn(O,P,D,y,I),P.properties.push(Me(I,E)),g&&P.fields.push({id:M.id}),D.pointFeature++;break;case"LineString":Wn(O,F,D,y,I),F.properties.push(Me(I,E)),g&&F.fields.push({id:M.id}),D.lineFeature++;break;case"Polygon":zn(O,N,D,y,I),N.properties.push(Me(I,E)),g&&N.fields.push({id:M.id}),D.polygonFeature++;break;default:throw new Error("Invalid geometry type")}D.feature++}return function(M,O,I,J){return{points:{...M,positions:{value:M.positions,size:J},globalFeatureIds:{value:M.globalFeatureIds,size:1},featureIds:{value:M.featureIds,size:1},numericProps:Ne(M.numericProps,1)},lines:{...O,positions:{value:O.positions,size:J},pathIndices:{value:O.pathIndices,size:1},globalFeatureIds:{value:O.globalFeatureIds,size:1},featureIds:{value:O.featureIds,size:1},numericProps:Ne(O.numericProps,1)},polygons:{...I,positions:{value:I.positions,size:J},polygonIndices:{value:I.polygonIndices,size:1},primitivePolygonIndices:{value:I.primitivePolygonIndices,size:1},triangles:{value:new Uint32Array(I.triangles),size:1},globalFeatureIds:{value:I.globalFeatureIds,size:1},featureIds:{value:I.featureIds,size:1},numericProps:Ne(I.numericProps,1)}}}(P,F,N,y)}(t,{propArrayTypes:i,...e},{numericPropKeys:r,PositionDataType:Float32Array})}function Xn(t,e,n,i,r){e.positions.set(t.data,n.pointPosition*i);const o=t.data.length/i;nt(e,r,n.pointPosition,o),e.globalFeatureIds.fill(n.feature,n.pointPosition,n.pointPosition+o),e.featureIds.fill(n.pointFeature,n.pointPosition,n.pointPosition+o),n.pointPosition+=o}function Wn(t,e,n,i,r){e.positions.set(t.data,n.linePosition*i);const o=t.data.length/i;nt(e,r,n.linePosition,o),e.globalFeatureIds.fill(n.feature,n.linePosition,n.linePosition+o),e.featureIds.fill(n.lineFeature,n.linePosition,n.linePosition+o);for(let s=0,a=t.indices.length;s<a;++s){const l=t.indices[s],c=s===a-1?t.data.length:t.indices[s+1];e.pathIndices[n.linePath++]=n.linePosition,n.linePosition+=(c-l)/i}}function zn(t,e,n,i,r){e.positions.set(t.data,n.polygonPosition*i);const o=t.data.length/i;nt(e,r,n.polygonPosition,o),e.globalFeatureIds.fill(n.feature,n.polygonPosition,n.polygonPosition+o),e.featureIds.fill(n.polygonFeature,n.polygonPosition,n.polygonPosition+o);for(let s=0,a=t.indices.length;s<a;++s){const l=n.polygonPosition;e.polygonIndices[n.polygonObject++]=l;const c=t.areas[s],u=t.indices[s],d=t.indices[s+1];for(let f=0,_=u.length;f<_;++f){const p=u[f],h=f===_-1?d===void 0?t.data.length:d[0]:u[f+1];e.primitivePolygonIndices[n.polygonRing++]=n.polygonPosition,n.polygonPosition+=(h-p)/i}kn(e,c,u,{startPosition:l,endPosition:n.polygonPosition,coordLength:i})}}function kn(t,e,n,{startPosition:i,endPosition:r,coordLength:o}){const s=i*o,a=r*o,l=t.positions.subarray(s,a),c=n[0],u=Nn(l,n.slice(1).map(d=>(d-c)/o),o,e);for(let d=0,f=u.length;d<f;++d)t.triangles.push(i+u[d])}function Ne(t,e){const n={};for(const i in t)n[i]={value:t[i],size:e};return n}function nt(t,e,n,i){for(const r in t.numericProps)if(r in e){const o=e[r];t.numericProps[r].fill(o,n,n+i)}}function Me(t,e){const n={};for(const i in t)e.includes(i)||(n[i]=t[i]);return n}function Kn(t,e){return e!==Array&&Number.isFinite(t)?e===Float64Array||Math.fround(t)!==t?Float64Array:Float32Array:Array}var Yn={read:function(t,e,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?r-1:0,f=n?-1:1,_=t[e+d];for(d+=f,o=_&(1<<-u)-1,_>>=-u,u+=a;u>0;o=256*o+t[e+d],d+=f,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+t[e+d],d+=f,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:1/0*(_?-1:1);s+=Math.pow(2,i),o-=c}return(_?-1:1)*s*Math.pow(2,o-i)},write:function(t,e,n,i,r,o){var s,a,l,c=8*o-r-1,u=(1<<c)-1,d=u>>1,f=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=i?0:o-1,p=i?1:-1,h=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+d>=1?f/l:f*Math.pow(2,1-d))*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,r),s+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,r),s=0));r>=8;t[n+_]=255&a,_+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;t[n+_]=255&s,_+=p,s/=256,c-=8);t[n+_-p]|=128*h}},bt=R,xe=Yn;function R(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}R.Varint=0,R.Fixed64=1,R.Bytes=2,R.Fixed32=5;var Et=typeof TextDecoder>"u"?null:new TextDecoder("utf8");function U(t){return t.type===R.Bytes?t.readVarint()+t.pos:t.pos+1}function K(t,e,n){return n?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function vt(t,e,n){var i=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));n.realloc(i);for(var r=n.pos-1;r>=t;r--)n.buf[r+i]=n.buf[r]}function Zn(t,e){for(var n=0;n<t.length;n++)e.writeVarint(t[n])}function jn(t,e){for(var n=0;n<t.length;n++)e.writeSVarint(t[n])}function qn(t,e){for(var n=0;n<t.length;n++)e.writeFloat(t[n])}function Qn(t,e){for(var n=0;n<t.length;n++)e.writeDouble(t[n])}function Jn(t,e){for(var n=0;n<t.length;n++)e.writeBoolean(t[n])}function $n(t,e){for(var n=0;n<t.length;n++)e.writeFixed32(t[n])}function ei(t,e){for(var n=0;n<t.length;n++)e.writeSFixed32(t[n])}function ti(t,e){for(var n=0;n<t.length;n++)e.writeFixed64(t[n])}function ni(t,e){for(var n=0;n<t.length;n++)e.writeSFixed64(t[n])}function Ee(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function Y(t,e,n){t[n]=e,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24}function ht(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ii(t){let e=0;for(let n,i,r=0,o=t.length-1;r<t.length;o=r++)n=t[r],i=t[o],e+=(i[0]-n[0])*(n[1]+i[1]);return e}function ri(t,e,n){e&&n&&(t===1?e.id=n.readVarint():t===2?function(i,r){const o=i.readVarint()+i.pos;for(;i.pos<o;){const s=r._keys[i.readVarint()],a=r._values[i.readVarint()];r.properties[s]=a}}(n,e):t===3?e.type=n.readVarint():t===4&&(e._geometry=n.pos))}R.prototype={destroy:function(){this.buf=null},readFields:function(t,e,n){for(n=n||this.length;this.pos<n;){var i=this.readVarint(),r=i>>3,o=this.pos;this.type=7&i,t(r,e,this),this.pos===o&&this.skip(i)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Ee(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=ht(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Ee(this.buf,this.pos)+4294967296*Ee(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=Ee(this.buf,this.pos)+4294967296*ht(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=xe.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=xe.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,n,i=this.buf;return e=127&(n=i[this.pos++]),n<128?e:(e|=(127&(n=i[this.pos++]))<<7,n<128?e:(e|=(127&(n=i[this.pos++]))<<14,n<128?e:(e|=(127&(n=i[this.pos++]))<<21,n<128?e:function(r,o,s){var a,l,c=s.buf;if(l=c[s.pos++],a=(112&l)>>4,l<128||(l=c[s.pos++],a|=(127&l)<<3,l<128)||(l=c[s.pos++],a|=(127&l)<<10,l<128)||(l=c[s.pos++],a|=(127&l)<<17,l<128)||(l=c[s.pos++],a|=(127&l)<<24,l<128)||(l=c[s.pos++],a|=(1&l)<<31,l<128))return K(r,a,o);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(n=i[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&Et?function(n,i,r){return Et.decode(n.subarray(i,r))}(this.buf,e,t):function(n,i,r){for(var o="",s=i;s<r;){var a,l,c,u=n[s],d=null,f=u>239?4:u>223?3:u>191?2:1;if(s+f>r)break;f===1?u<128&&(d=u):f===2?(192&(a=n[s+1]))==128&&(d=(31&u)<<6|63&a)<=127&&(d=null):f===3?(a=n[s+1],l=n[s+2],(192&a)==128&&(192&l)==128&&((d=(15&u)<<12|(63&a)<<6|63&l)<=2047||d>=55296&&d<=57343)&&(d=null)):f===4&&(a=n[s+1],l=n[s+2],c=n[s+3],(192&a)==128&&(192&l)==128&&(192&c)==128&&((d=(15&u)<<18|(63&a)<<12|(63&l)<<6|63&c)<=65535||d>=1114112)&&(d=null)),d===null?(d=65533,f=1):d>65535&&(d-=65536,o+=String.fromCharCode(d>>>10&1023|55296),d=56320|1023&d),o+=String.fromCharCode(d),s+=f}return o}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==R.Bytes)return t.push(this.readVarint(e));var n=U(this);for(t=t||[];this.pos<n;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==R.Bytes)return t.push(this.readSVarint());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==R.Bytes)return t.push(this.readBoolean());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==R.Bytes)return t.push(this.readFloat());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==R.Bytes)return t.push(this.readDouble());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==R.Bytes)return t.push(this.readFixed32());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==R.Bytes)return t.push(this.readSFixed32());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==R.Bytes)return t.push(this.readFixed64());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==R.Bytes)return t.push(this.readSFixed64());var e=U(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===R.Varint)for(;this.buf[this.pos++]>127;);else if(e===R.Bytes)this.pos=this.readVarint()+this.pos;else if(e===R.Fixed32)this.pos+=4;else{if(e!==R.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var n=new Uint8Array(e);n.set(this.buf),this.buf=n,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),Y(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),Y(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),Y(this.buf,-1&t,this.pos),Y(this.buf,Math.floor(23283064365386963e-26*t),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),Y(this.buf,-1&t,this.pos),Y(this.buf,Math.floor(23283064365386963e-26*t),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(e,n){var i,r;if(e>=0?(i=e%4294967296|0,r=e/4294967296|0):(r=~(-e/4294967296),4294967295^(i=~(-e%4294967296))?i=i+1|0:(i=0,r=r+1|0)),e>=18446744073709552e3||e<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");n.realloc(10),function(o,s,a){a.buf[a.pos++]=127&o|128,o>>>=7,a.buf[a.pos++]=127&o|128,o>>>=7,a.buf[a.pos++]=127&o|128,o>>>=7,a.buf[a.pos++]=127&o|128,o>>>=7,a.buf[a.pos]=127&o}(i,0,n),function(o,s){var a=(7&o)<<4;s.buf[s.pos++]|=a|((o>>>=3)?128:0),o&&(s.buf[s.pos++]=127&o|((o>>>=7)?128:0),o&&(s.buf[s.pos++]=127&o|((o>>>=7)?128:0),o&&(s.buf[s.pos++]=127&o|((o>>>=7)?128:0),o&&(s.buf[s.pos++]=127&o|((o>>>=7)?128:0),o&&(s.buf[s.pos++]=127&o)))))}(r,n)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(!!t)},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(i,r,o){for(var s,a,l=0;l<r.length;l++){if((s=r.charCodeAt(l))>55295&&s<57344){if(!a){s>56319||l+1===r.length?(i[o++]=239,i[o++]=191,i[o++]=189):a=s;continue}if(s<56320){i[o++]=239,i[o++]=191,i[o++]=189,a=s;continue}s=a-55296<<10|s-56320|65536,a=null}else a&&(i[o++]=239,i[o++]=191,i[o++]=189,a=null);s<128?i[o++]=s:(s<2048?i[o++]=s>>6|192:(s<65536?i[o++]=s>>12|224:(i[o++]=s>>18|240,i[o++]=s>>12&63|128),i[o++]=s>>6&63|128),i[o++]=63&s|128)}return o}(this.buf,t,this.pos);var n=this.pos-e;n>=128&&vt(e,n,this),this.pos=e-1,this.writeVarint(n),this.pos+=n},writeFloat:function(t){this.realloc(4),xe.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),xe.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var n=0;n<e;n++)this.buf[this.pos++]=t[n]},writeRawMessage:function(t,e){this.pos++;var n=this.pos;t(e,this);var i=this.pos-n;i>=128&&vt(n,i,this),this.pos=n-1,this.writeVarint(i),this.pos+=i},writeMessage:function(t,e,n){this.writeTag(t,R.Bytes),this.writeRawMessage(e,n)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Zn,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,jn,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,Jn,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,qn,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,Qn,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,$n,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,ei,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,ti,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,ni,e)},writeBytesField:function(t,e){this.writeTag(t,R.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,R.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,R.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,R.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,R.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,R.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,R.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,R.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,R.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,R.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,!!e)}};class it{static get types(){return["Unknown","Point","LineString","Polygon"]}constructor(e,n,i,r,o){T(this,"properties",void 0),T(this,"extent",void 0),T(this,"type",void 0),T(this,"id",void 0),T(this,"_pbf",void 0),T(this,"_geometry",void 0),T(this,"_keys",void 0),T(this,"_values",void 0),this.properties={},this.extent=i,this.type=0,this.id=null,this._pbf=e,this._geometry=-1,this._keys=r,this._values=o,e.readFields(ri,this,n)}loadGeometry(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos;let i=1,r=0,o=0,s=0;const a=[];let l;for(;e.pos<n;){if(r<=0){const c=e.readVarint();i=7&c,r=c>>3}if(r--,i===1||i===2)o+=e.readSVarint(),s+=e.readSVarint(),i===1&&(l&&a.push(l),l=[]),l&&l.push([o,s]);else{if(i!==7)throw new Error("unknown command ".concat(i));l&&l.push(l[0].slice())}}return l&&a.push(l),a}bbox(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos;let i=1,r=0,o=0,s=0,a=1/0,l=-1/0,c=1/0,u=-1/0;for(;e.pos<n;){if(r<=0){const d=e.readVarint();i=7&d,r=d>>3}if(r--,i===1||i===2)o+=e.readSVarint(),s+=e.readSVarint(),o<a&&(a=o),o>l&&(l=o),s<c&&(c=s),s>u&&(u=s);else if(i!==7)throw new Error("unknown command ".concat(i))}return[a,c,l,u]}_toGeoJSON(e){let n,i,r=this.loadGeometry(),o=it.types[this.type];switch(this.type){case 1:const a=[];for(n=0;n<r.length;n++)a[n]=r[n][0];r=a,e(r,this);break;case 2:for(n=0;n<r.length;n++)e(r[n],this);break;case 3:for(r=function(l){const c=l.length;if(c<=1)return[l];const u=[];let d,f;for(let _=0;_<c;_++){const p=ii(l[_]);p!==0&&(f===void 0&&(f=p<0),f===p<0?(d&&u.push(d),d=[l[_]]):d&&d.push(l[_]))}return d&&u.push(d),u}(r),n=0;n<r.length;n++)for(i=0;i<r[n].length;i++)e(r[n][i],this)}r.length===1?r=r[0]:o="Multi".concat(o);const s={type:"Feature",geometry:{type:o,coordinates:r},properties:this.properties};return this.id!==null&&(s.id=this.id),s}toGeoJSON(e){if(typeof e=="function")return this._toGeoJSON(e);const{x:n,y:i,z:r}=e,o=this.extent*Math.pow(2,r),s=this.extent*n,a=this.extent*i;return this._toGeoJSON(function(l){for(let c=0;c<l.length;c++){const u=l[c];u[0]=360*(u[0]+s)/o-180;const d=180-360*(u[1]+a)/o;u[1]=360/Math.PI*Math.atan(Math.exp(d*Math.PI/180))-90}})}}class oi{constructor(e,n){T(this,"version",void 0),T(this,"name",void 0),T(this,"extent",void 0),T(this,"length",void 0),T(this,"_pbf",void 0),T(this,"_keys",void 0),T(this,"_values",void 0),T(this,"_features",void 0),this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(si,this,n),this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const n=this._pbf.readVarint()+this._pbf.pos;return new it(this._pbf,n,this.extent,this._keys,this._values)}}function si(t,e,n){e&&n&&(t===15?e.version=n.readVarint():t===1?e.name=n.readString():t===5?e.extent=n.readVarint():t===2?e._features.push(n.pos):t===3?e._keys.push(n.readString()):t===4&&e._values.push(function(i){let r=null;const o=i.readVarint()+i.pos;for(;i.pos<o;){const s=i.readVarint()>>3;r=s===1?i.readString():s===2?i.readFloat():s===3?i.readDouble():s===4?i.readVarint64():s===5?i.readVarint():s===6?i.readSVarint():s===7?i.readBoolean():null}return r}(n)))}class ai{constructor(e,n){T(this,"layers",void 0),this.layers=e.readFields(li,{},n)}}function li(t,e,n){if(t===3&&n){const i=new oi(n,n.readVarint()+n.pos);i.length&&e&&(e[i.name]=i)}}function ci(t,e,n){e&&n&&(t===1?e.id=n.readVarint():t===2?function(i,r){const o=i.readVarint()+i.pos;for(;i.pos<o;){const s=r._keys[i.readVarint()],a=r._values[i.readVarint()];r.properties[s]=a}}(n,e):t===3?e.type=n.readVarint():t===4&&(e._geometry=n.pos))}let Tt,W,Oe,ve,we,be,ee;class ui{constructor(e,n,i,r,o,s){T(this,"properties",void 0),T(this,"extent",void 0),T(this,"type",void 0),T(this,"id",void 0),T(this,"_pbf",void 0),T(this,"_geometry",void 0),T(this,"_keys",void 0),T(this,"_values",void 0),T(this,"_geometryInfo",void 0),this.properties={},this.extent=i,this.type=0,this.id=null,this._pbf=e,this._geometry=-1,this._keys=r,this._values=o,this._geometryInfo=s,e.readFields(ci,this,n)}loadGeometry(){const e=this._pbf;e.pos=this._geometry,Tt=e.readVarint()+e.pos,W=1,ve=0,we=0,be=0,ee=0;const n=[],i=[];for(;e.pos<Tt;)if(ve<=0&&(Oe=e.readVarint(),W=7&Oe,ve=Oe>>3),ve--,W===1||W===2)we+=e.readSVarint(),be+=e.readSVarint(),W===1&&n.push(ee),i.push(we,be),ee+=2;else{if(W!==7)throw new Error("unknown command ".concat(W));if(ee>0){const r=n[n.length-1];i.push(i[r],i[r+1]),ee+=2}}return{data:i,indices:n}}_toBinaryCoordinates(e){const n=this.loadGeometry();let i;switch(e(n.data,this),this.type){case 1:this._geometryInfo.pointFeaturesCount++,this._geometryInfo.pointPositionsCount+=n.indices.length,i={type:"Point",...n};break;case 2:this._geometryInfo.lineFeaturesCount++,this._geometryInfo.linePathsCount+=n.indices.length,this._geometryInfo.linePositionsCount+=n.data.length/2,i={type:"LineString",...n};break;case 3:i=function(o){const s=o.indices.length,a="Polygon";if(s<=1)return{type:a,data:o.data,areas:[[Ye(o.data)]],indices:[o.indices]};const l=[],c=[];let u,d=[],f=[],_=0;for(let p,h,m=0;m<s;m++){h=o.indices[m]-_,p=o.indices[m+1]-_||o.data.length;const A=Ye(o.data.slice(h,p));if(A!==0)u===void 0&&(u=A<0),u===A<0?(f.length&&(l.push(d),c.push(f)),f=[h],d=[A]):(d.push(A),f.push(h));else{const y=o.data.slice(0,h),E=o.data.slice(p);o.data=y.concat(E),_+=p-h}}return d&&l.push(d),f.length&&c.push(f),{type:a,areas:l,indices:c,data:o.data}}(n),this._geometryInfo.polygonFeaturesCount++,this._geometryInfo.polygonObjectsCount+=i.indices.length;for(const o of i.indices)this._geometryInfo.polygonRingsCount+=o.length;this._geometryInfo.polygonPositionsCount+=i.data.length/2;break;default:throw new Error("Invalid geometry type: ".concat(this.type))}const r={type:"Feature",geometry:i,properties:this.properties};return this.id!==null&&(r.id=this.id),r}toBinaryCoordinates(e){if(typeof e=="function")return this._toBinaryCoordinates(e);const{x:n,y:i,z:r}=e,o=this.extent*Math.pow(2,r),s=this.extent*n,a=this.extent*i;return this._toBinaryCoordinates(l=>function(c,u,d,f){for(let _=0,p=c.length;_<p;_+=2){c[_]=360*(c[_]+u)/f-180;const h=180-360*(c[_+1]+d)/f;c[_+1]=360/Math.PI*Math.atan(Math.exp(h*Math.PI/180))-90}}(l,s,a,o))}}class di{constructor(e,n){T(this,"version",void 0),T(this,"name",void 0),T(this,"extent",void 0),T(this,"length",void 0),T(this,"_pbf",void 0),T(this,"_keys",void 0),T(this,"_values",void 0),T(this,"_features",void 0),this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(_i,this,n),this.length=this._features.length}feature(e,n){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const i=this._pbf.readVarint()+this._pbf.pos;return new ui(this._pbf,i,this.extent,this._keys,this._values,n)}}function _i(t,e,n){e&&n&&(t===15?e.version=n.readVarint():t===1?e.name=n.readString():t===5?e.extent=n.readVarint():t===2?e._features.push(n.pos):t===3?e._keys.push(n.readString()):t===4&&e._values.push(function(i){let r=null;const o=i.readVarint()+i.pos;for(;i.pos<o;){const s=i.readVarint()>>3;r=s===1?i.readString():s===2?i.readFloat():s===3?i.readDouble():s===4?i.readVarint64():s===5?i.readVarint():s===6?i.readSVarint():s===7?i.readBoolean():null}return r}(n)))}class fi{constructor(e,n){T(this,"layers",void 0),this.layers=e.readFields(pi,{},n)}}function pi(t,e,n){if(t===3&&n){const i=new di(n,n.readVarint()+n.pos);i.length&&e&&(e[i.name]=i)}}function Rt(t,e){var n,i;const r=function(s){var a;if(s==null||!s.mvt)throw new Error("mvt options required");const l=((a=s.mvt)===null||a===void 0?void 0:a.coordinates)==="wgs84",{tileIndex:c}=s.mvt,u=c&&Number.isFinite(c.x)&&Number.isFinite(c.y)&&Number.isFinite(c.z);if(l&&!u)throw new Error("MVT Loader: WGS84 coordinates need tileIndex property");return s.mvt}(e),o=(e==null||(n=e.gis)===null||n===void 0?void 0:n.format)||(e==null||(i=e.mvt)===null||i===void 0?void 0:i.shape);switch(o){case"columnar-table":return{shape:"columnar-table",data:gt(t,r)};case"geojson-row-table":return{shape:"geojson-row-table",data:mt(t,r)};case"geojson":return mt(t,r);case"binary-geometry":case"binary":return gt(t,r);default:throw new Error(o)}}function gt(t,e){const[n,i]=function(o,s){const a=[],l={coordLength:2,pointPositionsCount:0,pointFeaturesCount:0,linePositionsCount:0,linePathsCount:0,lineFeaturesCount:0,polygonPositionsCount:0,polygonObjectsCount:0,polygonRingsCount:0,polygonFeaturesCount:0};if(o.byteLength<=0)return[a,l];const c=new fi(new bt(o));return(s&&Array.isArray(s.layers)?s.layers:Object.keys(c.layers)).forEach(u=>{const d=c.layers[u];if(d)for(let f=0;f<d.length;f++){const _=Ei(d.feature(f,l),s,u);a.push(_)}}),[a,l]}(t,e),r=Hn(n,i);return r.byteLength=t.byteLength,r}function mt(t,e){if(t.byteLength<=0)return[];const n=[],i=new ai(new bt(t));return(Array.isArray(e.layers)?e.layers:Object.keys(i.layers)).forEach(r=>{const o=i.layers[r];if(o)for(let s=0;s<o.length;s++){const a=xi(o.feature(s),e,r);n.push(a)}}),n}function xi(t,e,n){const i=t.toGeoJSON(e.coordinates==="wgs84"?e.tileIndex:vi);return e.layerProperty&&(i.properties[e.layerProperty]=n),i}function Ei(t,e,n){const i=t.toBinaryCoordinates(e.coordinates==="wgs84"?e.tileIndex:hi);return e.layerProperty&&i.properties&&(i.properties[e.layerProperty]=n),i}function vi(t,e){const{extent:n}=e;for(let i=0;i<t.length;i++){const r=t[i];r[0]/=n,r[1]/=n}}function hi(t,e){const{extent:n}=e;for(let i=0,r=t.length;i<r;++i)t[i]/=n}const Ti={name:"Mapbox Vector Tile",id:"mvt",module:"mvt",version:"3.2.3",extensions:["mvt","pbf"],mimeTypes:["application/vnd.mapbox-vector-tile","application/x-protobuf"],worker:!0,category:"geometry",options:{mvt:{shape:"geojson",coordinates:"local",layerProperty:"layerName",layers:void 0,tileIndex:null}},parse:async(t,e)=>Rt(t,e),parseSync:Rt,binary:!0};var Ri={wireframe:!1,extensions:[new class extends Q{getShaders(){return{inject:{"vs:#decl":`
            varying vec2 vPosition;
        `,"vs:#main-end":`
            vPosition = vertexPositions;
        `,"fs:#decl":`
            varying vec2 vPosition;
        `,"fs:DECKGL_FILTER_COLOR":{order:100,injection:`
                color = vec4(color.xyz, clamp(color.w * pow(vPosition.y,1.),0.1,1.));
                `}}}}}],loaders:[Ti]};class qe extends k{}qe.layerName="GradientBuildingLayer",qe.defaultProps=Ri;var gi={texture:{type:"image",value:null,async:!0},wireframe:!1,material:!1,extensions:[new class extends Q{getShaders(){return{inject:{"vs:#decl":`
        attribute vec2 uv;
        varying vec2 vPosition;
        `,"vs:#main-end":`
        #ifdef IS_SIDE_VERTEX   
            vPosition = (1.- vertexPositions);    
        #else
            vPosition = uv;
        #endif
        `,"fs:#decl":`
            uniform sampler2D texture;

            varying vec2 vPosition;
        `,"fs:DECKGL_FILTER_COLOR":{order:1,injection:`
                    color =  texture2D(texture, vPosition);
                `}}}}}],parameters:{[x.BLEND]:!0,[x.BLEND_SRC_RGB]:x.SRC_ALPHA,[x.BLEND_DST_RGB]:x.ONE_MINUS_SRC_ALPHA,[x.BLEND_EQUATION]:x.FUNC_ADD}};class Qe extends k{initializeState(e){super.initializeState(e),this.setState({u_time:0}),this.getAttributeManager().add({uv:{size:2,type:x.DOUBLE,accessor:(n,i)=>{var r=this.props.getPolygon(n),o=-1/0,s=-1/0,a=1/0,l=1/0;r.forEach(d=>{var[f,_]=d;f<l&&(l=f),f>s&&(s=f),_<a&&(a=_),_>o&&(o=_)});var c=s-l,u=o-a;return r.map(d=>{var[f,_]=d;return[(f-l)/c,(_-a)/u]})}}})}draw(e){var{texture:n}=this.props,i=Object.assign({},e.uniforms,{texture:n});super.draw(Object.assign({},e,{uniforms:i}))}}Qe.layerName="TextureBuildingLayer",Qe.defaultProps=gi;var mi={wireframe:!1,extensions:[new class extends Q{getShaders(){return{inject:{"vs:#decl":`
                    varying vec2 vPosition;
                    varying vec3 vNormal;
                `,"vs:#main-end":`
                    vPosition = vertexPositions;
                    vNormal = geometry.normal;
                `,"fs:#decl":`
                
                varying vec2 vPosition;
                varying vec3 vNormal;


                vec2 tile(vec2 _st, float _zoom){
                    _st *= _zoom;
                    return fract(_st);
                }
                
                float box(vec2 _st, vec2 _size, float _smoothEdges){
                    _size = vec2(0.5)-_size*0.5;
                    vec2 aa = vec2(_smoothEdges*0.5);
                    vec2 uv = smoothstep(_size,_size+aa,_st);
                    uv *= smoothstep(_size,_size+aa,vec2(1.0)-_st);
                    return uv.x*uv.y;
                }

                vec4 Effect()
                {

                    vec2 uv = vPosition.xy;

                    uv = tile(uv,4.);

                    return vec4(vec3(box(uv,vec2(0.5),0.01)*.15),1.);

                }
                `,"fs:DECKGL_FILTER_COLOR":{order:100,injection:`
                    if(vNormal.z > 0.){
                        color = color;
                    }
                    else {
                        color = color + Effect();
                    }
                `}}}}}]};class Je extends k{}Je.layerName="WindowBuildingLayer",Je.defaultProps=mi;var Ai={styleName:"The Matrix",wireframe:!1,filled:!0,extruded:!0,extensions:[new class extends Q{getShaders(){return{inject:{"vs:#decl":`
                    varying vec2 vPosition;
                    varying vec3 vNormal;
                    varying float vRatio;
                `,"vs:#main-end":`
                    vPosition = vertexPositions;
                    vNormal = geometry.normal;
                    #ifdef IS_SIDE_VERTEX
                        //vRatio = distance(nextPositions,instancePositions)*200000./instanceElevations;
                        vRatio = distance(radians(nextPositions),radians(instancePositions))*230000./instanceElevations;
                    #endif
                `,"fs:#decl":`
                
                uniform float u_time;
                uniform float u_style;

                varying vec2 vPosition;
                varying vec3 vNormal;
                varying float vRatio;

                float random (in float x) {
                    return fract(sin(x)*1e4);
                }
                
                float random (in vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
                }
                
                float drawRect(in vec2 st, in vec2 bottomleft, in float xl, in float yl){
                        //draw shape
                        vec2 leftBottom = step(vec2(0.0), st-bottomleft);
                        vec2 rightTop = step(vec2(0.0),bottomleft+vec2(xl,yl)-st);
                        float rec = leftBottom.x*leftBottom.y*rightTop.x*rightTop.y;
                        return rec;
                    }
                
                float pattern(vec2 st, vec2 v, float t) {
                    vec2 fractUv = fract(st+v);
                    vec2 p = floor(st+v);
                    
                    float pct = smoothstep(t-0.2,t+0.2, random(100.+p*.000001)+random(p.y)*0.5 );
                    if(mod(floor(sin(p.y+u_time)),2.0)==1.0){
                        pct += drawRect(fractUv, vec2(0.0,0.0),1.0,0.1);
                        pct += drawRect(fractUv, vec2(0.0),0.2,1.0);
                        pct += drawRect(fractUv, vec2(0.7,0.0),0.3,1.0);
                        pct += drawRect(fractUv, vec2(0.35,0.20),0.15,0.7);
                    }else{
                        pct += drawRect(fractUv, vec2(0.0),0.3,1.0);
                        pct += drawRect(fractUv, vec2(0.6,0.0),0.4,1.0);
                        pct += drawRect(fractUv, vec2(0.0,0.0),1.0,0.1);
                    }
                    return pct;
                }

                bool Effect()
                {

                    //float ratio = .5;
                    float ratio = 5.;

                    vec2 uv = vPosition;
                    uv = uv*2.0-1.0;
                    uv.x *= 2.* vRatio;
                    uv.y = 1.- uv.y;

                    //grid
                    vec2 grid = vec2(5./ vRatio);
                    uv *= grid;
                    
                    
                    vec2 intUv = floor(uv);
                    vec2 velocity = vec2(0.0,20.0)*random(intUv.x)+vec2(0.0,1.0);
                    
                    vec3 col = vec3(0.0);
                    col = 1.0- vec3( pattern(uv,velocity*u_time, 0.33));
                    
                    return col.g > .5;
                }

                #define PI2 6.28318530718
                #define PI 3.1416

                float vorocloud(vec2 p){
                    float f = 0.0;
                    vec2 pp = cos(vec2(p.x * 14.0, (16.0 * p.y + cos(floor(p.x * 30.0)) + u_time * PI2)) );
                    p = cos(p * 12.1 + pp * 10.0 + 0.5 * cos(pp.x * 10.0));
                    
                    vec2 pts[4];
                    
                    pts[0] = vec2(0.5, 0.6);
                    pts[1] = vec2(-0.4, 0.4);
                    pts[2] = vec2(0.2, -0.7);
                    pts[3] = vec2(-0.3, -0.4);
                    
                    float d = 5.0;
                    
                    for(int i = 0; i < 4; i++){
                        pts[i].x += 0.03 * cos(float(i)) + p.x;
                        pts[i].y += 0.03 * sin(float(i)) + p.y;
                        d = min(d, distance(pts[i], pp));
                    }
                    
                    f = 2.0 * pow(1.0 - 0.3 * d, 13.0);
                    
                    f = min(f, 1.0);
                    
                    return f;
                }

                vec4 scene(vec2 UV){
                    float x = UV.x;
                    float y = 1.-UV.y;
                    
                    vec2 p = vec2(x, y) - vec2(0.1);
                    
                    vec4 col = vec4(0.0);
                    col.g += 0.02;
                    
                    float v = vorocloud(p);
                    v = 0.2 * floor(v * 5.0);
                    
                    col.r += 0.1 * v;
                    col.g += 0.6 * v;
                    col.b += 0.5 * pow(v, 5.0);
                    
                    
                    v = vorocloud(p * 2.0);
                    v = 0.2 * floor(v * 5.0);
                    
                    col.r += 0.1 * v;
                    col.g += 0.2 * v;
                    col.b += 0.01 * pow(v, 5.0);
                    
                    col.a = 1.0;
                    
                    return col;
                }


                vec4 Effect1( )
                {
                    return scene(vPosition);
                }
                `,"fs:DECKGL_FILTER_COLOR":{order:100,injection:`
                    if(vNormal.z > 0.){
                        color.a = 0.;
                    }
                    else {
                        if(u_style>0.5){
                            color = mix(color,Effect1(),.8);
                        }else{
                            if(Effect()){
                                color = mix(color,vec4(1.,1.,1.,1.),.8);
                            }
                        }
                        color.a = 1. - vPosition.y;
                    }
                `}}}}}],parameters:{[x.BLEND]:!0,[x.BLEND_EQUATION]:x.FUNC_ADD}};class $e extends k{initializeState(e){super.initializeState(e),this.setState({u_time:100})}draw(e){var{styleName:n,elevationScale:i=1}=this.props,{u_time:r}=this.state;e.uniforms=L(L({},e.uniforms),{},{u_time:r,u_style:n==="The Matrix"?0:1}),this.setState({u_time:r+.1/i}),super.draw(e)}}$e.layerName="FlowBuildingLayer",$e.defaultProps=Ai;var Ii={SnowLayer:class{constructor(t){return this.id=t||"snowLayer",this.type="custom",this._iTime=0,this.program=void 0,this}onAdd(t,e){this._map=t,this.program=new Fe(e,`precision mediump float;
#define GLSLIFY 1
uniform float  iTime;uniform vec2  iResolution;void main(){float snow=0.0;float gradient=(1.0-float(gl_FragCoord.y/iResolution.x))*0.4;float random=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);for(int k=0;k<6;k++){for(int i=0;i<12;i++){float cellSize=2.0+(float(i)*3.0);float downSpeed=0.3+(sin(iTime*0.4+float(k+i*20))+1.0)*0.00008;vec2 uv=(gl_FragCoord.xy/iResolution.x)+vec2(0.01*sin((iTime+float(k*6185))*0.6+float(i))*(5.0/float(i)),downSpeed*(iTime+float(k*1352))*(1.0/float(i)));vec2 uvStep=(ceil((uv)*cellSize-vec2(0.5,0.5))/cellSize);float x=fract(sin(dot(uvStep.xy,vec2(12.9898+float(k)*12.0,78.233+float(k)*315.156)))*43758.5453+float(k)*12.0)-0.5;float y=fract(sin(dot(uvStep.xy,vec2(62.2364+float(k)*23.0,94.674+float(k)*95.0)))*62159.8432+float(k)*12.0)-0.5;float randomMagnitude1=sin(iTime*2.5)*0.7/cellSize;float randomMagnitude2=cos(iTime*2.5)*0.7/cellSize;float d=5.0*distance((uvStep.xy+vec2(x*sin(y),y)*randomMagnitude1+vec2(y,x)*randomMagnitude2),uv.xy);float omiVal=fract(sin(dot(uvStep.xy,vec2(32.4691,94.615)))*31572.1684);if(omiVal<0.08?true:false){float newd=(x+1.0)*0.4*clamp(1.9-d*(15.0+(x*6.3))*(cellSize/1.4),0.0,1.0);snow+=newd;}}}gl_FragColor=vec4(snow)+gradient*vec4(0.4,0.8,1.0,0.0)+random*0.01;}`)}render(t,e){var n=this._map.getCanvas();this._iTime+=.01,this.program.draw({uniforms:{iResolution:[n.width,n.height],iTime:this._iTime}}),t.clear(t.DEPTH_BUFFER_BIT),this._map.triggerRepaint()}onRemove(){this.program.destroy()}},RainLayer:class{constructor(t){return this.id=t||"rainLayer",this.type="custom",this._iTime=0,this.program=void 0,this}onAdd(t,e){this._map=t,this.program=new Fe(e,`precision mediump float;
#define GLSLIFY 1
uniform float  iTime;uniform vec2  iResolution;float random(in vec2 uv){return fract(sin(dot(uv.xy,vec2(12.9898,78.233)))*43758.5453123);}float noise(in vec2 uv){vec2 i=floor(uv);vec2 f=fract(uv);f=f*f*(3.-2.*f);float lb=random(i+vec2(0.,0.));float rb=random(i+vec2(1.,0.));float lt=random(i+vec2(0.,1.));float rt=random(i+vec2(1.,1.));return mix(mix(lb,rb,f.x),mix(lt,rt,f.x),f.y);}float rain(vec2 uv){float travelTime=(iTime*0.2)+0.1;vec2 tiling=vec2(1.,.01);vec2 offset=vec2(travelTime*0.5+uv.x*0.2,travelTime*0.2);vec2 st=uv*tiling+offset;float rain=0.1;float f=noise(st*200.5)*noise(st*225.5);f=clamp(pow(abs(f),15.0)*2.5*(rain*rain*500.0),0.0,0.25);return f;}void main(){vec2 uv=gl_FragCoord.xy/iResolution.xy;uv.x*=iResolution.x/iResolution.y;float rain=rain(uv);gl_FragColor=vec4(step(0.1,rain))*rain;}`)}render(t,e){var n=this._map.getCanvas();this._iTime+=.01,this.program.draw({uniforms:{iResolution:[n.width,n.height],iTime:this._iTime}}),t.clear(t.DEPTH_BUFFER_BIT),this._map.triggerRepaint()}onRemove(){this.program.destroy()}},FireLayer:class{constructor(t){return this.id=t||"fireLayer",this.type="custom",this._iTime=0,this.program=void 0,this}onAdd(t,e){Re(e),e._version=1,this._map=t,this.offScreenProgram=new Fe(e,`
            precision mediump float;
            uniform   float  iTime;
            uniform   vec2  iResolution;

            vec2 hash( vec2 p )
            {
                p = vec2( dot(p,vec2(127.1,311.7)),
                        dot(p,vec2(269.5,183.3)) );
                return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }

            float noise( in vec2 p )
            {
                const float K1 = 0.366025404; // (sqrt(3)-1)/2;
                const float K2 = 0.211324865; // (3-sqrt(3))/6;
                
                vec2 i = floor( p + (p.x+p.y)*K1 );
                
                vec2 a = p - i + (i.x+i.y)*K2;
                vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
                vec2 b = a - o + K2;
                vec2 c = a - 1.0 + 2.0*K2;
                
                vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
                
                vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
                
                return dot( n, vec3(70.0) );
            }

            float fbm(vec2 uv)
            {
                float f;
                mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );
                f  = 0.5000*noise( uv ); uv = m*uv;
                f += 0.2500*noise( uv ); uv = m*uv;
                f += 0.1250*noise( uv ); uv = m*uv;
                f += 0.0625*noise( uv ); uv = m*uv;
                f = 0.5 + 0.5*f;
                return f;
            }
            void main() {
                vec2 uv = gl_FragCoord.xy / iResolution.xy;
                vec2 q = uv;
                q.x *= 5.;
                q.y *= 2.;
                float strength = floor(q.x+1.);
                float T3 = max(3.,1.25*strength)*iTime;
                q.x = mod(q.x,1.)-0.5;
                q.y -= 0.25;
                float n = fbm(strength*q - vec2(0,T3));
                float c = 1. - 16. * pow( max( 0., length(q*vec2(1.8+q.y*1.5,.75) ) - n * max( 0., q.y+.25 ) ),1.2 );
                float c1 = n * c * (1.5-pow(2.50*uv.y,4.));
                c1=clamp(c1,0.,1.);

                vec3 col = vec3(1.5*c1, 1.5*c1*c1*c1, c1*c1*c1*c1*c1*c1);
                
                float a = c * (1.-pow(uv.y,3.));
                if( a>0. ) gl_FragColor = vec4( mix(vec3(0.),col,a), 1.0);
                else gl_FragColor =vec4(0.1);
            }
        `),this.OffScreenFramebuffer=new St(e,{width:1024,height:1024,color:!0,depth:!1,attachments:{[x.COLOR_ATTACHMENT0]:new B(e,{format:x.RGBA,pixels:null,width:1024,height:1024,mipmaps:!1,parameters:{[x.TEXTURE_MIN_FILTER]:x.LINEAR,[x.TEXTURE_MAG_FILTER]:x.LINEAR,[x.TEXTURE_WRAP_S]:x.CLAMP_TO_EDGE,[x.TEXTURE_WRAP_T]:x.CLAMP_TO_EDGE}})}}),this.model=new b(e,{vs:`
                attribute vec3 a_pos;
                attribute vec2 a_texCoods;
                uniform mat4 uMatrix;
                varying vec2 vPos;
                void main() {
                    gl_Position = uMatrix * vec4(a_pos, 1.0);
                    vPos = a_texCoods;
                }`,fs:`
                precision highp float;
                uniform sampler2D  uTexture;
                uniform   vec2  iResolution;
                varying vec2 vPos;
                
                void main() {
                    vec2 p = gl_FragCoord.xy/iResolution;
                    vec4 result = texture2D(uTexture, vPos);
                    if(result.r > 0.2) 
                        gl_FragColor = result; 
                    else  
                        gl_FragColor = vec4(0.);
                    
                }
            `,geometry:new q({drawMode:x.TRIANGLE_STRIP,attributes:{a_pos:{size:3,value:new Float32Array([.5,.5,0,1,.5,0,.5,.5,.5,1,.5,.5])},a_texCoods:{size:2,value:new Float32Array([0,0,1,0,0,1,1,1])}}})})}render(t,e){var n=this._map.getCanvas();this._iTime+=.01,t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),this.OffScreenFramebuffer.resize({width:1024,height:1024}),Kt(t,{framebuffer:this.OffScreenFramebuffer,color:[0,0,0,1],depth:1}),this.offScreenProgram.draw({uniforms:{uMatrix:e,iTime:this._iTime,iResolution:[1024,1024]},framebuffer:this.OffScreenFramebuffer}),this.model.setUniforms({uMatrix:e,uTexture:this.OffScreenFramebuffer.texture,iResolution:[n.width,n.height]}).draw(),this._map.triggerRepaint()}onRemove(){this.program.delete()}},WindLayer:Ve,ScalarFieldLayer:He,RadarLayer:class{constructor(t){var{id:e="radarLayer",coordinates:n,radius:i}=t;this.id=e,this.type="custom",this._iTime=0;var{x:r,y:o}=De.MercatorCoordinate.fromLngLat(n),s=i/20037508342789244e-9/2,a={x:r-s,y:o+s},l={x:r-s,y:o-s},c={x:r+s,y:o+s},u={x:r+s,y:o-s};return this.coordinates=[a,l,u,c],this}onAdd(t,e){this._map=t,Re(e),e._version=1,this.gl=e;var{coordinates:n}=this,i=new Float32Array([n[0].x,n[0].y,n[1].x,n[1].y,n[2].x,n[2].y,n[0].x,n[0].y,n[2].x,n[2].y,n[3].x,n[3].y]);this.positionBuffer=new V(e,i),this.model=new b(e,{id:"my-program",vs:`
            attribute vec2 positions;
            attribute vec2 textureCoordinates;
            
            varying vec2 v_textureCoordinates;

            uniform mat4 uPMatrix;
            void main() {
                v_textureCoordinates = textureCoordinates;
                gl_Position = uPMatrix * vec4(positions, 0.0, 1.0);
            }`,fs:`
            precision mediump float;

            #define SMOOTH(r,R) (1.0-smoothstep(R-1.0,R+1.0, r))
            #define RANGE(a,b,x) ( step(a,x)*(1.0-step(b,x)) )
            #define RS(a,b,x) ( smoothstep(a-1.0,a+1.0,x)*(1.0-smoothstep(b-1.0,b+1.0,x)) )
            #define M_PI 3.1415926535897932384626433832795

            #define blue1 vec4(0.74,0.95,1.00,1.00)
            #define blue2 vec4(0.87,0.98,1.00,1.00)
            #define blue3 vec4(0.35,0.76,0.83,1.00)
            #define blue4 vec4(0.953,0.969,0.89,1.00)
            #define red   vec4(1.00,0.38,0.227,1.00)

            #define MOV(a,b,c,d,t) (vec2(a*cos(t)+b*cos(0.1*(t)), c*sin(t)+d*cos(0.1*(t))))


            uniform   float  iTime;
            uniform   vec2  iResolution;

            varying vec2 v_textureCoordinates;

            float movingLine(vec2 uv, vec2 center, float radius)
            {
                //angle of the line
                float theta0 = 90.0 * iTime;
                vec2 d = uv - center;
                float r = sqrt( dot( d, d ) );
                if(r<radius)
                {
                    //compute the distance to the line theta=theta0
                    vec2 p = radius*vec2(cos(theta0*M_PI/180.0),
                                        -sin(theta0*M_PI/180.0));
                    float l = length( d - p*clamp( dot(d,p)/dot(p,p), 0.0, 1.0) );
                    d = normalize(d);
                    //compute gradient based on angle difference to theta0
                    float theta = mod(180.0*atan(d.y,d.x)/M_PI+theta0,360.0);
                    float gradient = clamp(1.0-theta/90.0,0.0,1.0);
                    return SMOOTH(l,1.0)+0.5*gradient;
                }
                else return 0.0;
            }

            float circle(vec2 uv, vec2 center, float radius, float width)
            {
                float r = length(uv - center);
                return SMOOTH(r-width/2.0,radius)-SMOOTH(r+width/2.0,radius);
            }

            float circle2(vec2 uv, vec2 center, float radius, float width, float opening)
            {
                vec2 d = uv - center;
                float r = sqrt( dot( d, d ) );
                d = normalize(d);
                if( abs(d.y) > opening )
                    return SMOOTH(r-width/2.0,radius)-SMOOTH(r+width/2.0,radius);
                else
                    return 0.0;
            }
            float circle3(vec2 uv, vec2 center, float radius, float width)
            {
                vec2 d = uv - center;
                float r = sqrt( dot( d, d ) );
                d = normalize(d);
                float theta = 180.0*(atan(d.y,d.x)/M_PI);
                return smoothstep(2.0, 2.1, abs(mod(theta+2.0,45.0)-2.0)) *
                    mix( 0.5, 1.0, step(45.0, abs(mod(theta, 180.0)-90.0)) ) *
                    (SMOOTH(r-width/2.0,radius)-SMOOTH(r+width/2.0,radius));
            }

            float triangles(vec2 uv, vec2 center, float radius)
            {
                vec2 d = uv - center;
                return RS(-8.0, 0.0, d.x-radius) * (1.0-smoothstep( 7.0+d.x-radius,9.0+d.x-radius, abs(d.y)))
                    + RS( 0.0, 8.0, d.x+radius) * (1.0-smoothstep( 7.0-d.x-radius,9.0-d.x-radius, abs(d.y)))
                    + RS(-8.0, 0.0, d.y-radius) * (1.0-smoothstep( 7.0+d.y-radius,9.0+d.y-radius, abs(d.x)))
                    + RS( 0.0, 8.0, d.y+radius) * (1.0-smoothstep( 7.0-d.y-radius,9.0-d.y-radius, abs(d.x)));
            }

            float _cross(vec2 uv, vec2 center, float radius)
            {
                vec2 d = uv - center;
                int x = int(d.x);
                int y = int(d.y);
                float r = sqrt( dot( d, d ) );
                if( (r<radius) && ( (x==y) || (x==-y) ) )
                    return 1.0;
                else return 0.0;
            }
            float dots(vec2 uv, vec2 center, float radius)
            {
                vec2 d = uv - center;
                float r = sqrt( dot( d, d ) );
                if( r <= 2.5 )
                    return 1.0;
                if( ( r<= radius) && ( (abs(d.y+0.5)<=1.0) && ( mod(d.x+1.0, 50.0) < 2.0 ) ) )
                    return 1.0;
                else if ( (abs(d.y+0.5)<=1.0) && ( r >= 50.0 ) && ( r < 115.0 ) )
                    return 0.5;
                else
                    return 0.0;
            }
            float bip1(vec2 uv, vec2 center)
            {
                return SMOOTH(length(uv - center),3.0);
            }
            float bip2(vec2 uv, vec2 center)
            {
                float r = length(uv - center);
                float R = 8.0+mod(87.0*iTime, 80.0);
                return (0.5-0.5*cos(30.0*iTime)) * SMOOTH(r,5.0)
                    + SMOOTH(6.0,r)-SMOOTH(8.0,r)
                    + smoothstep(max(8.0,R-20.0),R,r)-SMOOTH(R,r);
            }
            
            
            void main()
            {
                //vec2 uv = gl_FragCoord.xy;
                //center of the image
                //vec2 c = iResolution.xy/2.0;
                vec2 uv = v_textureCoordinates*700.;
                vec2 c = vec2(.5 * 700.);
                vec4 finalColor = vec4(1.);
                finalColor = vec4( 0.3*_cross(uv, c, 240.0) );
                finalColor += ( circle(uv, c, 100.0, 1.0)
                            + circle(uv, c, 165.0, 1.0) ) * blue1;
                finalColor += (circle(uv, c, 240.0, 2.0) );//+ dots(uv,c,240.0)) * blue4;
                finalColor += circle3(uv, c, 313.0, 4.0) * blue1;
                finalColor += triangles(uv, c, 315.0 + 30.0*sin(iTime)) * blue2;
                finalColor += movingLine(uv, c, 240.0) * blue3;
                finalColor += circle(uv, c, 10.0, 1.0) * blue3;
                finalColor += 0.7 * circle2(uv, c, 262.0, 1.0, 0.5+0.2*cos(iTime)) * blue3;
                /* if( length(uv-c) < 240.0 )
                {
                    //animate some bips with random movements
                    vec2 p = 130.0*MOV(1.3,1.0,1.0,1.4,3.0+0.1*iTime);
                    finalColor += bip1(uv, c+p) * vec3(1,1,1);
                    p = 130.0*MOV(0.9,-1.1,1.7,0.8,-2.0+sin(0.1*iTime)+0.15*iTime);
                    finalColor += bip1(uv, c+p) * vec3(1,1,1);
                    p = 50.0*MOV(1.54,1.7,1.37,1.8,sin(0.1*iTime+7.0)+0.2*iTime);
                    finalColor += bip2(uv,c+p) * red;
                } */

                gl_FragColor = finalColor;
                
            }`,attributes:{positions:this.positionBuffer,textureCoordinates:new V(e,new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]))},vertexCount:6})}render(t,e){var n=this._map.getCanvas();this._iTime+=.01,this.model.setUniforms({uPMatrix:e,iResolution:[n.width,n.height],iTime:this._iTime}).draw(),t.clear(t.DEPTH_BUFFER_BIT),this._map.triggerRepaint()}onRemove(){this.positionBuffer.delete(),this.model.delete()}},TrailLayer:Xe,MigrationLayer:We,WaterLayer:ze,DelayedPointLayer:ke,SparkLayer:Ke,FlowBuildingLayer:$e,WindowBuildingLayer:Je,TextureBuildingLayer:Qe,GradientBuildingLayer:qe,GlowCircleLayer:class extends Le{constructor(){super(...arguments),ne(this,"defaultId","GlowCircleLayer")}getFragmentShaderSource(){return`
            #define M_PI 3.1415926535897932384626433832795
            #define M_TWO_PI (2.0 * M_PI)

            uniform  float  iTime;
            uniform  vec2  iResolution;
            varying vec2 v_textureCoordinates;

            float rand(vec2 n) {
                return fract(sin(dot(n, vec2(12.9898,12.1414))) * 83758.5453);
            }

            float noise(vec2 n) {
                const vec2 d = vec2(0.0, 1.0);
                vec2 b = floor(n);
                vec2 f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
                return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
            }

            vec3 ramp(float t) {
                return t <= .5 ? vec3( 1. - t * 1.4, .2, 1.05 ) / t : vec3( .3 * (1. - t) * 2., .2, 1.05 ) / t;
            }
            vec2 polarMap(vec2 uv, float shift, float inner) {
                uv = vec2(0.5) - uv;
                float px = 1.0 - fract(atan(uv.y, uv.x) / 6.28 + 0.25) + shift;
                float py = (sqrt(uv.x * uv.x + uv.y * uv.y) * (1.0 + inner * 2.0) - inner) * 2.0;
                
                return vec2(px, py);
            }
            float fire(vec2 n) {
                return noise(n) + noise(n * 2.1) * .6 + noise(n * 5.4) * .42;
            }

            float shade(vec2 uv, float t) {
                uv.x += uv.y < .5 ? 23.0 + t * .035 : -11.0 + t * .03;    
                uv.y = abs(uv.y - .5);
                uv.x *= 35.0;
                
                float q = fire(uv - t * .013) / 2.0;
                vec2 r = vec2(fire(uv + q / 2.0 + t - uv.x - uv.y), fire(uv + q - t));
                
                return pow((r.y + r.y) * max(.0, uv.y) + .1, 4.0);
            }

            vec3 color(float grad) {
                float m2 = 1.15;
                grad = sqrt( grad);
                vec3 color = vec3(1.0 / (pow(vec3(0.5, 0.0, .1) + 2.61, vec3(2.0))));
                vec3 color2 = color;
                color = ramp(grad);
                color /= (m2 + max(vec3(0), color));
                return color;
            }

            void main(){
                
                float m1 = 3.6;
                
                float t = iTime;
                vec2 uv = v_textureCoordinates;
                float ff = 1.0 - uv.y;
                vec2 uv2 = uv;
                uv2.y = 1.0 - uv2.y;
                
                uv = polarMap(uv, 1.3, m1) * 3.;
                uv2 = polarMap(uv2, 1.9, m1) * 3.;

                vec3 c1 = color(shade(uv, t)) * ff;
                vec3 c2 = color(shade(uv2, t)) * (1.0 - ff);
                
                vec3 result = c1 + c2;
                
                gl_FragColor = vec4(result,smoothstep(0.1,0.5,result.r));
            }
            `}},WaveCircleLayer:class extends Le{constructor(){super(...arguments),ne(this,"defaultId","GlowCircleLayer")}getFragmentShaderSource(){return`
        //#define time iTime*1.2
        #define pi 3.14159265
        
        #define NUM 20.
        #define PALETTE vec3(.0, 1.4, 2.)+1.5
        
        #define COLORED
        #define MIRROR
        #define ROTATE
        #define ROT_OFST
        #define TRIANGLE_NOISE
        
        uniform   float  iTime;
        uniform   vec2  iResolution;

        varying vec2 v_textureCoordinates;

        
        mat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,-s,s,c);}
        float tri(in float x){return abs(fract(x)-.5);}
        vec2 tri2(in vec2 p){return vec2(tri(p.x+tri(p.y*2.)),tri(p.y+tri(p.x*2.)));}
        mat2 m2 = mat2( 0.970,  0.242, -0.242,  0.970 );
        
        //Animated triangle noise, cheap and pretty decent looking.
        float triangleNoise(in vec2 p)
        {
            float z=1.5;
            float z2=1.5;
            float rz = 0.;
            vec2 bp = p;
            for (float i=0.; i<=3.; i++ )
            {
                vec2 dg = tri2(bp*2.)*.8;
                dg *= mm2(iTime*.3);
                p += dg/z2;
        
                bp *= 1.6;
                z2 *= .6;
                z *= 1.8;
                p *= 1.2;
                p*= m2;
                
                rz+= (tri(p.x+tri(p.y)))/z;
            }
            return rz;
        }
        
        void main()
        {
            float w = 1.;

            vec2 p = v_textureCoordinates*2.-1.;
            p*= 1.05;
            vec2 bp = p;

            #ifdef ROTATE
            p *= mm2(iTime*.25);
            #endif

            float lp = length(p);
            float id = floor(lp*NUM+.5)/NUM;

            #ifdef ROT_OFST
            p *= mm2(id*11.);
            #endif

            #ifdef MIRROR
            p.y = abs(p.y); 
            #endif

            //polar coords
            vec2 plr = vec2(lp, atan(p.y, p.x));

            //Draw concentric circles
            float rz = 1.-pow(abs(sin(plr.x*pi*NUM))*1.25/pow(w,0.25),2.5);

            //get the current arc length for a given id
            float enp = plr.y+sin((iTime+id*5.5))*1.52-1.5;
            rz *= smoothstep(0., 0.05, enp);

            //smooth out both sides of the arcs (and clamp the number)
            rz *= smoothstep(0.,.022*w/plr.x, enp)*step(id,1.);
            #ifndef MIRROR
            rz *= smoothstep(-0.01,.02*w/plr.x,pi-plr.y);
            #endif

            #ifdef TRIANGLE_NOISE

            rz *= (triangleNoise(p/(w*w))*0.9+0.4);
            vec3 col = (sin(PALETTE+id*5.+iTime)*0.5+0.5)*rz*2.;
            col += smoothstep(.4,1.,rz)*0.15;
            col *= smoothstep(.2,1.,rz)+1.;

            #else

            vec3 col = (sin(PALETTE+id*5.+iTime)*0.5+0.5)*rz;
            col *= smoothstep(.8,1.15,rz)*.7+.8;

            #endif

            float alpha = 0.;
            //if(length(col)>0.4) alpha = 1.;
            if(col.r>.1 || col.g>.1 || col.b>.1) alpha = 1.;

            gl_FragColor = vec4(col,alpha);
            
        }
            `}},DiffusionCircleLayer:class extends Le{constructor(){super(...arguments),ne(this,"defaultId","DiffusionCircleLayer")}getFragmentShaderSource(){return`
            precision mediump float;
            uniform   float  iTime;
            uniform   vec2  iResolution;

            varying vec2 v_textureCoordinates;

            mat2 rotate2d(float angle){
                return mat2(cos(angle),-sin(angle),
                            sin(angle),cos(angle));
            }
            
            vec4 paintCircle (vec2 uv, vec2 center, float rad, float width) {
                
                vec2 diff = center-uv;
                float len = length(diff);
            
                float circle = smoothstep(rad-width, rad, len) - smoothstep(rad, rad+width, len);
                //float circle = SMOOTH(len-width/2.0,radius)-SMOOTH(r+width/2.0,radius);

                return vec4(circle);
            }
            
            
            void main()
            {
                vec2 uv = v_textureCoordinates;
                
                vec4 color;
                //float radius = 0.4;
                float radius = clamp(fract(iTime/2.)/2.,0.,.45);
                vec2 center = vec2(0.5);
                
                 
                //paint color circle
                color = paintCircle(uv, center, radius, 0.05);
                
                //color with gradient
                vec2 v = rotate2d(iTime) * uv;
                color *= vec4(v.x, v.y, 0.7-v.y*v.x,1.);
                
                //paint white circle
                color += paintCircle(uv, center, radius, 0.01);
                
                
                gl_FragColor = color;
            }`}}};export{Ii as x};
