const __vite__fileDeps=["assets/Bubbler-BS-By8AO.js","assets/index-CoBen3Ae.js","assets/index-vt03zn5_.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/Ranges-C45XzuCk.js","assets/OptionsColor-Bor3NdTd.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a1 as t,e as o,b as u}from"./index-CoBen3Ae.js";import{O as c}from"./OptionsColor-Bor3NdTd.js";class n{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const s=t(this.color)?void 0:this.color;this.color=o(e.color,i=>c.create(s,i))}e.size!==void 0&&(this.size=e.size)}}}class l extends n{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class h extends n{load(e){super.load(e),e&&(this.divs=o(e.divs,s=>{const i=new l;return i.load(s),i}))}}async function b(r,e=!0){await r.addInteractor("externalBubble",async s=>{const{Bubbler:i}=await u(()=>import("./Bubbler-BS-By8AO.js"),__vite__mapDeps([0,1,2,3,4,5]));return new i(s)},e)}export{h as Bubble,n as BubbleBase,l as BubbleDiv,b as loadExternalBubbleInteraction};
